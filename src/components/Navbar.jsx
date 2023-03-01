import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="title">
        <Link to='/'><h1>Instagram</h1></Link>
      </div>
      <Link className="link" to='/chat'>Insta Chat</Link>
      <div className="user">
        <img className='personImage' src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName||currentUser.email}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};
export default Navbar;
