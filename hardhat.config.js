require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
      chainId: 2330
    },
    goerli: {
      url: `https://rpc0.altcoinchain.org/rpc`,
      accounts: ['0xB52eF8FF876110783511D413c3343bB5ff1D77d1'],
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
