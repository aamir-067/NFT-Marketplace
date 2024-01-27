
import { store } from "../app/store";
import { deployNftContract } from "./deployNftContract";
import { ethers } from "ethers";
export const mintAndListNFT = async ({ name, symbol, price, image, description }) => {
    const { web3Api } = store.getState(state => state);
    try {
        if (web3Api.signer) {


            // upload a contract
            const json = { name: "Aamir" }
            const temp = new File([json], "image.png");
            console.log(temp);


            //const tokenContract = await deployNftContract({ name, symbol });

            // upload an image // BUG: this returns undefined //! BUG
            // const imageUri = await storeFile({ fileToUpload: image }); 
            // if (!imageUri) {
            //     console.error("Something went wrong while uploading an image");
            //     return null;
            // }

            // upload the metadata  // BUG: this returns undefined //! BUG
            // const metadataDetails = {
            //     name,
            //     description,
            //     image: imageUri
            // }
            // const metaData = new File([JSON.stringify(metadataDetails)], "metadata.json");

            // const metaDataUri = await storeFile({ fileToUpload: metaData });
            // if (!metaDataUri) {
            //     console.error("Something went wrong while uploading the metaData");
            //     return null;
            // }


            // mint the NFT.
            // console.log(tokenContract);
            // const response = await tokenContract.mint("testing");
            // await response.wait();



            // give permission to the marketplace.
            // const resp = await tokenContract.approve(web3Api.marketplace.target, 0);
            // await resp.wait();

            // save Changes in the marketplace.
            // const res = await web3Api.marketplace.listItem(tokenContract.target, 0, ethers.parseEther(price));
            return true;

        } else {
            console.log("metamask is not installed...");
            return "Connect wallet first.";
        }
    } catch (error) {
        console.log(error);
        return error;
    }

};