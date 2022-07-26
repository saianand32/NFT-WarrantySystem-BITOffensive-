import React from 'react'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom';
import './SaveShip.css'

function SaveShip() {

  
    
    const refreshPage = ()=>{
        window.location.reload();
     }
  
    return (
      <div  style={{height:"93vh"}} >
      {/* <div class="bg-animation">
         <div id="stars"></div>
         <div id="stars2"></div>
         <div id="stars3"></div>
         <div id="stars4"></div>
     </div> */}
   
     <div className="area" style={{display:"flex"}}>
         
  
         <div style={{margin:"auto"}}>
             
         <div style={{width:"1000px",height:"500px",marginTop:"-30vh"}}>
             <Iframe url="https://coder-coffee-and-bugs-5.utsavsinha.repl.co/"
        width="1000px"
        height="660px"
        id = "iframevader"
        // display="initial"
        // position="relative"
        style={{border:"3px solid black",padding:"50px"}}/>
        </div>
    
         </div>
         <div style={{ display:"block",margin:"auto",zIndex:"1000"}}>
         <div className="cardd 1">
   <div className="card_image"> <img src="https://cdn.ilovefreesoftware.com/wp-content/uploads/2014/04/Pacman.jpg" /> </div>
   <div className="card_title title-white">
     <p>PacMan</p>
   </div>
  
  </div>

  <button className='btnn' style={{width:"190px",height:"60px"}} onClick={refreshPage}>Refresh</button>

  <Link to = "/funzone">
  <button className='btnn' style={{width:"190px",height:"60px"}} >End Game</button>
  </Link>
  </div>
  
  <div>
         </div>
  
        
  
     </div>
     </div>
    )
  }

export default SaveShip