//  https://docs.near.org/docs/tools/near-cli
// https://wallet.testnet.near.org/
// https://docs.near.org/docs/api/naj-quick-reference
// blockpaperprotocol-gateway.testnet

const { sign } = require("crypto");
const nearAPI = require("near-api-js")
const { connect } = nearAPI

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

async function sign(message, secretKey) {
    nacl.sign(message, secretKey)
}

init()