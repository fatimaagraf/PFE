
import axios from "axios";
import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
function Editp() {
     let navigate=useNavigate()
    
      const params=useParams();
     const [titel,setTitel]=useState('')
     const [type,setType]=useState('') 
     const [image,setImage]=useState('')
     const [descripsion,setDescripsion]=useState('')
     const [price,setPrice]=useState(0)
     const [color,setColor]=useState('')
     const [sexe,setSexe]=useState('')
     const [qnty,setQnty]=useState('')
    const formSubmit= (e)=>{
    
        e.preventDefault()
axios.put(`http://localhost:9000/product/${params.id} ` ,{
titel,
type,
image:URL.createObjectURL(image) ,
descripsion,
price,
qnty,
color,}).then(navigate('/creatpre'))     
    }
    return( <><div className="loginp"><h1>edit</h1>
  <form onSubmit={formSubmit}> 
<label>titel </label>
<input    type="text" id="productTitel" onChange={(e)=>setTitel(e.target.value)}/>
<br/><br/>
<label>type</label>
<input type="text" id="productType"    onChange={(e)=>setType(e.target.value)}/>
<br/><br/>
<label>image</label>
<input type="file"  id="productImage" onChange={(e)=>setImage(e.target.files[0])}/>
<br/><br/>
<label>descripsion</label>
<input type="text"  id="productDescripsion" onChange={(e)=>setDescripsion(e.target.value)}/>
<br/><br/>
<label>price</label>
<input type="number"  id="productPrice" onChange={(e)=>setPrice(e.target.value)}/>
<br/>
<br/><label>qnty</label>
<input type="text" id="productType"    onChange={(e)=>setQnty(e.target.value)}/>
<br/><br/>
<label>color</label>
<input type="text"  id="productColor" onChange={(e)=>setColor(e.target.value)}/><br/><br/>
<label>sexe</label>
<input type="text"  id="productColor" onChange={(e)=>setSexe(e.target.value)}/><br/><br/>
<button type="submit"> Edit</button>
 </form>
</div>    
</>)
 
}
export default Editp;