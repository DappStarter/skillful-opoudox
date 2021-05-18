require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember unlock hunt private bridge vapor'; 
let testAccounts = [
"0x117080b8d5525037d094d7f950d7ca8cd75bb8d594bcf589cc9ccb021d97cbe7",
"0x6683f9751af0eb72aaf0e8bbab5629b70f3fcf7e76127612c61b2a85d26c8a89",
"0x68d84776e46baabea5732ed95fadba1deb7f3ffa7be60229bdad6baad59d1f27",
"0x6433d71da4f1ce9232514ca53dc665f5619b5bc9d555cf64b95c700b95f657b3",
"0x9488c499a79a036e8ba37efa5b558f156f5df56259d92ef28b586eeece3d74f2",
"0x260f47bf1881ecec19c0721ea5999e342cbfc208a93bee68af8a8ed524421ede",
"0x07be7d9cdcb13d31f5ab69cab66f7f34e24d1c16e2c8bb66308e7aa517f0b170",
"0xb90bb7880166d8821909dfd5dcb3cc55c33fef93d85e2c4dd1f6861e42734f78",
"0x53a2e52cc1f3771cc9b7077f44ce1070601bcb1b25b4b97e2a546fd50b6e4543",
"0x4545738e12a786a95e7fcc546f4ba9341362b23c0fe4d9381bde0f24bb8beda5"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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
