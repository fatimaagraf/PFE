import React from "react";
import'./Home.css';
import image from '../../img/0.png'
import { Link } from "react-router-dom";
import {Navbar} from "../index"
import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn } from "react-icons/fa";

const Home=()=> {
return(
    
    <div>
        
    <div className="home"><Navbar></Navbar>
       <div className="homeimg"></div>
        <div className="hometext">
            <h1> sweet clothes</h1>
            <p>BABY COLLECTION FOR YOU</p>
           
        
       
        <div className="main-btn "><Link to="Produit"> shop now</Link></div>
        <div className="social"> 
            
              <a><FaFacebookF/></a>

        <a><FaInstagram/></a>
        <a><FaTwitter  /></a>
        <a><FaLinkedinIn  /></a>
       
       
        
        
        </div>
       </div>
   
 <div className="img">
        <img src={image} className="imgh"   />
        </div> 
        </div>
    </div>
)




}
export default Home