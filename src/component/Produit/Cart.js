import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { clear, deleteFromcart } from '../../rtkl/slices/cart-slice';

export default function Cart() {
    const dispatch=useDispatch()
    const cart=useSelector(state=>state.cart);
    const total=cart.reduce((acc,p)=>{acc +=p.price*p.qnt;
    return acc},0)
  return (<>
   <Navbar></Navbar>
  <div style={{display:'flex'}}> <button  style={{margin:"60px"}} onClick={()=>dispatch(clear())} >clear</button>
   <h3 style={{margin:"60px 500px"}}>{total}MAD</h3></div>
   <div>
    
    <table>
    <thead>
            <tr>
            <th>id</th>
            <th>titel</th>
            <th>img </th>
            <th>price</th>
            <th>qnt</th>
            <th>action</th>
          </tr>
          
         </thead>
       <tbody>
        
            {cart.map((p)=>( 
                  <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.titel}</td>
            <td><img src={p.image} style={{width:"80px",height:"80px"}}></img></td>
            <td>{p.price}MAD</td>
            <td>{p.qnt}</td>
            <td><button className='deletb' onClick={()=>dispatch(deleteFromcart(p))}>delete</button></td>
            </tr>
            ))}
         
        </tbody>
    </table>
   </div>
</>
  )
}
