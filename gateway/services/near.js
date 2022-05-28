//  https://docs.near.org/docs/tools/near-cli
// https://wallet.testnet.near.org/
// https://docs.near.org/docs/api/naj-quick-reference
// blockpaperprotocol-gateway.testnet

const { sign } = require("crypto")
const nearAPI = require("near-api-js")
const { connect } = nearAPI
var nacl = require("tweetnacl")
nacl.util = require('tweetnacl-util')
const fs = require('fs')
const bs58 = require('bs58')


const credentialsFileSubPath = "/testnet/blockpaperprotocol-gateway.testnet.json"

function getCredentialsPath() {
    const homedir = require("os").homedir()
    const CREDENTIALS_DIR = ".near-credentials"
    const credentialsPath = require("path").join(homedir, CREDENTIALS_DIR)
    return credentialsPath
}

async function init() {
    const { keyStores } = nearAPI
    const keyStore = new keyStores.UnencryptedFileSystemKeyStore(getCredentialsPath())

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
    return account
}

async function createKeyPair() {
    const newKeyPair = nearAPI.KeyPair.fromRandom('ed25519')
    newKeyPair.public_key = newKeyPair.publicKey.toString().replace('ed25519:', '')
    console.log(newKeyPair)
    return newKeyPair
}

// decode base 58 string
function decodeBase58(str) {
    return new Buffer(str, 'base58').toString('ascii')
}


async function main() {

    const account = await init()
    console.log(account)

    const localKeyPair = JSON.parse(fs.readFileSync(getCredentialsPath() + credentialsFileSubPath, 'utf8'))

    // const keyPair = nacl.sign.keyPair()

    // console.log(keyPair.secretKey)
    const message = nacl.util.decodeUTF8('Hello!')
    console.log(message, localKeyPair.private_key)
    const signature = nacl.sign.detached(message, bs58.decode(localKeyPair.private_key.replace('ed25519:', '')))

    const result = nacl.sign.detached.verify(message, signature, bs58.decode(localKeyPair.public_key.replace('ed25519:', '')))
    console.log(result)
}

main()

