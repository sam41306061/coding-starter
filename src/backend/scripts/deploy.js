async function main() {
const AaveDeFi = await ethers.getContractFactory('AaveDeFi');
// Set the gas limit value here (replace with your desired gas limit)
const deployerAddress = "0xcc9a0B7c43DC2a5F023Bb9b738E45B0Ef6B06E04";
const gasLimit = 5000000;

const aaveDeFi = await AaveDeFi.deploy(deployerAddress, { gasLimit: gasLimit });
await aaveDeFi.deployed();
console.log(`AaveDeFi deployed to: ${aaveDeFi.address}`);


  // For each contract, pass the deployed contract and name to this function to save a copy of the contract ABI and address to the front end.
  //saveFrontendFiles(AaveDeFiApp, 'AaveDeFi');
}

// function saveFrontendFiles(contract, name) {
//   const fs = require("fs");
//   const contractsDir = __dirname + "/../../frontend/contractsData/";

//   if (!fs.existsSync(contractsDir)) {
//     fs.mkdirSync(contractsDir);
//   }

//   fs.writeFileSync(
//     contractsDir + `/${name}-address.json`,
//     JSON.stringify({ address: contract.address }, undefined, 2)
//   );

//   const contractArtifact = artifacts.readArtifactSync(name);

//   fs.writeFileSync(
//     contractsDir + `/${name}.json`,
//     JSON.stringify(contractArtifact, null, 2)
//   );
// }

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
