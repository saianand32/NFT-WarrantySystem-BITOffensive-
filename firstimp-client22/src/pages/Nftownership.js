import { useState, useEffect } from "react";
import Web3 from "web3";
import { useAccount, useConnect, useEnsName } from "wagmi";
import "./Nftownership.scss";
import { toast } from "react-toastify/";

import axios from "axios";
import { abi } from "../contract/abi";
const rpcURL = "https://rinkeby.infura.io/v3/c7947df1c5c54702851df8b415d9f873";
const web3 = new Web3(Web3.givenProvider || rpcURL);

const contractAddress = "0xc5cc4dca8e09aeb8aab2b5024cc2990afebf71e4";
const contract = new web3.eth.Contract(abi, contractAddress);

const Nftownership = () => {
  const { address, isConnected } = useAccount();
  const [userNft, setUserNfts] = useState([]);
  const [userNfts, setUserNftss] = useState([]);
  console.log(address);

  const  burn=async(x)=> {
    try {
      // let balance = await web3.eth.getBalance(address);

      await contract.methods
        .burn(x)
        .send({ from: address })
        .on("receipt", function (receipt) {
          console.log(receipt);
          toast.success(`Mint done to add: ${receipt.to}`);
        });

      //console.log(test);
    } catch (err) {
      console.log(err);
      alert("something wents wrong");
    }
  }

  const fetchNFTs = async () => {
    
    const apiKey = "B5SSMRob-FxmkyHMWaRl2GOBc3H7PcoS";
    const baseURL = `https://eth-rinkeby.alchemyapi.io/nft/v2/${apiKey}/getNFTs/`;

    const ownerAddr = address;

    var config = {
      method: "get",
      url: `${baseURL}?owner=${ownerAddr}`,
    };

    axios(config)
      .then(
        (response) => setUserNfts(response.data.ownedNfts),
        // (response) => {console.log(response.data)},
        null,
        2
      )
      .catch((error) => console.log(error));

      // console.log((userNft[0].id.tokenId).substring(65) )
  };

  console.log(userNft)
  const burnNft = () => {
    console.log("first");
  };

  useEffect(() => {
    // fetchNFTs();
    console.log("first");
  }, []);
  // console.log(userNft[0].metadata.image);
  // console.log((userNft[0].id )  )
  

  return (
    <div>
      <div className="usernfthead">
        <h1>Your NFT Warranties</h1>
        <button onClick={fetchNFTs} className="getnftbtn">
          {" "}
          get nftdata
        </button>
      </div>

        {userNft.map((p, i) => (
          <div key={i}>
            <div class="nft">
              <div class="main">
                <img class="tokenImage" src={p.metadata.image} alt="NFT" />

                <div>
                  {p.metadata.properties.map((prop, k) => (
                    <div key={k}>
                      <div>
                        <p class="description">{prop.type}:</p>:{prop.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div class="tokenInfo">
                  <div class="price">
                    <ins>◘</ins>
                    <p></p>
                  </div>
                  <div class="duration">
                    <ins>◷</ins>
                    <p>11 days left</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <button onClick={burn(5)}> Check Validity</button> */}
            <button onClick={()=>burn((p.id.tokenId).substring(65))}>burn</button>
          </div>
        ))}
      <button onClick={()=>burn(5)}>burn</button>
      <button onClick={fetchNFTs}>fetchNFTs</button>
    </div>
  );
};

export default Nftownership;
