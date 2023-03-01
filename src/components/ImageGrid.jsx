import React from "react";
import useFirestore from "../hooks/imageHooks/useFirestoreImages";

import { motion } from "framer-motion";
export const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("users");
  //console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            layout
            whileHover={{ opacity: 1 }}
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};
