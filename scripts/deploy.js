const { ethers } = require("hardhat");

async function main() {
    const AlphaToken = await ethers.getContractFactory("AlphaToken"); 
    const alphaToken = await AlphaToken.deploy(); 

    await alphaToken.waitForDeployment();  // FIXED

    console.log(`Contract deployed at: ${await alphaToken.getAddress()}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
