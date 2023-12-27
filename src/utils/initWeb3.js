import { ethers } from "ethers";
import { marketplaceAddress } from "../CONSTANTS";
export const initBySigner = async () => {
    try {
        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();

            // listen to wallet events
            window.ethereum.on('chainChanged', async () => {
                await initBySigner();
                await checkAccountDetails();
            });
            window.ethereum.on('accountsChanged', async () => {
                await initBySigner();
                await checkAccountDetails();
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
            const marketplace = new ethers.Contract(marketplaceAddress, abi, provider);


            // listen to wallet events
            window.ethereum.on('chainChanged', async () => {
                await initByProvider();
                await checkAccountDetails();
            });
            window.ethereum.on('accountsChanged', async () => {
                await initByProvider();
                await checkAccountDetails();
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