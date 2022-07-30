import React, { useState } from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "../../components/order/Invoice";
import { Col, Select, Row } from "antd";
import moment from "moment";
import './NftAdmincard.css'

const NftIssueOrders = ({ orders, handleStatusChange }) => {


  
  const [option, setOptions] = useState("Not Processed");
  console.log(orders);

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

            <td>
              {p.product.shipping === "No" ? (
                <CheckCircleOutlined style={{ color: "green" }} />
              ) : (
                <CloseCircleOutlined className="text-danger" />
              )}
            </td>
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

                <br />
              </div>
            </Col>
          </Row>
          {showOrderInTable(order)}
          <div className="row">
            <div className="col">
              <div className="text-right">
                <span className="h5">Mint </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

  return <>{showEachOrders()}</>;
};

export default NftIssueOrders;
