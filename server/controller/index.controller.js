import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import Moralis from 'moralis';
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
    console.log(address, chain);
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
    console.log(response);


    return res.status(200).json(
        new ApiResponse(200, "OK", { response })
    )
});


// export const uploadByPinata = asyncHandler(async(req, res)=>{

// })