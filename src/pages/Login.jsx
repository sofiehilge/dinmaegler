import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Header from "../templates/Header";
import Navigation from "../templates/Navigation";
import Footer from "../templates/Footer";
import Button from "../components/Button";
import Users from "../components/Users";
import axios from "../api/axios.js";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); //Initialize the useHistory hook

  const handleLogin = async () => {
    //perform client-side validation
    if (!email || !password){
      alert ("Please enter both email and password");
      return;
    }
    try {
      //login API endpoint
      const loginEndpoint = "https://dinmaegler.onrender.com/auth/local";
      //login credentials
      const loginData = {
        identifier: email,
        password: password,
      };
      //Make a POST request to autenticate
      const loginResponse = await axios.post(loginEndpoint, loginData, {
        headers: {
          "Content-type": "application/json",
        }
      });
      //handle successfull login(e.g redirect, update state, etc.)
      console.log("login successful!", loginResponse.data);
      
      //user data for UI updates or redirection
      const {user} = loginResponse.data;
      console.log("User data:", user);

      //redirect to the page showing favorite housings
      navigate("/favorites");

    } catch (error){
      //handle login failure
      console.error("login failed", error);
      alert ("Login failed. Please check your credentials.");
    }finally{
      //set loading back to false afterlogin attempt
      setLoading(false)
    }
    console.log("handleLogin function executed")
  };

  return (
    <>
      <Header />
      <Navigation />
<main className="ring-2 ring-[#AAAAAA]">
  <h2>Log ind på din konto</h2>

  <p>Email</p>
  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
  placeholder="Email"/>
  <p>Password</p>
  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
  <button onClick={handleLogin} disabled={loading}>{loading ? "Logging in..":"Log ind"}</button>
  <div className="flex">
     <p>Log ind med</p>
  <p>Google</p>
  <p>Facebook</p>
  <p>Twitter</p>
  </div>
  <div className="flex">

 <p>Har du ikke en konto?</p>
 <Link to="/register">
 <p>Opret bruger</p>
 </Link>
  </div>
  

</main>
      <Footer />
    </>
  );
};

export default Login;
