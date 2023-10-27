import React, { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './Report.css';

const PdfContent = ({ reportData }) => {
  return (
    <div className="pdf-content">
      <h2>Due Diligence Report</h2>
      {reportData && (
        <div>
          <div className="report-section">
            <h3>Product Description</h3>
            <p>{reportData['Product Description']}</p>
          </div>
          <hr /> {/* Add a horizontal line after Product Description section */}
          <div className="report-section">
            <h3>Traction</h3>
            <p>{reportData['Traction']}</p>
          </div>
          <hr /> {/* Add a horizontal line after Traction section */}
          <div className="report-section">
            <h3>Revenue</h3>
            <ul>
              {reportData['Revenue'].map((item, index) => (
                <li key={index}>
                  {item.Year}: {item.Amount}
                </li>
              ))}
            </ul>
          </div>
          <hr /> {/* Add a horizontal line after Revenue section */}
          <div className="report-section">
            <h3>Team</h3>
            <ul>
              {reportData['Team'].map((member, index) => (
                <li key={index}>
                  <strong>Name:</strong> {member.Name}<br />
                  <strong>Position:</strong> {member.Position}<br />
                  <strong>Experience:</strong> {member.Experience}
                </li>
              ))}
            </ul>
          </div>
          <hr /> {/* Add a horizontal line after Team section */}
          <div className="report-section">
            <h3>Funding Ask</h3>
            <p>{reportData['Funding Ask']}</p>
          </div>
          <hr /> {/* Add a horizontal line after Funding Ask section */}
          <div className="report-section">
            <h3>Location</h3>
            <p>{reportData['Location']}</p>
          </div>
        </div>
      )}
    </div>
  );
};


const Report = () => {
  const [reportData, setReportData] = useState(null);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    // Fetch the JSON data from your backend or local file
    fetch('/report.json') // Replace with the actual URL for your JSON data
      .then((response) => response.json())
      .then((data) => setReportData(data));
  }, []);

  return (
    <div className="report">
      <div className="report-content">
        <div className="memo" ref={componentRef}>
          
          {reportData && (
            <div>
              <PdfContent reportData={reportData} />
            </div>)
          }
        </div>
      </div>
      <div className="download-pdf">
        <button onClick={handlePrint}>Download PDF</button>
      </div>
      <footer className="footer">
      <p>&copy; 2023 Your Company. All rights reserved.</p>
       </footer>
    </div>
  );
};

export default Report;
