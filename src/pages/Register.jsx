import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, projectStorage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(projectStorage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            navigate("/");
          } catch (err) {
            setErr(true);
            console.log("11", err);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      console.log("22", err);
      setLoading(false);
    }
  };
  return (
    <div className="registerContainer">
      <span>Register</span>
      <form onSubmit={handleSubmit}>
        <input required type="text" placeholder="displayName" />
        <input required type="text" placeholder="email" />
        <input required type="password" placeholder="password" />
        <input required type="file" id="file" />
        <label htmlFor="file" className="add-img">
          
          <span className='input-file-btn'>Add your avatar</span>
        </label>
        <div></div>
        <button disabled={loading}>Sing up</button>
        {loading && "Uploading and compressing the image plase wait..."}
        {err && <span>Something wrong</span>}
      </form>
      <Link to="/login">
        <p>Login </p>
      </Link>
    </div>
  );
};

export default Register;
