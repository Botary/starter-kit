require('dotenv').config();

// .env-file should contain your Infura-Project-ID and your mnemonic
// Create your own key for Production environments (https://infura.io/)
// INFURA_API_KEY="xxxxxxxxxxxxxxxxxxxx"
// MNEMONIC="Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod"


const mnemonic = process.env.MNEMONIC;
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/v3/' + process.env.INFURA_API_KEY)
      },
      network_id: '3',
      gas: 4465030,
      gasPrice: 10000000000,
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'https://kovan.infura.io/v3/' + process.env.INFURA_API_KEY)
      },
      network_id: '42',
      gas: 4465030,
      gasPrice: 10000000000,
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 4,
      gas: 3000000,
      gasPrice: 10000000000
    },
    // main ethereum network(mainnet)
    main: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 1,
      gas: 3000000,
      gasPrice: 10000000000
    }
  }
};
