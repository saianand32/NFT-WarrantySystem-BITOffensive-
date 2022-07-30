import React, { useState } from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "../../components/order/Invoice";
import { Col, Select, Row } from "antd";
import moment from "moment";
import { useAccount, useConnect, useEnsName } from "wagmi";
import Web3 from "web3";

import { toast } from "react-toastify";

import { abi } from "../../contract/abi";
import "./NftAdmincard.css"

const rpcURL = "https://rinkeby.infura.io/v3/c7947df1c5c54702851df8b415d9f873";
const web3 = new Web3(Web3.givenProvider || rpcURL);
const contractAddress = "0x2d72f881dEdeBC461BCd97b1f299F6bb92f4b4e4";
const contract = new web3.eth.Contract(abi, contractAddress);

const NftIssueOrders = ({ orders, handleStatusChange }) => {
  const { address, isConnected } = useAccount();
  const [gasPrice, setGasPrice] = useState("");

  const getNftmint = async (addressTo, ipfsHash, orderId) => {
    const TnxGasPrice = async () => {
      await web3.eth.getGasPrice().then(console.log);
      // setGasPrice(TnxGasPrice);
    };

    try {
      // let balance = await web3.eth.getBalance(address);

      console.log(gasPrice);
      // console.log(contract);
      if (gasPrice < 1109004931) {
        toast.success(`Gas price under limit${gasPrice}`);
        await contract.methods
          .safeMint(addressTo, `ipfs://${ipfsHash}`)
          .send({ from: address })
          .on("receipt", function (receipt) {
            console.log(receipt.status);
            handleStatusChange(orderId, receipt.status);

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

  const [option, setOptions] = useState("Not Processed");

  const showOrderInTable = (order) => (
    <table className="table table-bordered nfttable" style={{background:"white"}}>
      <thead className="thead-light nftrow">
        <tr >
          <th scope="col">Serial Number</th>
          <th scope="col">ProductID</th>
          <th scope="col">Warranty(months)</th>

          <th scope="col">nftMinted</th>
        </tr>
      </thead>

      <tbody >
        {order.products.map((p, i) => (
          <tr key={i}>
            <td>
              <strong>{p.product.serialNumber}</strong>

              <strong></strong>
            </td>
            <td>
              {" "}
              <strong>{p.product.productId}</strong>
            </td>
            <td>{p.product.warrantyMonths}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const showEachOrders = () =>
    orders.map((order, i) => (
      <div key={order._id}>
        <div className="mt-5 ml-5 mr-3 p-3 card nftcard" >
          <Row>
            <Col lg={12}>
              <div className=" p-2 ">
                <p className="cardheading">NFT Warranty Info 🚀</p>
                {/* <div >Wallet Adress: {order.paymentIntent.wallet.walletAdd}</div> */}
                <div><span style={{color:"black"}}><font size='4'><b>🍪 Wallet Adress:</b></font></span> <span style={{color:"rgb(245, 233, 217)"}}><font size='3'><b>{order.paymentIntent.wallet.walletAdd}</b></font></span></div>
                <br />
                <div><span style={{color:"black"}}><font size='3'><b>🔑 IPFShash:</b></font></span> <span style={{color:"rgb(245, 233, 217)"}}><font size='2.7'><b>{order.paymentIntent.wallet.ipfsHash}</b></font></span></div>
                <div>IPFShash: {order.paymentIntent.wallet.ipfsHash}</div>
                <div>
                  {order.nftMintStatus === "true" ? (
                    <CheckCircleOutlined style={{ color: "green" }} />
                  ) : (
                    <CloseCircleOutlined className="text-danger" />
                  )}
                </div>

                <br />
              </div>
            </Col>
          </Row>
          {showOrderInTable(order)}
          <div className="row">
            <div className="col">
              <div className="text-right">
                <span className="h5">
                  <button
                    onClick={() => {
                      getNftmint(
                        order.paymentIntent.wallet.walletAdd,
                        order.paymentIntent.wallet.ipfsHash,
                        order._id
                      );
                    }}
                  >
                    Mint{" "}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

  return <>{showEachOrders()}</>;
};

export default NftIssueOrders;
