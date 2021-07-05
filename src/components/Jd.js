import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { connect } from "react-redux";
import { jd } from "../actions/jdAction";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  width: "80%",
  marginTop: "50px",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const Jd = (props) => {
  const [files, setFiles] = useState(null);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open,
  } = useDropzone({
    accept: ".doc,.docx,.pdf,.txt",
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      // alert(acceptedFiles[0]);
      setFiles(acceptedFiles[0]);
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject]
  );

  const filepath = acceptedFiles.map((file) => (
    <div key={file.path}>
      <b>Selected File -</b> {file.path} - {file.size} bytes
    </div>
  ));

  const save = () => {
    const formData = new FormData();
    formData.append("myFile", files);
    props.jd(files);
  };

  return (
    <div className="container" align="center">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here</p>
        <button type="button" onClick={open}>
          Open File Dialog
        </button>
      </div>
      <aside>
        <ul className="mt-3">{filepath}</ul>
      </aside>
      <Button variant="outlined" onClick={save}>
        Upload Challeng
      </Button>
    </div>
  );
};

export default connect(null, { jd })(Jd);
