import React, { useState } from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "../../components/order/Invoice";
import { Col, Select, Row } from "antd";
import moment from "moment";

const NftIssueOrders = ({ orders, handleStatusChange }) => {


  
  const [option, setOptions] = useState("Not Processed");
  console.log(orders);

  const showOrderInTable = (order) => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Serial Number</th>
          <th scope="col">ProductID</th>
          <th scope="col">Warranty(months)</th>

          <th scope="col">nftMinted</th>
        </tr>
      </thead>

      <tbody>
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
        <div className="m-5 p-3 card">
          <Row>
            <Col lg={12}>
              <div className=" p-2 ">
                <p style={{ fontSize: "45px" }}>Nft issue info</p>
                <div>Wallet Adress: {order.paymentIntent.wallet.walletAdd}</div>
                <br />
                <div>IPFShash: {order.paymentIntent.wallet.ipfsHash}</div>

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
