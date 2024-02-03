import React, { useEffect, useState } from 'react'
import Item from './Item';
import { useNavigate } from 'react-router-dom';
import { store } from "../app/store";
import axios from "axios";
import { serverApi } from "../CONSTANTS";
import { EvmChain } from '@moralisweb3/common-evm-utils';
import { moralisApi } from '../CONSTANTS';
import image from "../images/imagePlaceholder.jpg";

const MyTokens = () => {
    const navigate = useNavigate();
    const [allNfts, setAllNfts] = useState([]);

    const fetchDetails = async (connectedWallet) => {
        const { chainId } = await store.getState().web3Api.provider.getNetwork();

        try {
            const response = await axios({
                method: 'get',
                url: `${serverApi}/${chainId}/${connectedWallet}/nfts`,
            });
            console.log("response =>", response.data.data.response.result);
            setAllNfts(response.data.data.response.result)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const connectedWallet = store.getState().web3Api.signer?.address;
        connectedWallet && fetchDetails(connectedWallet);
    }, [])




    const featuredNfts = [
        {
            name: "Pikaso",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            owner: "0x0000000000000000000000000000000000000000",
        },
        {
            name: "NFT 2",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            owner: "0x0000000000000000000000000000000000000000",
        },
        {
            name: "NFT 1",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            owner: "0x0000000000000000000000000000000000000000",
        }
    ];
    return (
        <div>
            <div className="md:flex block justify-evenly items-center">
                <h2 className="lg:text-3xl w-full md:w-8/12 lg:w-9/12  text-center text-2xl font-bold my-10 whitespace-nowrap uppercase tracking">
                    User Nfts
                </h2>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="w-full flex gap-10 p-5 justify-center md:justify-start items-center flex-wrap">
                    {allNfts.map((nft, index) => {
                        return (
                            <div onClick={() => {
                                navigate(`/details/${nft.owner_of}/${nft.token_address}/${nft.token_id}/${false}`)
                            }}
                                key={index}>
                                <Item
                                    image={(nft.media && nft?.media?.original_media_url.slice(0, 4) === "ipfs") ? `https://gateway.pinata.cloud/ipfs/${nft?.media?.original_media_url.replace("ipfs://", "")}` : image}
                                    isAvail={index % 2 ? true : false}
                                    name={nft.name}
                                    owner={nft.token_id}
                                    isOwned={true}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div >
    )
}

export default MyTokens