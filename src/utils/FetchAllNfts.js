import { store } from "../app/store";

export const fetchAllNfts = async () => {
    try {
        const web3Api = store.getState().web3Api;
        if (web3Api.marketplace) {

            const allNFTS = await web3Api.marketplace.getAllNFTs();

            console.log("All NFTs are : ", allNFTS);

            return allNFTS

        } else {
            return "something went wrong while getting the listed nfts.";
        }
    } catch (e) {
        console.error(e);
        return 'something went wrong while connecting to metamask';
    }
}

