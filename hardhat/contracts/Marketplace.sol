// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Marketplace {

    struct NftStructure {
        uint itemId;
        uint tokenId;
        address seller;
        address owner;
        address nft;
        uint price;
        bool isSold;
    }

    mapping(uint => NftStructure) public nftCollection;
    uint public currentNft;

    address public immutable owner;


    // event for new purchase
    event ItemSold(
        address item,
        address buyer,
        address seller,
        uint price
    );

    constructor() {
        owner = msg.sender;
    }


    function purchase(uint itemId) external payable {

        // check for item is exist.
        // check for its price.
        // check wheather its already sold or not.
        // transfer the NFT to the person.
        // change the NFT details.
        // transfer the amount to the NFT owner.
        // tranfer the rest amount to the developer.
        // emit the Sold NFT event.

        NftStructure storage item = nftCollection[itemId];
        
        require(item.nft != address(0), "This item not exists");

        require(item.price <= msg.value, "Not enough amount to purchase");
        require(item.isSold == false, "This item is already sold");
        // uint feePrice = calculateFeePrice(item.price);

        IERC721(item.nft).transferFrom(item.seller, msg.sender, item.tokenId); 

        // change the NFT details
        item.isSold = true;
        item.seller = item.owner;
        item.owner = msg.sender;

        // payable(item.seller).transfer(item.price - feePrice);
        // payable(owner).transfer(feePrice);

        payable(item.seller).transfer(item.price);


        // emits the SoldItem event
        emit ItemSold(
            item.nft,
            item.owner,
            item.seller,
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

        // increment the currentNft
        unchecked {
            currentNft++;
        }


        nftCollection[currentNft] = NftStructure(
            currentNft,
            tokenId,
            msg.sender,
            msg.sender,
            nft,
            price,
            false
        );

    }

}
