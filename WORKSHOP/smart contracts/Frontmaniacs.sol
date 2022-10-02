// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Frontmaniacs is ERC721, ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    uint256 maxSupply = 20;   
    
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Frontmaniacs", "FMS") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmW8Jj4QQJJ5wZggg9SxHJCkhcRfMxkY7peMtgQKoFcdwU/";
    }

    function safeMint() public {
        // Make the safeMint function payable
        // Add a requirement of msg.value >= 0.01 ether
        // Add a requirement of totalSupply() <= maxSupply
        
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        _requireMinted(tokenId);

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, Strings.toString(tokenId), ".json")) : "";
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}