import React, { useState } from "react";
import { Badge, Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
import "./nav.css";

import WalletConnect from "../../Hooks/WalletConnect";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <Menu
      onClick={handleClick}
      mode="horizontal"
      id="navMenu"
      style={{ background: "#0d1116", height: "50px", zIndex: "1500" }}
    >
      <Item className="nav_logo_container">
        <div className="nav_logo_container">
          <Link to ="/">
          {/* <img className="logo_img" src={logo} alt="logo" /> */}
          <div className="nav_logo orangecls "style={{fontWeight:"bold",fontSize:"30px"}}>BIT</div>
          </Link>
        </div>
      </Item>
      <Item key="home" className="orangecls" icon={<AppstoreOutlined style={{ color: "orange" }} />}>
        <Link to="/" id="navLinkText">
          Home
        </Link>
      </Item>
      
      <Item key="shop" className="orangecls" icon={<ShopOutlined style={{ color: "orange" }} />}>
        <Link to="/shop" id="navLinkText">
          Shop
        </Link>
      </Item>
      <Item
        key="cart"
      
        icon={<ShoppingCartOutlined style={{ color: "orange" }} />}
      >
        <Link to="/cart">
          <Badge className="orangecls" count={cart.length} offset="9 0" id="navLinkText">
            cart
          </Badge>
        </Link>
      </Item>

      {!user && (
        <Item
          key="register"
          icon={<UserAddOutlined style={{ color: "orange" }} />}
          className="float-right orangecls"
        >
          <Link to="/register" id="navLinkText">
            Register
          </Link>
        </Item>
      )}

      {!user && (
        <Item
          key="login"
          icon={<UserOutlined style={{ color: "orange" }} />}
          className="float-right orangecls"
        >
          <Link to="/login" id="navLinkText">
            Login
          </Link>
        </Item>
      )}

      {user && (
        <SubMenu
          icon={<SettingOutlined style={{color:"orange"}}/>}
          title={user.email && user.email.split("@")[0]}
          className="float-right "
          style={{position:"relative",zIndex:"100000000" ,color:"#FF005D",fontWeight:"bold"}}
        >
          {user && user.role === "subscriber" && (
            <Item style={{color:"#FF005D",fontWeight:"bold"}}>
              <Link to="/user/history">Dashboard</Link>
            </Item>
          )}

          {user && user.role === "admin" && (
            <Item  >
              <Link to="/admin/dashboard" style={{color:"#FF005D",fontWeight:"bold"}}>Dashboard</Link>
            </Item>
          )}

          <Item style={{color:"#FF005D",fontWeight:"bold"}} icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>

          <div> </div>
        </SubMenu>
      )}

      <span className="float-right pr-2">
        <Search />
      </span>
      <Item >
      <WalletConnect />
      </Item>

    </Menu>
  );
};

export default Header;
