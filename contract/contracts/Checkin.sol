// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IEmployeeID.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CheckinContract {
    struct Checkin {
        uint256 id;
        address user;
        uint256 timestamp;
        string userInfo;
        string checkinInfo;
    }

    mapping(uint256 => address) checkinPerUser;
    mapping(uint256 => Checkin) checkins;
    mapping(address => uint256) reward;

    mapping(address => bool) locks;

    uint256 public checkinId = 0;
    uint256 public rewardAmount = 10;

    address public userInfoContract;
    address public tokenContract;
    address public owner;

    // event checkin
    event CheckinEvent(uint256 id, address user, uint256 timestamp, string userInfo, string checkinInfo);

    constructor(address _userInfoContract, address _token) {
        userInfoContract = _userInfoContract;
        owner = msg.sender;
        tokenContract = _token;
    }

    function checkIn(string memory _checkinInfo) public {
        checkinId++;
        string memory _userInfo = IEmployeeID(userInfoContract).getAddressInfo(msg.sender);
        require(bytes(_userInfo).length > 0, "User info is empty");

        checkins[checkinId] = Checkin(checkinId, msg.sender, block.timestamp, _userInfo, _checkinInfo);

        // ERC20(tokenContract).increaseAllowance(address(this), rewardAmount);

        reward[msg.sender] = reward[msg.sender] += rewardAmount;

        checkinPerUser[checkinId] = msg.sender;
        emit CheckinEvent(checkinId, msg.sender, block.timestamp, _userInfo, _checkinInfo);
    }

    function getMyInfo() public view returns(string memory){
        return IEmployeeID(userInfoContract).getAddressInfo(msg.sender);
    }

    function getAddress() public view returns (address) {
        return address(this);
    }

    function getTokenBalance() public view returns (uint256) {
        return ERC20(tokenContract).allowance(owner, address(this));
    }

    function claim() public {
        uint256 _reward = reward[msg.sender];
        ERC20(tokenContract).transferFrom(owner, msg.sender, _reward);
    }

    function getCheckIn(uint256 id) public view returns (Checkin memory) {
        return checkins[id];
    }

    function getMyCheckIn() public view returns (Checkin[] memory) {
        Checkin[] memory _checkins = new Checkin[](checkinId);
        uint256 _index = 0;
        for (uint256 i = 1; i <= checkinId; i++) {
            if (checkinPerUser[i] == msg.sender) {
                _checkins[_index] = checkins[i];
                _index++;
            }
        }
        return _checkins;
    }
}
