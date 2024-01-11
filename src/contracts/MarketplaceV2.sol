// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Marketplace {

    struct NftStructure {
        uint itemId;
        uint tokenId;
        address owner;
        address nft;
        uint price;
        bool isSold;
    }

    NftStructure[] public nftCollection;


    // event for new purchase
    event ItemSold(
        address buyer,
        uint price
    );


    function purchase(uint itemId) external payable {

        
        require((nftCollection.length > itemId) && (itemId >=0), "This item not exists");

        NftStructure memory item = nftCollection[itemId];
        require(item.price <= msg.value, "Not enough amount to purchase");
        require(item.isSold == false, "This item is already sold");
        // uint feePrice = calculateFeePrice(item.price);

        IERC721(item.nft).transferFrom(item.owner, msg.sender, item.tokenId); 
        address nftOwner = item.owner;
        // change the NFT details
        item.isSold = true;
        item.owner = msg.sender;

        // payable(item.seller).transfer(item.price - feePrice);
        // payable(owner).transfer(feePrice);

        nftCollection[itemId] = item;

        payable(nftOwner).transfer(msg.value);


        // emits the SoldItem event
        emit ItemSold(
            item.owner,
            item.price
        );
    }

    function listItem(address nft, uint tokenId, uint price) public {
        
        // price is not 0
        // contract is approved to transfer the token.
        // increment the totalListed var.
        // save the record.

        require(price > 0, "shold greater then 0");
        require(IERC721(nft).getApproved(tokenId) == address(this), "First send the NFT to Contract.");

        nftCollection.push(NftStructure(
            nftCollection.length,
            tokenId,
            msg.sender,
            nft,
            price,
            false
        ));
    }

    function totalNftsCount() public view returns(uint){
        return nftCollection.length;
    }

    function getAllNFTs() public view returns(NftStructure[] memory){
        return nftCollection;
    }

}
