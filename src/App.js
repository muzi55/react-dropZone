import { useDropzone } from "react-dropzone";
import "./App.css";
import { useCallback, useState } from "react";
import img from "./assets/img/cloud-arrow-up.svg";

function App() {
  const [imgSrc, setImgSrc] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    const file = acceptedFiles[0];

    const blobURL = URL.createObjectURL(file);
    setImgSrc(blobURL);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
    },
  });

  return (
    <>
      <main>
        <h1>react dropzone</h1>
        <input type="file" name="" id="" {...getInputProps()} />
        <div className={`card-box ${isDragActive && "active"}`} {...getRootProps()}>
          <div className="card">
            <p>
              <span>Click to upload</span> or drag and drop
            </p>
            <p>PNG, JPG (max, 800 X 500px)</p>
          </div>
        </div>
        <div className="imgPreview">{imgSrc ? <img src={imgSrc} alt="구름모양 업로드 아이콘" /> : <div>이미지를 업로드 해주세요</div>}</div>
      </main>

      {isDragActive && (
        <div className="drag-active">
          <img src={img} alt="구름모양 업로드 아이콘" />
          <p>업로드할 파일을 드롭하세요.</p>
        </div>
      )}
    </>
  );
}

export default App;
