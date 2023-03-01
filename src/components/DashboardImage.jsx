import React from "react";
import { useState } from "react";
import { ImageGrid } from "./ImageGrid";
import { Modal } from "./Modal";
import Title from "./Title";
import UploadForm from "./UploadForm";


const DashboardImage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div>
      <div className="App">
        <Title />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </div>
  );
};
export default DashboardImage;
