import styled from "styled-components";

const Container = styled.div`
  height: 15vh;
  margin-top:20px;
  // background-color: teal;
  background-color:  white;
  color: white;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  text-align:"center"
`;

const Announcement = () => {
  return <Container style={{textAlign:"center"}}>
    <div>
    <h4  >Use Coupon First50 to get upto 50% off on First order !!!</h4>
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
