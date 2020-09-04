const Web3 = require('web3');
const { setupLoader } = require('@openzeppelin/contract-loader');

async function main() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const loader = setupLoader({ provider: web3 }).web3;

    // web3 contract instance -- address of the Taker token contract
    //const address = '0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab';
    // kovan testnet address: 0xaD3ca0a1A9499B2aD841b2E7b151117b0e6ab53A
    //const taker = loader.fromArtifact('Taker', address);
    // some basic examples of calling Taker ERC20 methods
    //const tokenName = await taker.methods.name().call();
    //const totalSupply = await taker.methods.totalSupply().call();
}

main();