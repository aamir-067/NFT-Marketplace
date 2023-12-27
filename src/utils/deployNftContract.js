import { MyTokens } from "../components";
import { ethers } from "ethers";

export const deployNftContract = async ({ name, symbol }) => {
    try {
        if (web3Api.signer) {

            const myToken = new ethers.ContractFactory(MyTokens.abi, MyTokens.bytecode, web3Api.signer);

            const contract = await myToken.deploy();

            await contract.wait();

            console.log("Token deployed to the address: " + contract.target);

            return contract;


        } else {
            console.log("metamask is not installed...");
            return "Connect wallet first.";
        }
    } catch (error) {
        console.log(error.massage);
        return error.massage || "something went wrong while deploying NFT contract";
    }

};