import React from "react";
import { FileUpload } from "components";

const FileUploadPage = () => {
  const handleFile = (event) => {
    console.log(event);
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <FileUpload
          onChange={handleFile}
          accept={["png", "jpeg", "jpg", "pdf", "mp4", "docx", "xlsx"]}
        />
      </div>
    </div>
  );
};

export default FileUploadPage;
