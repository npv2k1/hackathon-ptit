// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IEmployeeID {
    function getInfo() external view returns (string memory);

    function getAddressInfo(address d) external view returns (string memory);

    function setInfo(string memory _info) external;
}
