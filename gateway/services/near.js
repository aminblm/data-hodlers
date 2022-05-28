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

async function main() {
    const account = await init()
    console.log(account)

    const localKeyPair = JSON.parse(fs.readFileSync(getCredentialsPath() + credentialsFileSubPath, 'utf8'))

    // const keyPair = nacl.sign.keyPair()
    const encodedMessage = '8Rx4cKNYfDKVM2kWmj6WimGaoyWne3xkU5g6ULvJrK7h'
    const message = nacl.util.decodeUTF8(encodedMessage)

    const payload = {
        message: encodedMessage,
        public_key: localKeyPair.public_key,
        signature: localKeyPair.signature
    }

    // console.log(keyPair.secretKey)
    console.log(message, localKeyPair.private_key)
    const signature = nacl.sign.detached(message, bs58.decode(localKeyPair.private_key.replace('ed25519:', '')))

    const result = nacl.sign.detached.verify(message, signature, bs58.decode(localKeyPair.public_key.replace('ed25519:', '')))
    console.log(result)
}

// main()

async function signString(encodedMessage) {
    const account = await init()
    const localKeyPair = JSON.parse(fs.readFileSync(getCredentialsPath() + credentialsFileSubPath, 'utf8'))
    const message = nacl.util.decodeUTF8(encodedMessage)
    const signature = nacl.sign.detached(message, bs58.decode(localKeyPair.private_key.replace('ed25519:', '')))
    const payload = {
        message: encodedMessage,
        publicKey: localKeyPair.public_key,
        signature: bs58.encode(signature)
    }
    console.log(payload)
    return payload
}

async function verifySignature(payload) {
    console.log(payload)
    const localKeyPair = JSON.parse(fs.readFileSync(getCredentialsPath() + credentialsFileSubPath, 'utf8'))
    console.log(nacl.util.decodeUTF8(payload.message), bs58.decode(payload.signature), bs58.decode(payload.publicKey.replace('ed25519:', '')))
    const result = nacl.sign.detached.verify(nacl.util.decodeUTF8(payload.message), bs58.decode(payload.signature), bs58.decode(payload.publicKey.replace('ed25519:', '')))
    console.log(result)

    if (result) {
        return nacl.util.encodeUTF8(payload.message)
    } else {
        throw new Error('Invalid signature')
    }
}

async function test() {
    const message = "8Rx4cKNYfDKVM2kWmj6WimGaoyWne3xkU5g6ULvJrK7h"
    const localKeyPair = JSON.parse(fs.readFileSync(getCredentialsPath() + credentialsFileSubPath, 'utf8'))
    const payload = await signString(message)

    console.log(await verifySignature(payload))
}

module.exports = {
    signString,
    verifySignature
}

// test()