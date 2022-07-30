import React from 'react';
import "./Footer.css";
function Footer() {
  return (
<footer className="footer" style={{backgroundColor:'#0D1116'}}>
  	 <div className="container">
  	 	<div className="row">
           <div className="footer-col">
               <h3>Bit Shop</h3>
  	 			<ul>
  	 				<li><a href="#" target="_blank" rel="noopener noreferrer">©Copyright 2022</a></li>
  	 				<li><a href="#" target="_blank" rel="noopener noreferrer">All rights reserved</a></li>
                       

  	 			</ul>
  	 		</div>
         <div className="footer-col">
  	 			<h4>Useful Links</h4>
  	 			<ul>
  	 				<li><a href="/">Home</a></li>
  	 				<li><a href="/">Orders</a></li>
  	 				<li><a href="/">Cart</a></li>
  	 				<li><a href="/">Wishlist</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contact</h4>
  	 			<ul>
  	 				<li><a href="#" style={{width:"450px"}}>📍Bit Shop, Nitte Meenakshi Institute of Technology, Bangalore-560064</a></li>
  	 				<li><a href="#" >phone:+91 7818******</a></li>
  	 				<li><a href="#" >privacy policy</a></li>
  	 				<li><a href="#" >affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		
  	 	
  	 		{/* <div className="footer-col">
  	 			<h4>Social Links</h4>
  	 			<div className="social-links">
  	 				<a href="#"target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
  	 				<a href="#"target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
  	 				<a href="#"target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
  	 			</div>
  	 		</div> */}
               
  	 	</div>
  	 </div>
  </footer>
  );

  
}

export default Footer;
