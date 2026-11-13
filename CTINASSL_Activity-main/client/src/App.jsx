import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Header from './components/navbar/Header';
import footer from './components/navbar/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<home/>}/>
          <Route path="/" element={<about/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;