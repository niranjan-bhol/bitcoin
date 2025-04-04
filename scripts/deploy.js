const { ethers } = require("hardhat");

async function main() {
  const AurumToken = await ethers.getContractFactory("AurumToken");
  const aurum = await AurumToken.deploy();

  // Wait for deployment to complete
  await aurum.waitForDeployment();

  console.log("AurumToken deployed at:", await aurum.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
