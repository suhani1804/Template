// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Count {
    uint256 public count;

    constructor() { 
        count = 0;
    }

    function increase() public {
        count++;
    }
    function getCounter() public view returns (uint256)
    {
        return count;
    }
}