import React, { useEffect, useState } from "react";
import AdminNav from "../../components/nav/AdminNav";
import {getOrders, updateOrderStatus} from "../../functions/admin";
import {useSelector, useDispatch} from "react-redux";
import {toast} from "react-toastify";
import NftIssueOrders from "../../components/order/NftissueOrder";

const Nftwarranty = () => {
const [orders, setOrders] = useState([]);
const {user} = useSelector((state) => ({...state}))

useEffect(() => {
  loadOrders();
}, []);



const loadOrders = () =>
  getOrders(user.token).then((res) => {
    console.log(res.data);
    setOrders(res.data);
  });

const handleStatusChange = (orderId, orderStatus) => {
  updateOrderStatus(user.token, orderId, orderStatus).then((res) => {
    console.log(res.data)
    toast.success("Status Updated")
    loadOrders();
  })
}

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          <h2>Products To issue Warranty</h2>
          {/* <Orders orders={orders} handleStatusChange={handleStatusChange} /> */}
          <NftIssueOrders orders={orders} handleStatusChange={handleStatusChange} />
        </div>
      </div>
    </div>
  );
};

export default Nftwarranty;
