const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AaveDeFi", () => {
  let aaveDeFi;
  let deployedContract;

  beforeEach(async () => {
    // Deploy the contract
    const AaveDeFi = await ethers.getContractFactory("AaveDeFi");
    aaveDeFi = await AaveDeFi.deploy();
    await aaveDeFi.deployed();
    deployedContract = aaveDeFi.address;
  });

  it("should deposit ETH, borrow DAI, and send DAI to the designated account", async () => {
    // Deposit ETH
    const ethAmount = ethers.utils.parseEther("1");
    const depositBorrowTx = await aaveDeFi.borrowDAIAgainstETH(ethAmount);
    await depositBorrowTx.wait();

    // Check the ETH deposit and DAI borrow amounts
    const totalETHDeposits = await aaveDeFi.totalETHDeposits(deployedContract);
    const totalDAIBorrows = await aaveDeFi.totalDAIBorrows(deployedContract);
    expect(totalETHDeposits).to.equal(ethAmount);
    expect(totalDAIBorrows).to.be.above(0);

    // Check if DAI was sent to the designated account
    const daiTokenAddress = await aaveDeFi.daiTokenAddress();
    const daiToken = await ethers.getContractAt("IERC20", daiTokenAddress);
    const designatedAccount = await ethers.provider.getSigner(); // Use the current signer as the designated account
    const daiBalance = await daiToken.balanceOf(designatedAccount.address);
    expect(daiBalance).to.be.above(0);
  });
});
