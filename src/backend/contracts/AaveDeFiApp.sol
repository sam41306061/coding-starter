// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.6.12;

import {DataTypes} from './DataTypes.sol';
import {ILendingPool} from './ILendingPool.sol';
import {ILendingPoolAddressesProvider} from './ILendingPoolAddressesProvider.sol';
import {IPriceOracle} from './IPriceOracle.sol';
import {IWETHGateway} from './IWETHGateway.sol';

contract AaveDeFiApp  {
    address public asset;
    uint256 public amount; 
    address public to; 



    // get the weth address


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



    function deposit(address _asset, uint256 _amount, address _onBehalfOf, uint16 _referralCode) public {
        emit Deposit(_asset, _amount, _onBehalfOf, _referralCode);
    }
}
