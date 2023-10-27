import React, { useState } from 'react';
import './Document.css';
import { Link } from 'react-router-dom';

const DocumentUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const generateReport = () => {
    // Add code here to generate the report using the selected file
    // This can be a placeholder function for generating the report
    alert('Report generated!');
  };

    return (
      <>
    <div className="document-upload">
      <div className={`upload-area ${selectedFile ? 'selected' : ''}`} onDrop={handleDrop} onDragOver={handleDragOver}>
        {selectedFile ? (
          <div className="selected-file">
            <p>Selected File: {selectedFile.name}</p>
            <Link to="/report"><button className="generate-button" onClick={generateReport}>
              Generate Report
            </button></Link>
          </div>
        ) : (
          <div className="drag-drop">
            <p>Drag & Drop your document here</p>
            <p>or</p>
            <label htmlFor="file-input" className="custom-file-upload">
              Choose a file
            </label>
            <input type="file" id="file-input" accept=".pdf, .doc, .docx" onChange={handleFileChange} />
          </div>
        )}
          </div>
          
      </div>
      <footer className="footer">
      <p>&copy; 2023 DueDilligence Bot. All rights reserved.</p>
            </footer>
            </>
  );
};

export default DocumentUpload;
