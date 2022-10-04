// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Frontmaniacs is ERC721, ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Frontmaniacs", "FMS") {}

    uint256 maxSupply = 1000; 

    function _baseURI() internal pure override returns (string memory) {
        
        return "ipfs://QmRkEy66AczB2yT4mzicSW1sPLhUiM98AwBiKC1aEDHqnC/";
    }

    // Step 1: Researching the safeMint()
    // Step 2: A tokenId always increments with mint
    // Step 3: Deploy a contract locally on VM Remix London
    // Step 4: Use safeMint() locally on VM Remix London
    // Step 5: Try out balanceOf, ownerOf, tokenURI functions after using safeMint()
    function safeMint() public {
        // Step 6: Make the safeMint function payable
        // Step 6a: Add a requirement of msg.value >= 0.01 ether
        // Step 7: Ethereum Metric System
        // Step 8: use SafeMint again without value
        // Step 9: use SafeMint again WITH value
        // Step 10: Add a requirement of totalSupply() <= maxSupply
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