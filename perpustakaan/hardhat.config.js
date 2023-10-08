require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  hardhat: {
    url: "http://127.0.0.1:8545",
    accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"]
  },
  mumbai_testnet: {
    url: "https://rpc-mumbai.maticvigil.com/",
    accounts: ["0xba48b9c53bc5522e2a29172e34b70a7e1485996366ebc0aad79e6723905ea8e0"]
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  contracts: {
    perpustakaan: {
      path: "./contracts/Perpustakaan.sol",
      // ...
    }
  }
};
