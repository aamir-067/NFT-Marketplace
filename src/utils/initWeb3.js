import { ethers, toBeHex } from "ethers";
import { marketplaceAddress } from "../CONSTANTS";
import Marketplace from "../artifacts/Marketplace.json";
import { store } from "../app/store";
import { initWeb3 } from "../features";
export const initBySigner = async () => {
    try {
        if (window.ethereum) {
            if (store.getState().web3Api.signer) {
                return;
            }
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const marketplace = new ethers.Contract(marketplaceAddress, Marketplace.abi, signer);

            console.log("wallet connected by signer....", marketplace.target, signer.address);
            // listen to wallet events
            window.ethereum.on('chainChanged', async () => {
                await initBySigner();
            });
            window.ethereum.on('accountsChanged', async () => {
                await initBySigner();
            });
            console.log("provider : ", toBeHex(provider._network.chainId));

            // store the web3Api
            store.dispatch(initWeb3({ provider, marketplace, signer }));

        } else {
            console.log("please install wallet first");
            return "metamask is not installed";
        }
    } catch (e) {
        console.error(e);
        return "something went wrong while connecting to metamask";
    }
};

export const initByProvider = async () => {
    try {
        if (window.ethereum) {
            if (store.getState().web3Api.provider) {
                return;
            }
            const provider = new ethers.BrowserProvider(window.ethereum);
            const marketplace = new ethers.Contract(marketplaceAddress, Marketplace.abi, provider);
            console.log("provider : ", provider);

            // listen to wallet events
            window.ethereum.on('chainChanged', async () => {
                await initByProvider();
            });
            window.ethereum.on('accountsChanged', async () => {
                await initByProvider();
            });

            // store the payload.
            store.dispatch(initWeb3({ provider, marketplace, signer: null }));

        } else {
            console.log("please install wallet first");
            return "metamask is not installed";
        }
    } catch (e) {
        console.error(e);
        return "something went wrong while connecting to metamask";
    }
}