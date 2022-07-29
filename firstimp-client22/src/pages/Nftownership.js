import React from 'react'
import Web3 from "web3";

const rpcURL = "https://rinkeby.infura.io/v3/c7947df1c5c54702851df8b415d9f873";
const web3 = new Web3(Web3.givenProvider || rpcURL);

const contractAddress = "0x2d72f881dEdeBC461BCd97b1f299F6bb92f4b4e4";
const Nftownership = () => {

    const checkOwnerShip =async()=>{

        // let tokenContract = await IERC721.at(contractAddress);
        // console.log(tokenContract)
        // let owner = await tokenContract.ownerOf("1").call();
        // console.log(owner)
    }

  return (
    <div >

    <button onClick={checkOwnerShip}>click</button>
    </div>
  )
}

export default Nftownership