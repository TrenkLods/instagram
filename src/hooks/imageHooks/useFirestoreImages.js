import { useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { db, projectStorage } from "../../firebase/config";
const useFirestore = (collection, doc) => {
  const [docs, setDocs] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const unsub = db
      .collection(collection)
      
    .doc(currentUser.uid)
    .collection('images')
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({
            ...doc.data(),
            id: doc.id,
            //user: currentUser.uid /* ...doc.data(),uid:doc.uid*/,
          });
        });
        setDocs(documents);
        console.log(`2312312321 ${docs}`);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection, doc]);

  return { docs };
};

export default useFirestore;
