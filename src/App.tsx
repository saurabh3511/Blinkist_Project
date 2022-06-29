
import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import BookDetailsPage from './pages/BookDetails';
import EntrepreneurshipPage from './pages/Entrepreneurship';
import LibraryPage from './pages/MyLibrary';

function App() {

  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<LibraryPage />} />
          <Route path="/entrepreneurship" element={<EntrepreneurshipPage />}/>
          <Route path="/bookdetails"  element={<BookDetailsPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;