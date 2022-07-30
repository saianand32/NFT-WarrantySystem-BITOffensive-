import React, { useEffect, useState } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { getOrders, nftmintStatus } from "../../functions/admin";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import NftIssueOrders from "../../components/order/NftissueOrder";
import Web3 from "web3";
import { useAccount, useConnect, useEnsName } from "wagmi";

import { abi } from "../../contract/abi";

// const provider = new Web3.providers.HttpProvider(
//   'https://rinkeby.infura.io/v3/3ed112ee6c4d42a09e485ddb5eec5fa2'
// );

const AddressArray = [];
const orderIds = [];
const ipfsArray = [];

const rpcURL = "https://rinkeby.infura.io/v3/c7947df1c5c54702851df8b415d9f873";
const web3 = new Web3(Web3.givenProvider || rpcURL);
const contractAddress = "0x2d72f881dEdeBC461BCd97b1f299F6bb92f4b4e4";
const contract = new web3.eth.Contract(abi, contractAddress);

const Nftwarranty = () => {
  const [gasPrice, setGasPrice] = useState("");
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  const { address, isConnected } = useAccount();
  const [mintStatus, setMintStatus] = useState(false);

  const fetchNFTs = async () => {
    // const signedMessage = await web3.eth.sign(
    //   web3.utils.sha3("Hello world"),
    //   "0x3aEFd9DA1dCC077d24E4b5612AeF634766F82B17"
    // );
    // let signer = await web3.eth.personal.ecRecover(
    //   "hello world",
    //   signedMessage
    // );
    // console.log(signer);
  };

  // console.log(orders);
  for (let i = 0; i < orders.length; i++) {
    AddressArray[i] = orders[i].paymentIntent.wallet.walletAdd;
    ipfsArray[i] = orders[i].paymentIntent.wallet.ipfsHash;
    orderIds[i] = orders[i]._id;
  }
  console.log(AddressArray[0]);
  console.log(AddressArray, ipfsArray, orderIds);

  const getNftmint = async () => {
    const TnxGasPrice = async () => {
      await web3.eth.getGasPrice().then(console.log);
      setGasPrice(TnxGasPrice);
    };

    try {
      // let balance = await web3.eth.getBalance(address);

      console.log(gasPrice);
      // console.log(contract);
      if (gasPrice < 1109004931) {
        toast.success(`Gas price under limit${gasPrice}`);
        await contract.methods
          .safeMint(AddressArray[0], `ipfs://${ipfsArray[0]}`)
          .send({ from: address })
          .on("receipt", function (receipt) {
            console.log(receipt.status);
            handleStatusChange(orderIds[0],receipt.status );
            
            console.log(mintStatus)
            toast.success(`Mint done to add: ${receipt.to}`);
           
          });
      
      } else {
        toast.error(`gas price too high${gasPrice}`);
      }

      //console.log(test);
    } catch (err) {
      console.log(err);
      alert("something wents wrong");
    }
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

  const handleStatusChange = (orderId, nftMintStatus) => {
    console.log(nftMintStatus)
    nftmintStatus(user.token, orderId,  nftMintStatus ).then((res) => {
      // console.log(res.data);
      toast.success("Status Updated");

      console.log(res);
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

      <button onClick={getNftmint}>Batch mint NFT</button>
      <button onClick={fetchNFTs}>estemate gas price</button>
    </div>
  );
};

export default Nftwarranty;
