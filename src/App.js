import { useDropzone } from "react-dropzone";
import "./App.css";
import { useCallback } from "react";
import img from "./assets/img/cloud-arrow-up.svg";
function App() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
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
