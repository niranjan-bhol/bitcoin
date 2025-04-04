// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AurumToken is ERC20 {
    constructor() ERC20("Aurum", "AU") {
        _mint(msg.sender, 21_000_000 * 10 ** 8); // 21 million with 8 decimals
    }

    function decimals() public view virtual override returns (uint8) {
        return 8;
    }
}
