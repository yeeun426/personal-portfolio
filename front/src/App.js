import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/MainPage.js';
import Intro from './pages/Intro/TypeItIntro.js';
import Project from './pages/Project/Project';
import Portfolio from './pages/Portfolio/Portfolio';
import Email from './components/Email/Email';
import About from './pages/AboutMe/AboutMe.js';
import Ureca from './pages/Ureca/Ureca.js';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/me' element={<Ureca />} />
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
