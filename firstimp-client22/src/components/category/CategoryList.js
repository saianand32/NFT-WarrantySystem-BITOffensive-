import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../functions/category";
import { Spin } from "antd";
import styled from "styled-components";
import { mobile } from "../../responsive";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background:#232F3E;
  // background:#1b1c1d;
  z-index: 1000;
  height: 28px;
  margin-top: -1px;
  flex-wrap: wrap;
  @media (max-width: 620px) {
    padding: 0px;
    flex-direction: column;
  }
  
  
`;
const ContainerSub = styled.div`
  flex: 1;
  margin: 2px;
  // height: 5vh;
  position: relative;
  flex-wrap: wrap;
 
`;


const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  

`;

const Info = styled.div`
  position: absolute;
  font-size: 10px
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    // margin-bottom: 20px;
  font-size: 1.15em;
  padding: 7px;
  // font-weight:bold;
   color:white;
   margin-top:2px;
   &:hover {
    background-color: #1b242f;
    // border: 1.5px solid #b3d146;
    border-radius: 2px;
     
    color:#b3d146;
  }

`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;


const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategories().then((c) => {
      setCategories(c.data);
      setLoading(false);
    });
    return () => getCategories();
  }, []);

  const showCategories = () =>
    categories.map((c) => (
      <ContainerSub key={c._id}>
        <Link to={`category/${c.slug}`}>
        {/* <Image src="https://media.istockphoto.com/photos/posters-in-cozy-apartment-interior-picture-id943910360" /> */}
        <Info> 
       
        <Title  key={c._id} >{c.name}</Title>
     
        </Info>
          {/* <div
            className="btn btn-outlined-primary btn-lg btn-block btn-raised m-4 text-primary"
            key={c._id}
          >
            {c.name}
          </div> */}
        
        </Link>
      </ContainerSub>
        
      
    ));
  return (
    <Container style={{zIndex:1500}}>
      
        {loading ? <Spin className="text-center" /> : showCategories()}



        <ContainerSub >
        <Link to="/funzone">
        {/* <Image src="https://media.istockphoto.com/photos/posters-in-cozy-apartment-interior-picture-id943910360" /> */}
        <Info> 
       
        <Title  >Funzone</Title>
     
        </Info>
        </Link>
      </ContainerSub>

       
     
      </Container>

      
  );
};

export default CategoryList;
