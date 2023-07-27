pragma solidity ^0.6.12;

import {DataTypes} from './DataTypes.sol';
import {ILendingPool} from './ILendingPool.sol';
import {ILendingPoolAddressesProvider} from './ILendingPoolAddressesProvider.sol';
import {IPriceOracle} from './IPriceOracle.sol';
import {IWETHGateway} from './IWETHGateway.sol';


contract AaveDeFiApp {
    function HelloWorld() public pure returns (string memory) {
        return "Hello World";
    }
}