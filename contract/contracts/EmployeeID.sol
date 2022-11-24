// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
// import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// interface IEmployeeID {
//     function getInfo() external view returns (string memory);

//     function setInfo(string memory _info) external;
// }

import "./interfaces/IEmployeeID.sol";

contract EmployeeID is IEmployeeID {
    // using Address for address;
    // using Strings for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCount;

    // Token name
    string private _name;

    // Token symbol
    string private _symbol;

    // Mapping owner address to token count
    mapping(address => string) private _employeeId;

    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    function setInfo(string memory uri) public override {
        _employeeId[msg.sender] = uri;
    }

    function getInfo() public view override returns (string memory) {
        return _employeeId[msg.sender];
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }
}
