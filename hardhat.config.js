const { task } = require('hardhat/config');

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-web3");

const contract = require("./artifacts/contracts/HelloWorld.sol/HelloWorld.json");


const { API_URL, API_KEY, PRIVATE_KEY, CONTRACT_ADDRESS, ACCOUNT_ADDRESS } = process.env;

const getContract = function () {
  const alchemyProvider = new ethers.providers.AlchemyProvider("ropsten", apiKey=API_KEY);
  const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
  const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
  return helloWorldContract;
}

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address", ACCOUNT_ADDRESS)
  .setAction(async (taskArgs) => {
    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, "ether"), "ETH");
  });

  task("update", "Update message")
    .addParam("message", "The new message")
    .setAction(async (taskArgs) => {
      const helloWorldContract = getContract();
      const tx = await helloWorldContract.update(taskArgs.message);
      await tx.wait();
      console.log("Message updated.");
    })
  
    task("show", "Show message")
      .setAction(async () => {
        const helloWorldContract = getContract();
        const message = await helloWorldContract.message();
        console.log("Message is: " + message);
      })

/**
* @type import('hardhat/config').HardhatUserConfig
*/
module.exports = {
   solidity: "0.7.3",
   defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}
