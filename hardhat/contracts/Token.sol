// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyToken is ERC721, ERC721URIStorage {
    uint256 public _nextTokenId;

    constructor(string memory _name, string memory _sign)
    ERC721(_name , _sign) {}

    function mint( string memory uri) public returns (uint){
        uint tokenId  = _nextTokenId;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        _nextTokenId++;
        return tokenId;
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
