
import { deployNftContract } from "./deployNftContract";
import { storeFile } from "./storage";
import { ethers } from "ethers";
export const listNFT = async ({ name, symbol, price, image, description }) => {
    try {
        if (web3Api.signer) {

            // deploy contract.
            // upload picture and get uri
            // upload metadata and get uri.
            // mint nft
            // give permission to the marketplace
            // save changes in the marketplace.
            // refresh the total nfts showing on the page.

            // upload a contract
            const tokenContract = await deployNftContract({ name, symbol });


            // upload an image
            const imageUri = await storeFile({ fileToUpload: image, });
            if (!imageUri) {
                console.error("Something went wrong while uploading an image");
                return null;
            }

            // upload the metadata
            const metadataDetails = {
                name,
                description,
                image: imageUri
            }
            const metaData = new File([JSON.stringify(metadataDetails)], "metadata.json");
            const metaDataUri = await storeFile({ fileToUpload: metaData });
            if (!metaDataUri) {
                console.error("Something went wrong while uploading the metaData");
                return null;
            }


            // mint the NFT.
            const tokenId = await tokenContract.mint(metaDataUri);

            // give permission to the marketplace.
            await tokenContract.approve(web3Api.marketplace.target, ethers.toNumber(tokenId));

            //save Changes in the marketplace.
            await web3Api.Marketplace.listItem(tokenContract.target, tokenId, price);

            // boom you list an NFT.

        } else {
            console.log("metamask is not installed...");
            return "Connect wallet first.";
        }
    } catch (error) {
        console.log(error.massage);
        return error.massage || "something went wrong while deploying NFT contract";
    }

};