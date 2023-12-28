import { ethers } from "ethers";
import { marketplaceAddress } from "../CONSTANTS";
import Marketplace from "../artifacts/Marketplace.json";
export const initBySigner = async () => {
    try {
        if (window.ethereum) {
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

            // store the web3Api

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
            const provider = new ethers.BrowserProvider(window.ethereum);
            const marketplace = new ethers.Contract(marketplaceAddress, Marketplace.abi, provider);
            console.log("wallet connected");

            // listen to wallet events
            window.ethereum.on('chainChanged', async () => {
                await initByProvider();
            });
            window.ethereum.on('accountsChanged', async () => {
                await initByProvider();
            });


        } else {
            console.log("please install wallet first");
            return "metamask is not installed";
        }
    } catch (e) {
        console.error(e);
        return "something went wrong while connecting to metamask";
    }
}