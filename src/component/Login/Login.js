import { Navbar } from "../index";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // hadi function kat9leb f db.json 3la had l email : 
      const checkUser = async ()=>{
        await axios.get(`http://localhost:9000/user?email=${email}`)
        .then(res=>{
          // hadiii hiy li ghtwerina wax lgat xi user msajel bdak l email wal nn :
          // res.data : hiya dak ljawab li jab mn db.json
          // dik .length hiya li ghada twarina wax dak ljawab fih xi 7aja wka nn
          // ila kan fih xi user f dak ljawab kay3ni anna length ghayjon kter mn 0, wila malga 7ta xi user
          // ghaykon ljawab khawi  (y3ni legth ghaykon fih 0)
          if(res.data.length>0){
          // ya3ni ika lgah :
          // alert("user exist ")
          // db ghandozo l partie dyal verify dyal passord :
          // flwel ghanxofo b4da axno jab lina mn db.json :


          // db ghaybyen lina nuxan da l objet, 7it l index dyaoo fdak tableau howa 0
          // console.log(res.data[0]);
          


          // db ghayt2aked wx ta l passord nfssa li kayna 3nd user f db.json
          if(res.data[0].password  ===  password  ){
          // ila kan nafss password ha ax ghaydir :
          // alert("email & password are good ! ")
          navigate('/creatpre');
          
          }else{
            alert('l password ghalat !')
          }


          }else{
            // ila malgahx ha ax ghaydir :
            alert("this user doesn't exist ! ")
          }

        })
      } ;

      checkUser()
    }
  };
  

  const validate = () => {
    let result = true;

    if (email === "" || email === null) {
      result = false;
      alert("Please enter your email");
    }

    if (password === "" || password === null) {
      result = false;
      alert("Please enter your password");
    }

    return result;
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="loginp">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>email</label>
          <br />
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Login</button>
          <button>
            <Link to="/register">Register</Link>
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
