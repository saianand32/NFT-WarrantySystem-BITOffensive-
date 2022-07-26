import React, { useEffect, useState } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { getOrders, updateOrderStatus } from "../../functions/admin";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import NftIssueOrders from "../../components/order/NftissueOrder";
import axios from "axios";

const Nftwarranty = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
const ress=1;



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
      console.log(res.data);
      toast.success("Status Updated");
      loadOrders();
    });
  };

  var data = JSON.stringify({
    pinataOptions: {
      cidVersion: 1,
    },
    pinataMetadata: {
      name: `hello`,
      keyvalues: {
        customKey: "customValue",
        customKey2: "customValue2",
      },
    },
    pinataContent: {
      productName: "somevalue",
      productSerialNo:"",
      productID:"",
      purchaseDate:"",
      WarrantyExp:"",
      // walletAdd:orders.paymentIntent.wallet.walletAdd,


    },
  });
  console.log(orders)

  const sendFileToIPFS = async (e) => {
    try {
      var config = {
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmMTdjODcyNS03OTAxLTQ5NTUtOGRkZi1hNzJlMzM5NzA3NzIiLCJlbWFpbCI6Imt1bWFybml0aXNoNzg3MDM4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI0MTE5ZGQ0ODNhZGIwYjI5MjQwNSIsInNjb3BlZEtleVNlY3JldCI6ImM3OGI4Y2Q4NmNiNTljZDQxMjFlMTdkMmU4MjVkY2FlNThlZDkyMmEzYzkzMDEyMTFkYjc5YjY0ZDQzZTFmNGUiLCJpYXQiOjE2NTg2OTcyNDN9.E0uFksg-A8W90gGFc3TjJnP7wJDEic-QkrEShDTlvkY",
        },
        data: data,
      };
      const res = await axios(config);

      console.log(res.data);
      //Take a look at your Pinata Pinned section, you will see a new file added to you list.
    } catch (error) {
      console.log("Error sending File to IPFS: ");
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
     <button onClick={sendFileToIPFS}> hello</button>
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
    </div>
  );
};

export default Nftwarranty;
