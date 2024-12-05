require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
require("@nomicfoundation/hardhat-ledger");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.20",
    networks: {
        mainnet: {
            url: process.env.ETH_MAINNET_RPC_URL,
            ledgerAccounts: [
                process.env.LEDGER_ACCOUNT
            ]
        }
    },
    etherscan: {
        apiKey: {
            mainnet: process.env.ETH_SCAN_API_KEY
        }
    }
};
