import { toNumber } from "ethers";
import { store } from "../app/store";

export const fetchSpecificNFTDetails = async (itemId) => {
    try {
        const web3Api = store.getState().web3Api;
        if (web3Api.marketplace) {

            const response = await web3Api.marketplace.currentNft();
            if (toNumber(response) > itemId && itemId > 0) {
                return undefined;  // this item doesn't exists.
            }

            const firstNFT = await web3Api.marketplace.nftCollection(itemId);
            console.log(firstNFT);

            return firstNFT;

        } else {
            return "something went wrong while getting the listed nfts.";
        }
    } catch (e) {
        console.error(e);
        return 'something went wrong while connecting to metamask';
    }
}

export const fetchAllNfts = async () => {
    try {
        const web3Api = store.getState().web3Api;
        if (web3Api.marketplace) {

            const currentNFT = toNumber(await web3Api.marketplace.currentNft());
            const allNFTS = [];

            for (let i = 0; i < currentNFT; i++) {
                const nftDetail = await fetchSpecificNFTDetails(i)
                if (toNumber(nftDetail[5]) > 0) {
                    allNFTS.push(nftDetail)
                }
            }

            return allNFTS.length ? allNFTS : [];

        } else {
            return "something went wrong while getting the listed nfts.";
        }
    } catch (e) {
        console.error(e);
        return 'something went wrong while connecting to metamask';
    }
}

