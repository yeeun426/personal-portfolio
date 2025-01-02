import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './pages/Main/Main';
import Intro from './pages/Intro/NewIntro.js';
import Project from './pages/Project/Project';
import Portfolio from './pages/Portfolio/Portfolio';
import Email from './components/Email/Email';
import About from './pages/AboutMe/AboutMe.js';
import Header from './components/Main/Header.js';
import Footer from './components/Main/Footer.js';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/*' element={<Intro />} />
        <Route path='/main' element={<Main />} />
        <Route path='/project' element={<Project />} />
        <Route path='/project/:projectId' element={<Portfolio />} />
        <Route path='/email' element={<Email />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
