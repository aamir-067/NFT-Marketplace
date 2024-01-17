import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import Moralis from 'moralis';
import PinataSDK from "@pinata/sdk";
import fs from "fs";

import { uploadToCloudinary } from "../utils/cloudinary.js";





export const healthCheck = asyncHandler(async (req, res) => {
    return res.status(200).json(
        new ApiResponse(200, "OK")
    )
});


export const uploadFile = asyncHandler(async (req, res) => {
    const file = await req?.file;
    if (!file) {
        throw new ApiError(401, "file is missing");
    }

    const response = await uploadToCloudinary(file);
    if (!response) {
        throw new ApiError(400, "something went wrong while uploading file");
    }

    return res.status(200).json(
        new ApiResponse(200, "OK", { url: response.url })
    );

    // upload to cloudinary
    // send the string as a response
});

export const getAccountDetails = asyncHandler(async (req, res) => {
    const { address, chain } = req.params;
    if (!address) {
        throw new ApiError(401, "route not found");
    }

    await Moralis.start({
        apiKey: process.env.MORALIS_API_KEY
    });

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
        "chain": chain,
        "format": "decimal",
        "mediaItems": true,
        "address": address
    });
    if (!response) {
        throw new ApiError(403, "something went wrong while fetching the NFTs");
    }


    return res.status(200).json(
        new ApiResponse(200, "OK", { response })
    )
});

export const getNftDetails = asyncHandler(async (req, res) => {
    const { address, chain, tokenId } = req.params;
    if ([address, chain, tokenId].some(item => item === undefined)) {
        throw new ApiError(401, "route not found");
    }

    await Moralis.start({
        apiKey: process.env.MORALIS_API_KEY
    });

    const response = await Moralis.EvmApi.nft.getNFTMetadata({
        "chain": chain,
        "format": "decimal",
        "normalizeMetadata": true,
        "mediaItems": true,
        "address": address,
        "tokenId": tokenId
    });

    if (!response) {
        throw new ApiError(403, "something went wrong while fetching the NFT details");
    }

    return res.status(200).json(
        new ApiResponse(200, "OK", { response })
    )
})


export const uploadByPinata = asyncHandler(async (req, res) => {
    const file = req.file;
    if (!file) {
        throw new ApiError(401, "file is missing");
    }

    const pinata = new PinataSDK({ pinataJWTKey: process.env.PINATA_JWT });
    const readableStreamForFile = fs.createReadStream(file.path);
    const responseV2 = await pinata.pinFileToIPFS(readableStreamForFile, {
        pinataMetadata: {
            name: file.filename
        }
    })

    fs.unlinkSync(file.path)

    return res.status(200).json(
        new ApiResponse(200, "OK", {
            ipfsHas: responseV2.IpfsHash,
            ipfsLink: `ipfs://${responseV2.IpfsHash}`
        })
    )
});