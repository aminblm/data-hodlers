//  https://docs.near.org/docs/tools/near-cli
// https://wallet.testnet.near.org/
// https://docs.near.org/docs/api/naj-quick-reference
// blockpaperprotocol-gateway.testnet

const { sign } = require("crypto");
const nearAPI = require("near-api-js")
const { connect } = nearAPI
var nacl = require("tweetnacl")
nacl.util = require('tweetnacl-util')

async function init() {
    const { keyStores } = nearAPI
    const homedir = require("os").homedir();
    const CREDENTIALS_DIR = ".near-credentials"
    const credentialsPath = require("path").join(homedir, CREDENTIALS_DIR)
    const keyStore = new keyStores.UnencryptedFileSystemKeyStore(credentialsPath)

    const config = {
        networkId: "testnet",
        keyStore,
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
    }
    const near = await connect(config)

    const account = await near.account("blockpaperprotocol-gateway.testnet")
    const accountDetails = await account.getAccountDetails()

    console.log(accountDetails)
}


init()

const keyPair = nacl.sign.keyPair()
console.log(keyPair.secretKey)
const message = nacl.util.decodeUTF8('Hello!');
var signature = nacl.sign(message, keyPair.secretKey)
console.log(signature)

console.log(nacl.util.encodeUTF8(nacl.sign.open(signature, keyPair.publicKey)))
signature = nacl.sign.detached(message, keyPair.secretKey)

const result = nacl.sign.detached.verify(message, signature, keyPair.publicKey)
console.log(result)