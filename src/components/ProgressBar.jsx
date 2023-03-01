import React, { useEffect } from "react";
import useStorage from "../hooks/imageHooks/useStorageImages";
import { motion } from "framer-motion";
export const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    console.log(progress);
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <motion.div className="progress-bar"
  initial={{width:0}}
  animate={{width:progress+'%'}}></motion.div>;
};
