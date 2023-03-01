import { useEffect, useState } from "react";
import { useContext } from "react";
import { collection, doc, setDoc ,updateDoc} from "firebase/firestore"; 
import { projectStorage,timestamp,db } from "../../firebase/config";
import { AuthContext } from "../../context/AuthContext";
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);


  const {currentUser}=useContext(AuthContext)


  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectiionRef=db
    .collection(`users`)
    .doc(currentUser.uid)
    .collection('images')


    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt=timestamp()
        await collectiionRef.add({url,createdAt,user:currentUser.uid})
        //await setDoc(collectiionRef, {url,createdAt,currentUser});

        setUrl(url);
      });
  }, [file]);
  return { progress, url, error };
};
export default useStorage;
