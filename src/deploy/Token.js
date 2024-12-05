const { ethers } = require("hardhat");

async function main() {
   const initialSupply = ethers.parseEther("1000000000");
   const Erc20Token = await ethers.getContractFactory("NUMI");
   const erc20Token = await Erc20Token.deploy(initialSupply);
   await erc20Token.waitForDeployment()
   console.log(await erc20Token.getAddress())
}

main().catch((error) => {
   console.error(error);
   process.exitCode = 1;
 });