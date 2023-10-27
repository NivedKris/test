import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Document from './document/Document';
import Report from './report/Report';
import Footer from './footer/Footer';
function App() {
  return (
    <div className="app">
      <Header />
      <br />
      
      <Router>
  <Routes>
    <Route path="/" element={<Document />} />
    <Route path="/report" element={<Report />} />
  </Routes>
</Router>

   
    </div>
  );
}

export default App;
