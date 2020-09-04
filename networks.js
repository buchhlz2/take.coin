const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      protocol: "http",
      host: "localhost",
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: "*",
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          process.env.mnemonic,
          `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        ),
      networkId: 4,
      gasPrice: 10e9,
    },
    kovan: {
      provider: () =>
        new HDWalletProvider(
          process.env.METAMASK_DEV_PRIVATE_KEY,
          `https://kovan.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        ),
      networkId: 42,
      gasPrice: 10e9,
    },
    mainnet: {
      provider:  () =>
        new HDWalletProvider(
          process.env.METAMASK_MAINNET_PRIVATE_KEY,
          `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        ),
      networkId: 1,
      gasPrice: 110e9,
    }
  },
};
