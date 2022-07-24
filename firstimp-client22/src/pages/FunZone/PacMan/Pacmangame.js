import React from 'react'
import Pacman from 'react-pacman';
import { Link } from 'react-router-dom';
import './Pacmangame.css'


function Pacmangame() {

  
    const audio = new Audio(
      "https://vgmsite.com/soundtracks/super-mario-galaxy/hrqhhgxx/2-18%20To%20the%20Observatory%20Grounds%202.mp3"
    );
  
    const start = () => {
      audio.play();
    
    };
    const refreshPage = ()=>{
        window.location.reload();
     }
  
    return (
      <div  style={{height:"90vh"}} >
      {/* <div class="bg-animation">
         <div id="stars"></div>
         <div id="stars2"></div>
         <div id="stars3"></div>
         <div id="stars4"></div>
     </div> */}
   
     <div className="area" style={{display:"flex"}}>
         
  
         <div style={{margin:"auto"}}>
             
         <Pacman />
    
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

export default Pacmangame