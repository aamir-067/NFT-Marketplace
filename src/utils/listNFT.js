let uri, token, market, signer, ethers;
export const listNFT = async () => {

    // first mint The NFT then list it.
    const res = await token.mint(uri);
    await res.wait();
    const tokenId = await token._nextTokenId();


    // also call the getApproveForAll() too.
    await token.safeTransferFrom(signer.address, market.target, ethers.toNumber(tokenId) - 1);  // -1 => because its nextTokenId.




}