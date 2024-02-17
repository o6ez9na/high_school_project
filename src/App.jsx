import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import NotFound from './components/not_found/not_found';

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link> 
        
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;