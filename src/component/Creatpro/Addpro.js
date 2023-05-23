import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
function Addpro() {
     let navigate=useNavigate()
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

        fetch('http://localhost:9000/product', {method: "POST",
                   headers:{"Content-type":"Application/json",},
     
        body:JSON.stringify({
          
                        titel,
                        type,
                       image:URL.createObjectURL(image) ,
                       qnty,
                        descripsion,
                        price,
                        color,
                        sexe
                      
        })
    }).then((res)=>res.json()).then((data)=>{navigate('/creatpre')})
    }
    return( <>
    <div className=" loginp"><h1>add product</h1>
  <form onSubmit={formSubmit}>
<label>titel</label><br></br>
<input    type="text" id="productTitel" onChange={(e)=>setTitel(e.target.value)}/><br/><br/>
<label>type</label><br></br>
<input type="text" id="productType"    onChange={(e)=>setType(e.target.value)}/>
<br/><br/>
<label>image</label><br></br>
<input type="file"  id="productImage" onChange={(e)=>setImage(e.target.files[0])}/>
<br/><br/>
<label>descripsion</label><br></br>
<input type="text"  id="productDescripsion" onChange={(e)=>setDescripsion(e.target.value)}/>
<br></br>
<label>qnty</label>
<br></br><input type="text" id="productType"    onChange={(e)=>setQnty(e.target.value)}/>
<br/><br/>
<br/><br/>
<label>price</label><br></br>
<input type="number"  id="productPrice" onChange={(e)=>setPrice(e.target.value)}/>
<br/><br/>
<label>color</label><br></br>
<input type="text"  id="productColor" onChange={(e)=>setColor(e.target.value)}/>
<br/><br/>
<label>sexe</label><br></br>
<input type="text"  id="productColor" onChange={(e)=>setSexe(e.target.value)}/><br/><br/>
<button type="submit"> add product</button>
  </form>
  </div>
</>)
 
}
export default Addpro;