import { useState, useEffect } from 'react'
import * as nearAPI from "near-api-js";
import toast from 'react-hot-toast';

// creates keyStore using private key in local storage
// *** REQUIRES SignIn using walletConnection.requestSignIn() ***

export default function Home() {
  
  return (
    <h1 className="">
      Hello world!
    </h1>
  )
}