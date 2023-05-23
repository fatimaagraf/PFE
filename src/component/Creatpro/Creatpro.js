
import React, { useEffect, useState } from "react"
import"./Creatpro.css"
import { Link } from "react-router-dom"
import Swal from "sweetalert2";
import { Navbar } from "../index"
export default function Creatpro(props) {
 const[product,setProduct]=  useState([]);
 const getall=()=>{fetch('http://localhost:9000/product')
    .then((res)=>res.json()).
    then((data)=>{setProduct(data);
})}
   useEffect(()=>{
    getall()
     },[])
   const delet=(p)=>{
   Swal.fire({title:'you are sure to delet?',
   showCancelButton:true

}).then((data)=>{

if(data.isConfirmed){
     fetch(`http://localhost:9000/product/${p.id}`,{method:"DELETE"})
    .then((res)=>res.json()).
    then((data)=>{    getall()}) }


})
} 
    return(<>
    <Navbar></Navbar>
<button className="add"> <Link to="/creatpre/add">add new product</Link></button>
<table >
<thead>
    <tr>
        <th> id</th>
        <th>title</th>
        <th>image</th>
        <th>qnty</th>
        <th>type</th>
        <th>descripsion</th>
        <th>price</th>
    <th>sexe</th>
        <th>color</th>
       <th>operatin</th>
    </tr>

</thead>
{product.map((p)=>{return(<><tbody>
    <tr key={p.id}>
    <td> {p.id}</td>
        <td>{p.titel}</td>
        <td><img src={p.image}></img></td>
        <td>{p.qnty}</td>
        <td>{p.type}</td>
        <td>{p.descripsion}</td>
        <td>{p.price}</td>
     <td>{p.sex}</td>
        <td>{p.color}</td>
        <th>
            <button  className="deletb" onClick={()=>delet(p)}>delet</button>
            <button className="view"><Link to={`/produit/${p.id}`}>view</Link></button>
            <button  className="edit"><Link to={`/edit/${p.id}`}>edit</Link>  </button>
        </th>
    </tr>

</tbody>
</>)})}
</table>
 
    </>)
}
;