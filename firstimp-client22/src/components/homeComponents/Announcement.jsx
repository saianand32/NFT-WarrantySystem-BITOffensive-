import styled from "styled-components";
import { Link } from "react-router-dom";
import Funlandingpage from "../../pages/FunZone/FunLandingpage/Funlandingpage";

const Container = styled.div`
  height: 100px;
  width:100vw;
  margin-top:2px;
  // background-color: teal;
  // background-image:url("https://i.postimg.cc/BbDxZym7/banner.png");
  // background-color:  white;
  color: white;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  text-align:"center"
`;

const Announcement = () => {
  return <Container style={{display:"flex",justifyContent:"center" ,width:"100vw",zIndex:"10000"}}>
    <div style={{width:"100vw"}}>
      <Link to = "/funzone">
      <img src="https://i.postimg.cc/BbDxZym7/banner.png" alt="#" style={{width:"100vw",height:"100px"}} />
      </Link>
      {/* <h1>hello</h1> */}
    </div>

    {/* <div>
    <marquee behavior="scroll" direction="left"><h5 style = {{
       fontFamily: "HelveticaNeueLTPro-Roman",
       textAlign: "initial",
       whiteSpace: "nowrap",
       boxSizing: "border-box",
       backgroundColor: "#000",
       fontSize: "17px",
       padding: "11px 41px 0px 41px",
       fontWeight: "800",
       color: "#fff",
       lineHeight: "1",
       maxWidth:"36vw"
    }}>Get Additional 10% off with minimum Cart value of Rs 5000</h5></marquee>
    </div> */}
  
  </Container>;
      
};

export default Announcement;
