
import React, { useState ,useEffect} from "react";

import { useParams } from "react-router-dom"


export default function Productdetails() {
    const url="http://localhost:9000/product"
const params=useParams();
const [produit,setProduit]=useState({})
    useEffect(()=>{fetch(`${url}/${params.idp}`)
    .then((res)=>res.json())
    .then((produit)=>setProduit(produit))}, []);
 
return(<>
<h1>

</h1>

   

 <div  className="about" key={produit.id}>
    <div  >
     <img  className="detalis" src={produit.image}/>
 </div> 
   <div>
 <p > title : {produit.title}</p> 
 <p >type : {produit.type}</p> 


 <p > color   :{produit.color}</p> 
 <p > descripsion  :{produit.descripsion}</p> 
     <p> price  :{produit.price}$</p> 
     </div>
     
     
     </div>
</>)
    
};
