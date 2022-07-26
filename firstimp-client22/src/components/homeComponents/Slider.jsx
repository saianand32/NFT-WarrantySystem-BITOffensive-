import { useState, useEffect } from "react";
import { ArrowLeftOutlined,ArrowRightOutlined} from "@material-ui/icons"
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../../responsive";

const Container = styled.div`
    width:100%;
    height:50vh;
    display:flex;
    // margin-top:10px;
    overflow: hidden;
    position: relative;
    ${mobile({ height:"40vh" })}
    background:" #f0ebeb";
    
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    cursor: pointer;
    margin: auto;
    opacity: 0.5;
    z-index: 2;

`;
const Wrapper = styled.div`
    height: 100px;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex* -100}vw);
    
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding:8px 5px;
    margin:2px 2px;
    ${mobile({ height:"40vh" })}
`
const ImageContainer = styled.div`
padding:5px 5px;

    height: -40vh;
    width: 100%;
`
const Image = styled.img`
    object-fit: fill;
    height: -50px;
    width: 100%;
 `
// const Title = styled.h1`
//     font-size: 70px;
// `
// const InfoContainer = styled.div`
//     flex:1;
//     padding:50px;
// `
// const Desc = styled.p`
//   margin: 50px 0px;
//   font-size: 20px;
//   font-weight: 500;
//   letter-spacing: 3px;
// `;
// const Button = styled.button`
//   padding: 10px;
//   font-size: 20px;
//   background-color: transparent;
//   cursor: pointer;
// `
;
const delay = 10500;

const Slider = () => {
 const [slideIndex, setSlideIndex] = useState(0);
 const handleClick =(direction)=>{
     if (direction==="left"){
         setSlideIndex(slideIndex>0? slideIndex-1:2);
     }
     else setSlideIndex(slideIndex<2? slideIndex+1:0);
 }
 useEffect(() => {
   setTimeout(
    () =>
    setSlideIndex((prevIndex) =>
      prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1
    ),
  delay
);

   return () => {};
 
 }, [slideIndex])
 
 console.log(slideIndex);
    return (
       <Container style={{zIndex:"-10",marginTop:"-52px"}} >
           <Arrow direction="left" onClick={()=> handleClick("left")}>
               <ArrowLeftOutlined />
           </Arrow>
           <Wrapper slideIndex={slideIndex} >

             {
            sliderItems.map((item)=>
            ( <Slide key={item.id}>
                  <ImageContainer >
                      <Image src={item.img}alt="img"  />
                      {/* <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/July/PFS_Unrechero/D50756151_WLA_GW_Heroes_Unrec__Tall_Hero_3000x1200._CB632954420_.jpg" alt="img"  /> */}
                  </ImageContainer>
                 
              </Slide>))}-
            
              
               </Wrapper> 
           <Arrow direction="right" onClick={()=> handleClick("right")}>
               <ArrowRightOutlined />
           </Arrow>
       </Container>



    )
}

export default Slider
