const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider("ropsten", apiKey=API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);

    const messageToUpdate = process.argv.length > 0 ? "Bye bye!" : process.argv[1];
    const tx = await helloWorldContract.update(messageToUpdate);
    await tx.wait();

    const updatedMessage = await helloWorldContract.message();
    console.log("Updated message is: " + message);
}
main();