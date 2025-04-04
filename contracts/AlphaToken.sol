// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AlphaToken is ERC20 {
    constructor() ERC20("Alpha", "A") {
        _mint(msg.sender, 21_000_000 * 10 ** 8); // 21 million tokens with 8 decimals
    }
}
