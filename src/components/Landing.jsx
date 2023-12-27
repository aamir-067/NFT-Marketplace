import React from 'react'
import { Item } from './index'
const Landing = () => {

    const featuredNfts = [
        {
            name: "NFT 1",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            owner: "0x0000000000000000000000000000000000000000"
        },
        {
            name: "NFT 1",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            owner: "0x0000000000000000000000000000000000000000"
        },
        {
            name: "NFT 1",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            owner: "0x0000000000000000000000000000000000000000"
        },
        {
            name: "NFT 1",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            owner: "0x0000000000000000000000000000000000000000"
        },
        {
            name: "NFT 1",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            owner: "0x0000000000000000000000000000000000000000"
        },
        {
            name: "NFT 1",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            owner: "0x0000000000000000000000000000000000000000"
        },
        {
            name: "NFT 1",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            owner: "0x0000000000000000000000000000000000000000"
        },
        {
            name: "NFT 1",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            owner: "0x0000000000000000000000000000000000000000"
        },
        {
            name: "NFT 1",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            owner: "0x0000000000000000000000000000000000000000"
        },
        {
            name: "NFT 1",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            owner: "0x0000000000000000000000000000000000000000"
        }
    ]


    return (
        <div>
            <h2 className='text-3xl font-bold my-10 text-center uppercase tracking'>Our featured collection</h2>
            <div className='w-full flex justify-center items-center'>
                <div className='w-full flex gap-10 p-5 justify-start items-center flex-wrap'>
                    {
                        featuredNfts.map((nft, index) => {
                            return (
                                <Item key={index} image={nft.image} isAvail={index % 2 ? true : false} name={nft.name} owner={nft.owner} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Landing