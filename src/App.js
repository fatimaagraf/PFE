
import './App.css';
import { Routes, Route ,Link  ,Router} from 'react-router-dom';
import { Navbar,Home ,About, Choose , Be, Footer, Produit, Login,Productdetails, Creatpro, Addpro, Editp, AboutD, Register } from "./component/index";
import { useState } from 'react';
import Cart from './component/Produit/Cart';

function App() {
 
  return (
    <>

  

<Routes>
 

    
    
 <Route  path='/' element={<>
    <Home/>
 
    
   
     <Footer/>
                          </>}/>

<Route path='/login' element={<Login></Login>}/>
<Route path='/produit/:idp' element={<Productdetails/>}/>
<Route path='/produit' element={<Produit/>} />
<Route path='/creatpre' element={<Creatpro/>} />
<Route path='creatpre/add' element={<Addpro/>} />
<Route path='/edit/:id' element={<Editp/>} />
<Route path='/About' element={<AboutD/>} />
<Route path='/cart' element={<Cart/>} />
<Route path='/register' element={<Register></Register>}/>
     </Routes>  
   </>
   
  );
}

export default App;
