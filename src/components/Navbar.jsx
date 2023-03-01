import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="title">
        <h1>Instagram</h1>
      </div>
      <span className="logo">Insta Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>Name {currentUser.displayName || currentUser.email}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};
export default Navbar;
