import { useState, useEffect } from 'react'
import * as nearAPI from "near-api-js";

// creates keyStore using private key in local storage
// *** REQUIRES SignIn using walletConnection.requestSignIn() ***

export default function Home() {
  const [near, setNear] = useState();
  const [account, setAccount] = useState();

  useEffect(() => {
    (async () => {
    if (typeof window === 'undefined') {
      return;
    }
    
    const { keyStores } = nearAPI;
    const keyStore = new keyStores.BrowserLocalStorageKeyStore();
  
    const { connect } = nearAPI;
  
    const config = {
      networkId: "testnet",
      keyStore, 
      nodeUrl: "https://rpc.testnet.near.org",
      walletUrl: "https://wallet.testnet.near.org",
      helperUrl: "https://helper.testnet.near.org",
      explorerUrl: "https://explorer.testnet.near.org",
    };
      
    const near = await connect(config);
    setNear(near);
  })()
  }, []);

  useEffect(() => {
    (async () => {
    if (!near) {
      return;
    }
    console.log("near", near)
    const account = await near.account("jjamess.testnet");
    const accountState = await account.state();
    setAccount(accountState);
    })()
  }, [near]);
  
  return (
    <h1 className="">
      Hello world!
      <pre>{JSON.stringify(account, null, 2)}</pre>
      
    </h1>
  )
}