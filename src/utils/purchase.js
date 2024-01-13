import { store } from "../app/store";
import { ethers } from "ethers";
export const purchaseNFT = async ({ nftId }) => {
    const { web3Api } = store.getState();
    try {
        if (web3Api.signer) {

            const { allNFTs } = store.getState().general;

            let thatNFT;
            if (allNFTs.length > nftId && nftId >= 0) {
                thatNFT = allNFTs[nftId];
            } else {
                console.log(`This itemId ${nftId} in not exist`);
                return null;
            }


            // check if its available.
            if (thatNFT[5] === true) {
                console.log("That NFT is already sold", thatNFT[5]);
                return null;
            }

            // get the nft price.
            const nftPrice = ethers.toNumber(thatNFT[4]);

            // send the transaction.
            const response = await web3Api.marketplace.purchase(nftId, { value: nftPrice });

            console.log("NFT purchase completed");
            await response.wait();



        } else {
            console.log("connect metamask first");
            return null;
        }
    } catch (e) {
        console.error(e);
        return 'something went wrong while connecting to metamask';
    }
}