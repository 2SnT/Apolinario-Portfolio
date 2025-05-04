import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Hero from './components/Hero'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact';

const App = () => {

  return (
    <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App
