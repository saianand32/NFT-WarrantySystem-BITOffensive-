import React, { useState } from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "../../components/order/Invoice";
import { Col, Select, Row } from "antd";
import moment from "moment";

const { Option } = Select;

const statusOptions = [
  "Not Processed",
  "Processing",
  "Dispatched",
  "Delivered",
  "Cancelled",
];

const NftIssueOrders = ({ orders, handleStatusChange }) => {
  const [option, setOptions] = useState("Not Processed");
  console.log(orders);

  const showOrderInTable = (order) => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Product-Id</th>
          <th scope="col">Serial-Number</th>
          <th scope="col">Price</th>
          <th scope="col">Brand</th>
          <th scope="col">Warranty</th>
          <th scope="col">Quantity</th>
          <th scope="col">Shipping</th>
        </tr>
      </thead>

      <tbody>
        {order.products.map((p, i) => (
          <tr key={i}>
            <td>
              <strong>{p.product.title}</strong>
              {/* <strong>{p.product.productId}</strong> */}
              {/* <strong>{p.product.warrantyMonths}</strong> */}
            </td>
            <td>{p.product.productId} </td>
            <td>{p.product.serialNumber} </td>
            <td>{p.product.price}</td>
            <td>{p.product.brand}</td>
            <td>{p.product.warrantyMonths + "-months"}</td>
            {/* <td>{p.product.color}</td> */}
            <td>{p.count}</td>

            <td>
              {p.product.shipping === "Yes" ? (
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

  const showDowloadLink = (order) => (
    <PDFDownloadLink
      document={<Invoice order={order} />}
      fileName="invoice.pdf"
      className="btn btn-sm btn-outline-primary"
    >
      Download Invoice
    </PDFDownloadLink>
  );

  const showEachOrders = () =>
    orders.map((order, i) => (
      <div key={order._id}>
        <div className="m-5 p-3 card">
          {/* <ShowPaymentInfo order={order} /> */}

          
          {showOrderInTable(order)}
          <div className="row">
            <div className="col">
              <div className="text-left">{showDowloadLink(order)}</div>
              <div className="text-right">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

  return <>{showEachOrders()}</>;
};

export default NftIssueOrders;
