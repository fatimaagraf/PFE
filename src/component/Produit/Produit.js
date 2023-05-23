import React, { useState, useEffect } from "react";
import "./Produit.css";
import { FaCartPlus } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Navbar } from "../index";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetcheProducts } from "../../rtkl/slices/product-slice";
import { addTocart } from "../../rtkl/slices/cart-slice";

const Produit = (p) => {

  const [productC, setProductC] = useState([]);
const dispatch =useDispatch();
const products=useSelector((state)=>state.products);

 useEffect(() => {
  dispatch(fetcheProducts());
  }, []);

 

  const produit = (productC.length === 0 ? products : productC).map((p) => (
    <div className="card" key={p.id}>
      <div className="cardp">
        <div>
          <img className="imagec" src={p.image} alt="product" />
          <p className="titel">{p.title}</p>
          <p className="price">{p.price}MAD</p>
          <div className="iconbtn">
          <button onClick={()=>dispatch(addTocart(p))}>
              Add to cart
  </button>
            <div className="ic">
              <Link to="/cart">
                
              </Link>
              <Link to="/ilove">
                <AiOutlineHeart className="icItem"></AiOutlineHeart>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  const handfilter = (e) => {
    const type = e.target.value;
    if (type === "boy") {
      setProductC(products.filter((item) => item.type === "boy"));
    } else if (type === "girl") {
      setProductC(products.filter((item) => item.type === "girl"));
    } else if (type === "baby") {
      setProductC(products.filter((item) => item.type === "baby"));
    } else {
      setProductC([]);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="produit">
        <div className="filterp">
          <div>
            <button onClick={() => setProductC([])}>all product</button>
          </div>
          <div>
            <button value="boy" onClick={handfilter}>
              boy
            </button>
          </div>
          <div>
            <button value="girl" onClick={handfilter}>
              girl
            </button>
          </div>
          <div>
            <button value="baby" onClick={handfilter}>
              baby
            </button>
          </div>
        </div>
        <div className="ourp">{produit}</div>
      </div>
    </>
  );
};

export default Produit;