// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NUMI is ERC20 {
    constructor(uint256 initialSupply) ERC20("NUMINE Token", "NUMI") {
        _mint(msg.sender, initialSupply);
    }
}