import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import NotFound from './component/not_found';

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