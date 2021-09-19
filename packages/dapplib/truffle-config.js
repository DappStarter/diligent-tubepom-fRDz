require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remind modify give clog bridge surprise'; 
let testAccounts = [
"0x4f4450d876771dbe2c1693bcd377597673094fcaaaa26d2bef6b4d065485fdcc",
"0x5048ced832a8aad2dea7e8a4f0d02a59dea797a7ce6809e0d884900ac4ad63ac",
"0x95f3d5d1fd84e299dafb7c1623b4f515cbac24578f00e31e174ba0fece0b15f7",
"0x1b5ab39c59a4dd472baee9c1aa641cc8bde31790979f8b9827a0dd3779924c25",
"0x712138972c3fda5012d64c51dc5d5e8b3cccd49ca41e75a11f0bab441f650c86",
"0xe233bdb06388716caed4f72d15175bc8a474bc855e6f88a4025fa4257d2bcfbd",
"0x3e50293fd689937e119c38aad59c972b439abe6743f5c8cb94b31555df3eb3c2",
"0xcb110d8bb6e28b33a9f739e15b3e4191976e85bd6844e26b5cc45f57f0570327",
"0x7bbc2e8749659e978e72b0241cd638ac580ee8643e43f468f908b0387b094405",
"0xe8877d1bd3fc5270512878dd345c277747356db66ca3b3da0c1e855f25022880"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

