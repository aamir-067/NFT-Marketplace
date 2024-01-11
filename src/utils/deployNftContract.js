import MyTokens from "../artifacts/MyToken.json";
import { ethers } from "ethers";
import { store } from "../app/store";
export const deployNftContract = async ({ name, symbol }) => {
    const { web3Api } = store.getState(state => state);
    try {
        if (web3Api.signer) {

            const myToken = new ethers.ContractFactory(MyTokens.abi, MyTokens.bytecode, web3Api.signer);

            const contract = await myToken.deploy(name, symbol);

            console.log("Token deployed to the address: " + contract.target);

            await contract.waitForDeployment();
            return contract;

        } else {
            console.log("metamask is not installed...");
            return "Connect wallet first.";
        }
    } catch (error) {
        console.log(error);
        return error.massage || "something went wrong while deploying NFT contract";

    }
};