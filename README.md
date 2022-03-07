
Smart contract
===
This is an sample smart contract with solidity and ropsten testnet. See the resources section bellow for more details.

Setup
---
Install dependencies `npm install`

Create `.env` file containing the following environment variables:
```
API_URL = "https://eth-ropsten.alchemyapi.io/v2/<your api key>"
API_KEY="<your api key>"
PRIVATE_KEY = "<your private key>"
CONTRACT_ADDRESS="<deployed contract address>"
ACCOUNT_ADDRESS="<your account address>"
```

Deploy
---
Run `npx hardhat run scripts/deply.js `

Run
---

Get balance
`npx hardhat balance`

Get message
`npx hardhat show`

Update message
`npx hardhat update --message 'This is the new message'`

Resources
---
For more details see:
* https://ethereum.org/en/developers/tutorials/hello-world-smart-contract
* https://docs.alchemy.com/alchemy/tutorials/hello-world-smart-contract/interacting-with-a-smart-contract
* https://moonborrow.com/
* https://metamask.io/
* https://ropsten.etherscan.io/