import { useState, useEffect } from "react";
import Web3 from "web3";
import { useAccount, useConnect, useEnsName } from "wagmi";
import "./Nftownership.scss"

import axios from "axios";
const rpcURL = "https://rinkeby.infura.io/v3/c7947df1c5c54702851df8b415d9f873";
const web3 = new Web3(Web3.givenProvider || rpcURL);

const contractAddress = "0x2d72f881dEdeBC461BCd97b1f299F6bb92f4b4e4";
const Nftownership = () => {
  const { address, isConnected } = useAccount();
  const [nftMetaData, setNftMetaData] = useState("")
  console.log(address)

  const fetchNFTs = async () => {
    const apiKey = "B5SSMRob-FxmkyHMWaRl2GOBc3H7PcoS";
    const baseURL = `https://eth-rinkeby.alchemyapi.io/nft/v2/${apiKey}/getNFTs/`;

    const ownerAddr = address;

    var config = {
      method: "get",
      url: `${baseURL}?owner=${ownerAddr}`,
    };

    axios(config)
      .then((response) => setNftMetaData(JSON.stringify(response.data.ownedNfts[0].metadata), null, 2))
      .catch((error) => console.log(error));
      console.log(nftMetaData.description)
  };


 const test= nftMetaData
 console.log(test.type)

  useEffect(() => {
    fetchNFTs()
    console.log("first")
  }, [])
  
  return (
    <div>
      
  <div class="bg">
    <h1>Kiberbash</h1>
  </div>
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src={nftMetaData?.image} alt="NFT" />
      <h2>Kibertopiks #4269</h2>
      <p class='description'>Our Kibertopiks will give you nothing, waste your money on us.</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>0.031 ETH</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>11 days left</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
        </div>
        <p><ins>Creation of</ins> Kiberbash</p>
      </div>
    </div>
  </div>
<button onClick={fetchNFTs}> get nftdata</button>

    </div>
  );
};

export default Nftownership;
