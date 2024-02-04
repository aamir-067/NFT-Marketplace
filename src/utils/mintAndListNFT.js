
import { store } from "../app/store";
import { deployNftContract } from "./deployNftContract";
import { ethers } from "ethers";
import axios from "axios";
import { serverApi } from "../CONSTANTS";
export const mintAndListNFT = async ({ name, symbol, price, image, description }) => {
    const { web3Api } = store.getState(state => state);
    try {
        if (web3Api.signer) {

            // upload a contract
            const tokenContract = await deployNftContract({ name, symbol });

            // upload an image
            const data = new FormData();
            data.append("file", image);
            const res = await axios({
                method: "POST",
                url: `${serverApi}/upload-to-ipfs`,
                data,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            const imageUri = res.data.data.ipfsLink

            if (!imageUri) {
                console.error("Something went wrong while uploading an image");
                return null;
            }


            // upload the metadata  // BUG: this returns undefined //! BUG

            const json = {
                description,
                image: imageUri,
                name
            }
            const tokenData = new File([JSON.stringify(json)], `metadata.json`);
            console.log(tokenData);

            const meta = new FormData();
            meta.append("file", tokenData);
            let response = await axios({
                method: "POST",
                url: `${serverApi}/upload-to-ipfs`,
                data: meta,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            const metadataUri = res.data.data.ipfsLink;
            if (!metadataUri) {
                console.error("Something went wrong while uploading the metaData");
                return null;
            }

            console.log(metadataUri);

            // mint the NFT.
            // console.log(tokenContract);
            response = await tokenContract.mint(metadataUri);
            await response.wait();



            // give permission to the marketplace.
            const resp = await tokenContract.approve(web3Api.marketplace.target, 0);
            await resp.wait();

            // save Changes in the marketplace.
            await web3Api.marketplace.listItem(tokenContract.target, 0, ethers.parseEther(price + ""));
            return true;

        } else {
            console.log("metamask is not installed...");
            return "Connect wallet first.";
        }
    } catch (error) {
        console.log(error);
        return null;
    }

};