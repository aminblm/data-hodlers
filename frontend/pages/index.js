import { useState, useEffect } from 'react'
import * as nearAPI from "near-api-js";
import toast from 'react-hot-toast';

import Head from "next/head";
import { useEffect, useState } from "react";
import { baseUrl, listingsAPI } from "../data/listingsAPI";

import DicoverPerfectHome from "../components/home/DicoverPerfectHome/DicoverPerfectHome";
import NewestListing from "../components/home/NewestListing/NewestListing";
import ListingCategories from "../components/home/ListingCategories/ListingCategories";
import LoadingPage from "../components/design/LoadingPage/LoadingPage";
import LoadingItems from "../components/design/LoadingItems/LoadingItems";
import HelpYouFind from "../components/home/HelpYouFind/HelpYouFind";
import HeroPage from "../components/HeroPage/HeroPage";
import ButtonLg from "../components/design/Buttons/ButtonLg";


export default function Home() {
  return (
    <>
      <a href="https://wallet.testnet.near.org/" target="_blank" class="usn-button" rel="noreferrer">
        <div className="flex justify-items">
          <img className="h-6 w-6" src="https://wallet.testnet.near.org/USN-logo.c2eab7d7.png" alt="open-link" /> 
          <span className="inline-block align-middle ..."> Connect Wallet</span>
        </div>
      </a>

      <Head>
        <title>Deal Real - Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {fetched !== 0 ? (
        <>
          <div className="container mx-auto px-7">
            {/* discover your perfect home */}
            <DicoverPerfectHome
              rentSaleToggle={rentSaleToggle}
              listingTypeChange={listingTypeChange}
            />
            {/* newest listing */}
            {loading ? (
              <NewestListing
                listings={
                  rentSale == "for-sale" ? propertyForSale : propertyForRent
                }
              />
            ) : (
              <LoadingItems />
            )}
            {/* we help you find your dream house */}
            <HelpYouFind />
            {/* listing categories*/}
            {loading && (
              <ListingCategories
                listings={
                  rentSale == "for-sale" ? propertyForSale : propertyForRent
                }
              />
            )}
          </div>
          {/* contact us section */}
          <HeroPage>
            <h1 className="text-white mb-8">
              Get Luxury And Cheap Housing And Guaranteed Forever
            </h1>
            <ButtonLg className="border-secondary-500 bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 mx-auto">
              <span className="text-white">Contact Now</span>
            </ButtonLg>
          </HeroPage>
          {/* <ContactUs /> */}
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  )
}