import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import sideImg from "./Images/logo2.jpg";
import { uploadFile } from "./services/api";
function App() {

const fileInputRef = useRef();
const [file,setFile]=useState('');
const [result,setResult]=useState('')

useEffect(()=>{
  const getImage = async ()=>{
    if (file){
      const data = new FormData();
      data.append("name",file.name);
      data.append("file",file);

    let response = await uploadFile(data);
    setResult(response.path);
    }
  }
  getImage();
  },[file])

const onUploadClick = () =>{
  fileInputRef.current.click();
}
console.log(file);
  return (
    <>
      <div className="desktop">
        <img src={sideImg} alt="SideImg" />
        <div className="main">
          <h1>Simple File Sharing </h1>
          <p>Upload and Share The Download Link </p>

          <button onClick={()=>onUploadClick()}>Upload  </button>
          <input type="file" id="inputHidden"
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files[0])                          
          }         
            />
<br />
            <a href={result} target="_blank">{result}</a>
        </div>
      </div>
      
    </>
  );
}

export default App;
