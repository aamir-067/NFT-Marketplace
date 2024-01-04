import React, { useEffect } from 'react'
import Item from './Item';
import { useNavigate } from 'react-router-dom';
// import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/common-evm-utils';
import { moralisApi } from '../CONSTANTS';

const MyTokens = () => {
    const navigate = useNavigate();

    // const getAccountNfts = async (address, chain) => {
    //     console.log(address, chain);
    //     console.log(Moralis);
    //     try {
    //         // TODO: move  the apiKey to .env
    //         await Moralis.start({
    //             apiKey: moralisApi
    //         });


    //         const response = await Moralis.EvmApi.nft.getWalletNFTs({
    //             "chain": chain,
    //             "format": "decimal",
    //             "mediaItems": true,
    //             "address": address
    //         });

    //         console.log(response.result);
    //         return response;
    //     } catch (e) {
    //         console.error(e);
    //         return 'something went wrong while getting  user\'s account nfts.';
    //     }
    // }

    // useEffect(() => {
    //     (async () => {
    //         await getAccountNfts("0x575cA73E642983fF8818F0cb0Fa692A788Bc45A4", EvmChain.SEPOLIA);
    //     })();
    // })


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
                    {featuredNfts.map((nft, index) => {
                        return (
                            <div onClick={() => {
                                navigate(`/details/${nft.name}/${index}/${true}/${true}`)
                            }}
                                key={index}>
                                <Item
                                    image={nft.image}
                                    isAvail={index % 2 ? true : false}
                                    name={nft.name}
                                    owner={nft.owner}
                                    isOwned={true}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default MyTokens