// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.6.12;

import {DataTypes} from './DataTypes.sol';
import {ILendingPool} from './ILendingPool.sol';
import {ILendingPoolAddressesProvider} from './ILendingPoolAddressesProvider.sol';
import {IPriceOracle} from './IPriceOracle.sol';
import {IWETHGateway} from './IWETHGateway.sol';

contract AaveDeFiApp  {
    mapping(address => mapping(address => uint256))  public assets;
    uint256 public amount; 
    address public to; 


    // event for deposit
    event Deposit (
        address asset,
        uint256 amount, 
        address onBehalfOf,
        uint16 referralCode
        );
    event WithDraw (
        address reserve,
        address user,
        address to,
        uint256 amount
    );
    // event for withdraw 
    // event for trade

    // Function to deposit ETH tokens to AAVE lending pool
    function depositETH(address _asset, uint256 _amount, address _onBehalfOf, uint16 _referralCode) public {
    require(_amount > 0, "Amount must be greater than 0");

    // udpated balance 
    assets[_asset][msg.sender] = assets[_asset][msg.sender] + _amount;

    // Deposit ETH to the AAVE lending pool
     emit Deposit(_asset, _amount, _onBehalfOf, _referralCode);
    }

    // Function to deposit ETH tokens to AAVE lending pool
    function depositDAI(address _asset, uint256 _amount, address _onBehalfOf, uint16 _referralCode) public {
    require(_amount > 0, "Amount must be greater than 0");

    // Updated balance 
    assets[_asset][msg.sender] = assets[_asset][msg.sender] + _amount;

    // Deposit DAI to the AAVE lending pool 
    emit Deposit(_asset, _amount, _onBehalfOf, _referralCode);

}


}

