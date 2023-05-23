import React from "react";
import'./Choose.css';
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiTimeFive } from "react-icons/bi";
import { BsCamera } from "react-icons/bs";
import {IoHelpCircleOutline } from "react-icons/io5";

const Choose=()=> {
return(<>
<h1>Why Choose Us</h1>
    <div className="why">
        
    <div ><RiSecurePaymentLine font-size= '70px' color="#87CEFA"/>
    <h2>Easy Payment</h2>
    <p>You can Choose your perferrend Payment method</p>
    </div>
    <div><BiTimeFive  font-size= '70px' color="#87CEFA" />
    <h2>Delivery on time</h2>
<p> A courier visit at the exact time</p>
    </div>
    <div><BsCamera font-size= '70px'  color="#87CEFA"/>
    <h2>Real photo</h2>
<p> You can see your order befor receving just send your email</p>
    </div> 
     <div><IoHelpCircleOutline font-size= '70px' color="#87CEFA"/>

     <h2>Help  with the selecti</h2>
<p> You can call to our experts and they will help you with a choice</p></div>
    </div></>
)




}
export default Choose;