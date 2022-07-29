import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct, getProducts } from "../../../functions/product";
import { getCategories, getSubs } from "../../../functions/category";
import { Spin } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ProductCreateForm from "../../../components/forms/ProductCreateForm";
import LocalSearch from "../../../components/forms/LocalSearch";
import FileUpload from "../../../components/forms/FileUpload";

import axios from "axios";

const initialState = {
  title: "",
  description: "",
  price: "",
  categories: [],
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  gst: "",
  colors: [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ],
  // brands: ["Apple", "Microsoft", "Samsung", "Lenovo", "ASUS"],
  color: "",
  brands: "",
  material: "",
  property: "",
  design: "",
  style: "",
  application: "",
  instruction: "",
  width: "",
  length: "",
  weight: "",
  repeatlength: "",
  rollLength: "",
  serialNumber: "",
  productId: "",
  warrantyMonths: "",
};

const ProductCreate = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [subOptions, setSubOptions] = useState([]);
  const [showSub, setShowSub] = useState(false);



  const val= values
  console.log(val);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    getCategories().then((c) => setValues({ ...values, categories: c.data }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createProduct(val, user.token)
      .then((res) => {
        console.log(res);
        setLoading(false);
        window.alert(`"${res.data.title}" is created`);
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
        // if(err.response.status === 400) toast.error(`${err.response.data}`)
        toast.error(err.response.data.err);
      });
  };
  console.log(values);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubsChange = (e) => {
    e.preventDefault();
    setValues({ ...values, subs: [], category: e.target.value });
    getSubs(e.target.value).then((res) => {
      console.log(res.data);
      setSubOptions(res.data);
    });
    setShowSub(true);
  };

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
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          {loading ? <Spin /> : <h4>Product Create</h4>}
          <hr />

          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>

          <ProductCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
            handleSubsChange={handleSubsChange}
            subOptions={subOptions}
            showSub={showSub}
            setValues={setValues}
            
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
