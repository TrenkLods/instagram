import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
 const Login = () => {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const passworld = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, passworld);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="loginContainer">
    <h1>TEST USEERS </h1>
    <p>email:1111@gmail.com pass:111111</p>
    <p>email:12@gmail.com pass:111111</p>
      <div className="formWraper">
        <form on onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="passworld" />
          <button>Sing in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <div>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};
export default Login