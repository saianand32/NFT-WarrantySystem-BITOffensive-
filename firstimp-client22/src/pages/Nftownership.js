import { useState, useEffect } from "react";
import Web3 from "web3";
import { useAccount, useConnect, useEnsName } from "wagmi";
import "./Nftownership.scss";

import axios from "axios";
const rpcURL = "https://rinkeby.infura.io/v3/c7947df1c5c54702851df8b415d9f873";
const web3 = new Web3(Web3.givenProvider || rpcURL);

const contractAddress = "0x2d72f881dEdeBC461BCd97b1f299F6bb92f4b4e4";
const Nftownership = () => {
  const { address, isConnected } = useAccount();
  const [userNft, setUserNfts] = useState([]);
  console.log(address);

  const fetchNFTs = async () => {
    console.log("jscbj");
    const apiKey = "B5SSMRob-FxmkyHMWaRl2GOBc3H7PcoS";
    const baseURL = `https://eth-rinkeby.alchemyapi.io/nft/v2/${apiKey}/getNFTs/`;

    const ownerAddr = "0x9961c76F13CE42fA748E5d758EDdeB5995916aD7";

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
    console.log(userNft[0].metadata.image);
  };

  // const test = nftMetaData.properties

  // console.log(test);

  useEffect(() => {
    fetchNFTs();
    console.log("first");
  }, []);

  return (
    <div>
        <div className="usernfthead">
            <h1>Your NFT Warranties</h1>
            <button onClick={fetchNFTs} className="getnftbtn"> get nftdata</button>
          
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
        </div>
      ))}
    </div>
  );
};

export default Nftownership;
