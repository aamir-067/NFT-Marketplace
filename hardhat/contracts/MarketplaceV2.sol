// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract Marketplace {
    struct ListItem {
        uint id;
        uint tokenId;
        ERC721 token;
        address seller;
        uint price;
        bool isSold;
    }

    struct SoldItem {
        uint id;
        address buyer;
        uint price;
        bool isSold;
    }
    mapping(uint => ListItem) public listitems;
    mapping(uint => SoldItem) public soldItems;
    uint public listItemsCount;
    uint public soldItemsCount;

    uint public immutable fee;
    address public immutable owner;

    // event for new listing
    event ItemListed(
        uint itemId,
        address item,
        uint tokenId,
        address seller,
        uint price
    );

    // event for new purchase
    event ItemSold(
        uint itemId,
        address item,
        uint tokenId,
        address buyer,
        address seller,
        uint price
    );

    constructor(uint _fee) {
        fee = _fee;
        owner = msg.sender;
    }

    function purchase(uint itemId) external payable {
        ListItem storage item = listitems[itemId];
        // uint feePrice = calculateFeePrice(item.price);

        require(itemId > 0 && itemId <= listItemsCount, "This item not exists");
        require(item.price <= msg.value, "Not enough amount to purchase");
        require(!item.isSold, "This item is already sold");

        item.token.transferFrom(address(this), msg.sender, item.tokenId);
        item.isSold = true;

        // payable(item.seller).transfer(item.price - feePrice);
        payable(item.seller).transfer(item.price);
        // payable(owner).transfer(feePrice);
        soldItemsCount++;
        // emits the SoldItem event
        emit ItemSold(
            itemId,
            address(item.token),
            item.tokenId,
            msg.sender,
            item.seller,
            item.price
        );
    }

    function listItem(ERC721 _token, uint price, uint tokenId) public {
        require(price > 0, "shold greater then 0");
        _token.transferFrom(msg.sender, address(this), tokenId);

        // increment the listTtemsCount
        unchecked {
            listItemsCount++;
        }

        listitems[listItemsCount] = ListItem( // store the item in teh mapping
            listItemsCount,
            tokenId,
            _token,
            msg.sender,
            price,
            false
        );

        // emit the newItemList evenr
        emit ItemListed(
            listItemsCount,
            address(_token),
            tokenId,
            msg.sender,
            price
        );
    }

    function calculateFeePrice(uint _price) internal view returns (uint) {
        uint actual = (_price * fee) / 100;
        return actual;
    }
}
