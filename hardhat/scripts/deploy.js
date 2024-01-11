const hre = require("hardhat");

async function main() {
  const Marketplace = await ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy();
  console.log('Deploy at address : ', marketplace.target);
  await marketplace.wait();
  process.exit(0);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
