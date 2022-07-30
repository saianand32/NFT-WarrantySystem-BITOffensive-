import React from "react";

import Jumbotron from "../components/cards/Jumbotron";
import RazorpayCheckout from "../components/cards/RazorpayCheckout";
import CategoryList from "../components/category/CategoryList";
import BestSellers from "../components/home/BestSellers";
import NewArrivals from "../components/home/NewArrivals";
import Announcement from "../components/homeComponents/Announcement";
import Background from "../components/homeComponents/background";
import Slider from "../components/homeComponents/Slider";

const Home = () => {
  return (
    <div>
    {/* <Background /> */}
    
    <CategoryList/>
    <Announcement/>

      <Slider />
      <h4 className="text-left p-3 mt-2 display-5 jumbotron " style={{background:"white",color:"black"}}>
        New Arrivals
      </h4>
      <NewArrivals />
     
      <br />
      <h4 className="text-left p-3 mt-2 display-5 jumbotron " style={{background:"white",color:"black"}}>
        Best Sellers
      </h4>
      <BestSellers />
    
      
      <br />
      
    </div>
  );
};

export default Home;