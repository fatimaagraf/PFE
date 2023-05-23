import React, { useState ,useEffect} from "react";
import'./Component/CardsProducts/CardsProducts.css';
import{FaCartPlus}from"react-icons/fa";
import {AiOutlineHeart} from"react-icons/ai";
import irpo from "./Component/db.json"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ADD } from "../../redux/actions/action";
import { useDispatch } from 'react-redux';
const CardsProducts =()=> {
 const dispatch = useDispatch()
const send= (e)=>{
  dispatch(ADD(e))
}
 
return(<><div className="produit">

 <div className="filterp">
   
   </div>
    <div className="ourp">
        <h1 className="titre"> Catalog</h1>
      <div  className="card">{ irpo && irpo.map((element, index)=>{return(
      <div className="cardp" key={index}>

    <div>
    <img  className="imagec" src={element.image}/>
    <p className="titel"> {element.title}</p> 
     </div>
<p className="price">${element.price}</p><div className="iconbtn">  
<Stack direction="row" spacing={2} >
      <Button variant="outlined" style={{color:"black",border:"solide",width: "100px",height: "30px"}}
      onClick={()=> send(element)}
      >Add to Cart
      </Button>
    </Stack>
<div className="ic">
    <AiOutlineHeart className="icItem"/></div></div>
  </div>)
   }) }</div>
      </div></div>
       </>
)




}
export default  CardsProducts;