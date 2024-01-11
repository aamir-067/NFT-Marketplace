const { URL, PRIVATE_KEY } = require("../src/CONSTANTS");
require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: URL,
      accounts: [PRIVATE_KEY]
    }
  }
}
