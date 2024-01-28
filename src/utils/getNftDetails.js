import axios from "axios";
import { serverApi } from "../CONSTANTS";

export const getNftDetails = async (chain, address, tokenId) => {

    const response = await axios.get(serverApi + `/${chain}/${address}/${tokenId}`);

    console.log(response);
    return response;
}