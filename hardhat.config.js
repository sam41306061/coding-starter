require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.6.12",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};
