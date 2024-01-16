import { ethers } from "ethers";
import { store } from "../app/store";
import MyToken from "../artifacts/MyToken.json";

// get the details using moralis.
// set permission for  marketplace.
// save result in the contract.

// 
export const listNFT = async ({ address, tokenId, price }) => {
    try {
        const web3Api = store.getState().web3Api;
        if (web3Api.signer) {
            // set the permission to the marketplace contract

            const NFT = new ethers.Contract(address, MyToken.abi, web3Api.signer);
            const res = await NFT.approve(web3Api.marketplace.target, tokenId);

            // save records in marketplace.
            const response = await web3Api.marketplace.listItem(address, tokenId, ethers.parseEther(price));
            console.log("Token listed here is response :", response);
            return true;

        } else {
            console.log("connect wallet first");
            return null;
        }
    } catch (e) {
        console.error(e);
        return 'something went wrong while connecting to metamask';
    }
}

