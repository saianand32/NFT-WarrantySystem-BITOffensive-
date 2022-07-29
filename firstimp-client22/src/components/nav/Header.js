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
    <Menu onClick={handleClick} mode="horizontal" id="navMenu" style={{background:"#131921",height:"50px",zIndex:'1500'}}>
      
          <Item  className="nav_logo_container">
        <div className="nav_logo_container">
          {/* <img className="logo_img" src={logo} alt="logo" /> */}
         <div className="nav_logo">BIToffensive_Store</div>
        </div>
      </Item>
        <Item key="home" icon={<AppstoreOutlined style={{color:"#b3d146"}} />}>
        <Link to="/" id = "navLinkText">Home</Link>
      </Item>
        <Item key="shop" icon={<ShopOutlined style={{color:"#b3d146"}}/>}>
        <Link to="/shop" id = "navLinkText">Shop</Link>
      </Item>
        <Item key="cart" icon={<ShoppingCartOutlined style={{color:"#b3d146"}}/>}>
        <Link to="/cart">
          <Badge count={cart.length} offset="9 0" id = "navLinkText">
            cart
          </Badge>
        </Link>
      </Item>
  

     

      {!user && (
        <Item key="register" icon={<UserAddOutlined style={{color:"#b3d146"}} />} className="float-right">
          <Link to="/register" id = "navLinkText">Register</Link>
        </Item>
      )}

      {!user && (
        <Item key="login" icon={<UserOutlined style={{color:"#b3d146"}}/>} className="float-right">
          <Link to="/login" id = "navLinkText">Login</Link>
        </Item>
      )}

      {user && (
        <SubMenu
          icon={<SettingOutlined />}
          title={user.email && user.email.split("@")[0]}
          className="float-right"
          style={{color:"#b3d146"}}
        >
          {user && user.role === "subscriber" && (
            <Item>
              <Link to="/user/history" >Dashboard</Link>
            </Item>
          )}

          {user && user.role === "admin" && (
            <Item>
              <Link to="/admin/dashboard">Dashboard</Link>
            </Item>
          )}

          <Item icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>
        </SubMenu>
      )}

      <span className="float-right pr-2">
        <Search />
      </span>
    </Menu>
  );
};

export default Header;
