// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.10; 

contract HelloWorld {
    string internal language = "Indonesian"; 

    function get() public view returns (string memory) {
        return language; 
    }
}

