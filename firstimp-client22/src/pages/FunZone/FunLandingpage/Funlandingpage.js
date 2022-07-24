import React from 'react'
import './Funlanding.css'
import { Link } from "react-router-dom";

function Funlandingpage() {
  return (
    <div className="funLanding" style={{height:"90vh"}}>


        <div style={{zIndex:"-12"}} className="bgr">
       <div class="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
        </div>
       </div>
        
        <div class="context shadow">
        <h1>Retro Zoneee</h1>
        <br /><br />
        <div class="cardss-list" >
           
  
        <div>
<div className="cards 1">
  <div className="cards_image"> <img src="https://i.postimg.cc/ZqqhtDhP/hipf-7hp2-211015.jpg" /> </div>
  <div className="cards_title title-white">
    <p>SpaceVaders</p>
  </div>
 
</div>
<Link to = "/vaders">
<button className='btnn' style={{width:"150px",height:"60px",marginLeft:"80px"}}>Play</button>
</Link>
</div>

<div>
<div className="cards 1">
  <div className="cards_image"> <img src="https://cdn.ilovefreesoftware.com/wp-content/uploads/2014/04/Pacman.jpg" /> </div>
  <div className="cards_title title-white">
    <p>PacMan</p>
  </div>
 
</div>
<Link to = "pacman">
<button className='btnn' style={{width:"150px",height:"60px",marginLeft:"80px"}}>Play</button>
</Link>
</div>

<div>
<div className="cards 1">
  <div className="cards_image"> <img src="https://i.postimg.cc/ZqqhtDhP/hipf-7hp2-211015.jpg" /> </div>
  <div className="cards_title title-whitey.jpg">
    <p>Card Title</p>
  </div>
 
</div>
<button className='btnn' style={{width:"150px",height:"60px",marginLeft:"80px"}}>Play</button>
</div>




</div>
    </div>


<div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </div>
  )
}

export default Funlandingpage