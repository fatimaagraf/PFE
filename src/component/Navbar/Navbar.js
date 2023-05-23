import React from "react";

import'./Navbar.css';
import { SlBasket } from "react-icons/sl";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar =(props)=> {
   const cart=useSelector(state=>state.cart)
return(
   <>
  
    <div className="nav">
        <a href="#" className="logo"> sweet clothes</a>
     <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produit" >Produit</Link></li>
        <li><Link to="/About">About</Link></li>
     
     
  </ul><div className="h-icon">
  <Link to="/cart"> <div style={{marginLeft:'25px' ,borderRadius:'40%',backgroundColor:'#87CEFA',fontSize:'15px' ,width:'15px',textAlign:'center'}}>{cart.length}</div> <SlBasket    fontSize='35px'   align-items="center" color="black"/></Link>
       
   </div>
   <div>
<button className="btnlog"><Link to="/login">login</Link></button>


   </div> 


        </div>

  
  
    </>
)




}
export default Navbar