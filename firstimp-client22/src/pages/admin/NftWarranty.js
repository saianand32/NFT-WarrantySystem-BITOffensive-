import React, { useEffect, useState } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { getOrders, updateOrderStatus } from "../../functions/admin";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import NftIssueOrders from "../../components/order/NftissueOrder";
import Web3 from "web3";

import { abi } from "../../contract/abi";
import './NftWarranty.css'


// const provider = new Web3.providers.HttpProvider(
//   'https://rinkeby.infura.io/v3/3ed112ee6c4d42a09e485ddb5eec5fa2'
// );

const AddressArray=  [];

const ipfsArray=[];


const rpcURL = "https://rinkeby.infura.io/v3/c7947df1c5c54702851df8b415d9f873";
const web3 = new Web3(Web3.givenProvider || rpcURL);
const contractAddress = "0x2d72f881dEdeBC461BCd97b1f299F6bb92f4b4e4";
const contract = new web3.eth.Contract(abi, contractAddress);

const Nftwarranty = () => {



  const fetchNFTs = async () => {
   
    const signedMessage = await web3.eth.sign(web3.utils.sha3('Hello world'), "0x3aEFd9DA1dCC077d24E4b5612AeF634766F82B17")
    let signer = await web3.eth.personal.ecRecover("hello world", signedMessage);
  
  }



  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  const [walletAddress, setWalletAddress] = useState("");

  const btnhandler = () => {
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => setWalletAddress(res[0]));
    } else {
      alert("install metamask extension!!");
    }
    console.log(walletAddress);
  };
console.log(orders)
  for(let i=0; i<orders.length; i++){
    AddressArray[i]=orders[i].paymentIntent.wallet.walletAdd
    ipfsArray[i]=orders[i].paymentIntent.wallet.ipfsHash
  }
console.log(AddressArray,ipfsArray)
  //const addArr=[];
  //addArr.push(orders.add)

  // const Baseuri = `ipfs://${ipfsArray[0]}`;
  // console.log(Baseuri)
  let i=0
  const getNftmint = async () => {
    
    try {
      
      console.log(walletAddress);
      let balance = await web3.eth.getBalance(walletAddress);
      console.log(balance);

      console.log(contract);

      const test = await contract.methods
        .safeMint(AddressArray[0], `ipfs://${ipfsArray[0]}`)
        .send({ from: walletAddress })
        .on("receipt", function (receipt) {
          alert("Mint done");
        });
      console.log(test);
    } catch (err) {
      console.log(err);
    }
    ++i;
  };

  
  
  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () =>
    getOrders(user.token).then((res) => {
      // console.log(res.data);
      setOrders(res.data);
      // 
    });

  const handleStatusChange = (orderId, orderStatus) => {
    updateOrderStatus(user.token, orderId, orderStatus).then((res) => {
      // console.log(res.data);
      toast.success("Status Updated");
      loadOrders();
    });
  };
// const estg =async()=>{
//  await web3.eth.getGasPrice().then((result) => {
//     console.log(web3.utils.fromWei(result, 'ether'))
//     console.log(result)
//     })

// }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          <h2>Products To issue Warranty</h2>
          {/* <Orders orders={orders} handleStatusChange={handleStatusChange} /> */}
          <NftIssueOrders
            orders={orders}
            handleStatusChange={handleStatusChange}
          />
        </div>
      </div>
      <button onClick={btnhandler}> Wallet connect</button>
      <button onClick={getNftmint}>contract call</button>
      <button onClick={fetchNFTs}>estemate gas price</button>
      
    </div>
  );
};

export default Nftwarranty;
