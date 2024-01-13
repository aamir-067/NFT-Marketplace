import { store } from "../app/store";
import { setGeneralReducer } from "../features";
export const fetchAllNfts = async () => {
    try {
        const web3Api = store.getState().web3Api;
        if (web3Api.marketplace) {

            const allNFTs = await web3Api.marketplace.getAllNFTs();

            console.log("All NFTs are : ", allNFTs);
            store.dispatch(setGeneralReducer({ allNFTs }));
            return allNFTs;

        } else {
            return "something went wrong while getting the listed nfts.";
        }
    } catch (e) {
        console.log(e);
        return 'something went wrong while connecting to metamask';
    }
}

