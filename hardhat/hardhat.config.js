require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  // networks: {
  sepolia: {
    url: process.env.URL,
    accounts: [process.env.PRIVATE_KEY]
  }
  // }
};
