import { useDropzone } from "react-dropzone";
import "./App.css";
import { useCallback } from "react";

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
    </>
  );
}

export default App;
