import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserCart,
  emptyUserCart,
  saveUserAddress,
  applyDiscount,
} from "../functions/user";
import moment from "moment";
import { useAccount, useConnect, useEnsName } from "wagmi";

import { Button, Card, Input } from "antd";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ethers } from "ethers";
import Web3 from "web3";
import axios from "axios";
import { abi } from "../contract/abi";
const rpcURL = "https://rinkeby.infura.io/v3/c7947df1c5c54702851df8b415d9f873";
const web3 = new Web3(Web3.givenProvider || rpcURL);
const contractAddress = "0x2d72f881dEdeBC461BCd97b1f299F6bb92f4b4e4";
const contract = new web3.eth.Contract(abi, contractAddress);

const Checkout = ({ history }) => {
  const { user, pageState, shippingAdd, cart } = useSelector((state) => ({
    ...state,
  }));
  const dispatch = useDispatch();
  const { address, isConnected } = useAccount();

  const [walletAddress, setWalletAddress] = useState("");

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [addresss, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [name, setName] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [email, setEmail] = useState("");
  const [speacialMessage, setSpeacialMessage] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [discountErr, setDiscountErr] = useState("");
  const [show, setShow] = useState(false);
  const [ipfsHash, setIpfsHash] = useState("");

  

  var date = new Date();

  var data = {
    image:
      "https://ipfs.io/ipfs/QmbSjaM3gJVfG4BuyTsU5hpFhLD9n24Y7mjZvQVztRH1GX",
    description: "Warranty nft",
    properties: [
      {
        type: "productName",
        value: cart[0].title,
      },
      {
        type: "productID",
        value: cart[0].productId,
      },
      {
        type: "productSerialNo",
        value: cart[0].serialNumber,
      },
      {
        type: "Warranty Expiry Date",
        value: moment(moment().format("YYYY/MM/DD"))
          .add(cart[0].warrantyMonths, "d")
          .format("YYYY/MM/DD"),
      },
      {
        type: "purchase date",
        value: date,
      },
    ],
  };
  async function burn() {
    try {
      // let balance = await web3.eth.getBalance(address);

      await contract.methods
        .burn(31)
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
  const sendFileToIPFS = async (e) => {
    console.log(address);
    try {
      var config = {
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmMTdjODcyNS03OTAxLTQ5NTUtOGRkZi1hNzJlMzM5NzA3NzIiLCJlbWFpbCI6Imt1bWFybml0aXNoNzg3MDM4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI0MTE5ZGQ0ODNhZGIwYjI5MjQwNSIsInNjb3BlZEtleVNlY3JldCI6ImM3OGI4Y2Q4NmNiNTljZDQxMjFlMTdkMmU4MjVkY2FlNThlZDkyMmEzYzkzMDEyMTFkYjc5YjY0ZDQzZTFmNGUiLCJpYXQiOjE2NTg2OTcyNDN9.E0uFksg-A8W90gGFc3TjJnP7wJDEic-QkrEShDTlvkY",
        },
        data: data,
      };
      const res = await axios(config);
      setIpfsHash(res.data.IpfsHash);
      // NftUri = res.data.IpfsHash;
      console.log(res.data);

      //Take a look at your Pinata Pinned section, you will see a new file added to you list.
    } catch (error) {
      console.log("Error sending File to IPFS: ");
      console.log(error);
    }
  };
  console.log(ipfsHash);

  // Button handler button for handling a
  // request event for metamask

  const btnhandler = async () => {
    await sendFileToIPFS();
    await wallDispatch();

    console.log(address);
  };

  const wallDispatch = async () => {
    dispatch({
      type: "WALLET_ADDRESS",
      payload: {
        walletAdd: address,
        name: user.name,
        email: user.email,
        ipfsHash: ipfsHash,
      },
    });
  };

  useEffect(() => {
    getUserCart(user.token).then((res) => {
      console.log(res.data);
      setProducts(res.data.products);
      console.log(res.data);
      setTotal(res.data.cartTotal);
    });
  }, []);

  //
  // var data = {
  //   image:
  //     "https://ipfs.io/ipfs/QmbSjaM3gJVfG4BuyTsU5hpFhLD9n24Y7mjZvQVztRH1GX",
  //   description: "Warranty nft",
  //   properties: [
  //     {
  //       type: "productName",
  //       value: values.title,
  //     },
  //     {
  //       type: "productID",
  //       value: values.productId,
  //     },
  //     {
  //       type: "productSerialNo",
  //       value: values.serialNumber,
  //     },
  //     {
  //       type: "Warranty Expiry",
  //       value: values.warrantyMonths,
  //     },
  //   ],
  // };

  // const sendFileToIPFS = async (e) => {
  //   try {
  //     var config = {
  //       method: "post",
  //       url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmMTdjODcyNS03OTAxLTQ5NTUtOGRkZi1hNzJlMzM5NzA3NzIiLCJlbWFpbCI6Imt1bWFybml0aXNoNzg3MDM4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI0MTE5ZGQ0ODNhZGIwYjI5MjQwNSIsInNjb3BlZEtleVNlY3JldCI6ImM3OGI4Y2Q4NmNiNTljZDQxMjFlMTdkMmU4MjVkY2FlNThlZDkyMmEzYzkzMDEyMTFkYjc5YjY0ZDQzZTFmNGUiLCJpYXQiOjE2NTg2OTcyNDN9.E0uFksg-A8W90gGFc3TjJnP7wJDEic-QkrEShDTlvkY",
  //       },
  //       data: data,
  //     };
  //     const res = await axios(config);
  //     setIpfsHash(res.data.IpfsHash);
  //     values.NftUri = res.data.IpfsHash;
  //     console.log(res.data);
  //     console.log("slndvk ncznk", values);
  //     //Take a look at your Pinata Pinned section, you will see a new file added to you list.
  //   } catch (error) {
  //     console.log("Error sending File to IPFS: ");
  //     console.log(error);
  //   }
  // };
  // console.log(ipfsHash);

  //setting shipping adress in store

  let shippingaddd = {
    name: name,
    mobileNum: mobileNum,
    email: email,
    add: addresss,
    specialMessage: speacialMessage,
  };
  const handleShippingAdd = async () => {
    if (typeof window !== undefined) {
      localStorage.setItem("shippingAddress", JSON.stringify(shippingaddd));
console.log(ipfsHash)
      await sendFileToIPFS();
       wallDispatch();
    }
    dispatch({
      type: "SHIPPING_ADDRESS",
      payload: shippingaddd,
    });

    setAddressSaved(true);
    toast.success("Address Saved Successully");
  };

  const handleEmptyCart = () => {
    if (typeof window !== undefined) {
      localStorage.removeItem("cart");
    }

    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });

    emptyUserCart(user.token).then((res) => {
      console.log(res.data);
      toast.success("Cart Empty ! let's Countinue SHOPPING!!!");
      setProducts([]);
    });

    setTimeout(() => {
      history.push("/shop");
    }, 5000);
  };

  const applyDiscountCoupon = () => {
    applyDiscount({ coupon }, user.token).then((res) => {
      if (res.data.error) {
        setDiscountErr(res.data.error);
        toast.error(`"${coupon}" is not Valid`);
        setShow(false);
      }

      if (res.data.discount) {
        setDiscountPrice(res.data.discount);
        toast.success(
          `A total of ₹ ${(
            total - res.data.discount
          ).toLocaleString()}  is applied on the coupon code ==> ${coupon}`
        );
        dispatch({
          type: "COUPON_APPLIED",
          payload: true,
        });
        setShow(true);
      }
    });
  };

  const showApplyCoupon = () => (
    <div className="row">
      <div className="col-md-6">

        <button onClick={burn}>burn</button>
        <Input
          type="text"
          className=""
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter Coupon code"
        />
        <button
          className="btn btn-primary btn-raised mt-2"
          onClick={applyDiscountCoupon}
        >
          Apply Coupon
        </button>
      </div>
    </div>
  );

  const handlePaymentSession = () => {
    history.push("/payment");
    dispatch({
      type: "SESSION",
      payload: true,
    });
  };

  return (
    <div className="row">
      <div className="col-md-6 p-5">
        <h4>Shipping Address</h4>
        <div>
          {/* {data.Balance} */}
          {walletAddress}
        </div>
        <div className="p-2 mt-2">
          <Input
            type="text"
            className=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            maxlength="30"
            required
          />
        </div>

        <div className="p-2 mt-2">
          <Input
            type="Number"
            className=""
            value={mobileNum}
            onChange={(e) => setMobileNum(e.target.value)}
            placeholder="Mobile Number"
            required
          />
        </div>
        <div className="p-2 mt-2 mb-2">
          <Input
            type="email"
            className=""
            //  value={}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Id"
            required
          />
        </div>
        <hr />

        <h6>Special Instructions: </h6>
        <div className="p-2 mt-2 mb-2">
          <Input
            type="text"
            className=""
            onChange={(e) => setSpeacialMessage(e.target.value)}
            placeholder="Your special message if any"
            required="true"
            maxlength="50"
          />
        </div>
        <hr />

        <textarea
          cols="90"
          required
          placeholder="Enter Your Address"
          onChange={(e) => setAddress(e.target.value)}
        />

        <button
          className="btn btn-secondary btn-raised mt-2 btn-block"
          onClick={handleShippingAdd}
        >
          Save Delivery Address
        </button>
        {/* <button onClick={handleShippingAdd}>dispatch shipping adress</button> */}
        <hr />
        <h4>Got Coupon?</h4>
        <br />
        {showApplyCoupon()}
      </div>

      <div className="col-md-6">
        <Card className="m-3">
          <div className="pt-4 pb-4 ">
            <h4>Order Summary</h4>

            <p className="text-primary h5 mb-5">
              {products.length} Products in the cart
            </p>
            <div className="mb-5">
              <ul className="list-group">
                {products.map((p, i) => (
                  <li className="list-group-item" key={i}>
                    <p className="cart-details text-secondary">
                      {p.product.title}
                    </p>
                    <span className="label label-default label-pill pull-xs-right cart-details">
                      ₹{" "}
                      {p.product.price -
                        (p.product.price * p.product.gst) / 100}
                      x {p.count} = ₹{" "}
                      {(
                        (p.product.price -
                          (p.product.price * p.product.gst) / 100) *
                        p.count
                      ).toLocaleString("en-IN")}
                      {/* {console.log(p.product.gst)} */}
                      <br />
                      <span> +</span>
                      <br />
                      <span className=" product_total ">
                        GST ({p.product.gst}%) : ₹
                        {((p.product.price * p.product.gst) / 100) * p.count}
                      </span>
                      <br /> <br />
                      Total = {p.product.price * p.count}
                    </span>
                    <br />
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            {!show ? (
              <h5 className="text-right">
                <span className="text-secondary">Cart Total :</span>
                <strong> ₹ {total.toLocaleString()} </strong>
              </h5>
            ) : (
              <>
                <h5 className="text-right">
                  <span className="text-secondary">Cart Total :</span>
                  <strong>
                    <del> ₹ {total.toLocaleString("en-IN")} </del>
                  </strong>
                </h5>
                <h5 className="text-right">
                  <span className="text-secondary">
                    Discounted Cart Total :
                  </span>
                  <strong> ₹ {discountPrice.toLocaleString("en-IN")}</strong>
                </h5>
              </>
            )}
          </div>
        </Card>

        <div className="row mt-4">
          <div className="col-md-6">
            <button
              className="btn btn-primary btn-raised btn-block ml-3"
              disabled={!addressSaved || !products.length || !address}
              onClick={handlePaymentSession}
            >
              Place Order
            </button>
          </div>
          <div className="col-md-6 pr-4">
            <button
              className="btn btn-danger btn-raised btn-block "
              onClick={handleEmptyCart}
            >
              Empty Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
