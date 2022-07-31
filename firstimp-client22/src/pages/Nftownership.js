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
    console.log(userNft);
  };

  const burnNft=()=>{
    console.log("nftburn");
  }
  // const test = nftMetaData.properties

  // console.log(test);

  useEffect(() => {
    // fetchNFTs();
    console.log("first");
  }, []);

  return (
    <div>
        <div className="usernfthead">
            <h1>Your NFT Warranties</h1>
            <button onClick={fetchNFTs} className="getnftbtn"> get nftdata</button>
          
          </div>

 
      <div style={{display:"flex"}}>
          
      {userNft.map((p, i) => (
        <div key={i} className="nftcontain"  >
        
          <div className="nft">
            <div className="main">
              <img className="tokenImage" src={p.metadata.image} alt="NFT" />

              <div>
                {p.metadata.properties.map((prop, k) => (
                  <div key={k}>
                    <div>
                      <p className="description">{prop.type}:</p>:{prop.value}
                    </div>
                  </div>
                ))}
              </div>

           
              <div className="tokenInfo">
                <div className="price">
                  <ins>◘</ins>
                  <p></p>
                </div>
                <div className="duration">
                  <p>11 days left</p>
                </div>

                <button style={{width:"100px",height:"60px"}}  onClick={()=>burn((p.id.tokenId).substring(65))}>ClickMe</button>
              </div>

            
            </div>
          </div>
        </div>
      ))}
      </div>
      <button onClick={fetchNFTs}>fetchNFTs</button>
    </div>
  );
};

export default Nftownership;
