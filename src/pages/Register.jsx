import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios.js";
import Header from "../templates/Header";
import Navigation from "../templates/Navigation";
import Footer from "../templates/Footer";
import { Link } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); //Initialize the useHistory hook

  const handleRegister = async () => {
    //Perform client-side validation
    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      //Registration API endpoint
      const registerEndpoint =
        "https://dinmaegler.onrender.com/auth/local/register";
      //registration data
      const registerData = {
        username: fullName,
        email: email,
        password: password,
      };
      //Make a POST request to register the user
      const registerResponse = await axios.post(
        registerEndpoint,
        registerData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //handle successfull registration
      console.log("Registration successful!", registerResponse.data);
      //redirect to the page showing favorite housings
      navigate("/login");
    } catch (error) {
      //log the full error response
      console.error("registration failed", error);

      //Handle registration failure
      console.error("registration failed", error);
      alert("registration failed. Please check you information.");
    }
  };

  return (
    <>
      <Header />
      <Navigation />
      <main className="ring-2 ring-[#AAAAAA]">
        <h2>Opret bruger his Din Mægler</h2>
        <p>Fulde navn</p>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Fulde navn"
        />
        <p>Email adresse</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text"
          placeholder="Email addresse"
        />
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="password"
        />
        <p>Bekræft password</p>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Bekræft password"
        />
        <Link to="/login">
          <button onClick={handleRegister}>Opret bruger</button>
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default Register;
