import React from "react"
import './Be.css';
  import  imageb from '../../img/a3.png'
  import  imageb3 from '../../img/a4.png' 
   import  imageb2 from '../../img/a2.png' 
  import  imageb1 from '../../img/a1.png'




const Be =(props)=> {
return(
  
     <>
     <h1>Bestsellers</h1>

<div className="content">
          
             
    

           <div className="containers">
             
            
             
            
              <div className="box">
               <div className="imgbox">
                 <img src={imageb}/>
               </div>
               <div className="details">
                <div className="text">
                 <h2>BABY</h2>
                </div>
               </div>
             </div>
             <div className="box">
                <div className="imgbox">
                 <img src={imageb1}/>
               </div>
               <div className="details">
                <div className="text">
                 <h2>BOY</h2>
                </div>
               </div>
             </div>
             <div className="box">
                <div className="imgbox">
                 <img src={imageb2}/>
               </div>
               <div className="details">
                <div className="text">
                 <h2>GIRL</h2>
                </div>
               </div>
             </div>
             <div className="box">
               <div className="imgbox">
                 <img src={imageb3}/>
               </div>
               <div className="details">
                <div className="text">
                 <h2>TWINS</h2>
                </div>
               </div>
             </div>
           </div>






  </div>

</>


  
   
   
)




}
export default Be