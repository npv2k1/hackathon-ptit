// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./SBT/interfaces/ISBT721.sol";
import "./SBT/interfaces/IERC721Metadata.sol";

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableMap.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract VCheckin is AccessControl, ISBT721, IERC721Metadata {
    using Strings for uint256;
    using Counters for Counters.Counter;
    using EnumerableMap for EnumerableMap.AddressToUintMap;
    using EnumerableMap for EnumerableMap.UintToAddressMap;

    // Mapping from token ID to owner address
    EnumerableMap.UintToAddressMap private _ownerMap;
    mapping(address => uint256) private _balances;
    // Token Id
    Counters.Counter private _tokenId;

    // Token name
    string public override name;

    // Token symbol
    string public override symbol;

    // Token URI
    string private _baseTokenURI;

    // Operator
    bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");

    /**
     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.
     */
    constructor(string memory name_, string memory symbol_, address admin_) {
        name = name_;
        symbol = symbol_;

        // grant DEFAULT_ADMIN_ROLE to contract creator
        _grantRole(DEFAULT_ADMIN_ROLE, admin_);
        _grantRole(OPERATOR_ROLE, admin_);
    }

    function attest(address to) external override returns (uint256) {
        // require(
        //     hasRole(OPERATOR_ROLE, _msgSender()),
        //     "Only the account with OPERATOR_ROLE can attest the SBT"
        // );
        require(to != address(0), "Address is empty");
        // require(!_tokenMap.contains(to), "SBT already exists");

        _tokenId.increment();
        uint256 tokenId = _tokenId.current();

        _ownerMap.set(tokenId, to);
        _balances[to] += 1;

        emit Attest(to, tokenId);
        emit Transfer(address(0), to, tokenId);

        return tokenId;
    }

    function revoke(address from) public override {
        // Not revoke
    }

    function burn() external override {
        // no burn
    }

    /**
     * @dev Update _baseTokenURI
     */
    function setBaseTokenURI(string calldata uri) public {
        require(
            hasRole(DEFAULT_ADMIN_ROLE, _msgSender()),
            "Only the account with DEFAULT_ADMIN_ROLE can set the base token URI"
        );

        _baseTokenURI = uri;
    }

    function balanceOf(address owner) external view override returns (uint256) {
        return _balances[owner];
    }

    function tokenIdOf(address from) external view override returns (uint256) {
        // return _tokenMap.get(from, "The wallet has not attested any SBT");
    }

    function ownerOf(uint256 tokenId) external view override returns (address) {
        return _ownerMap.get(tokenId, "Invalid tokenId");
    }

    function totalSupply() external view override returns (uint256) {
        // return _tokenMap.length();
    }

    function isOperator(address account) external view returns (bool) {
        return hasRole(OPERATOR_ROLE, account);
    }

    function isAdmin(address account) external view returns (bool) {
        return hasRole(DEFAULT_ADMIN_ROLE, account);
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId) external view override returns (string memory) {
        return bytes(_baseTokenURI).length > 0 ? string(abi.encodePacked(_baseTokenURI, tokenId.toString())) : "";
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return
            interfaceId == type(IERC721).interfaceId ||
            interfaceId == type(IERC721Metadata).interfaceId ||
            super.supportsInterface(interfaceId);
    }
}
