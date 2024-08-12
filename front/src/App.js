import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Intro from './pages/Intro/Intro';
import Project from './pages/Project/Project';
import Portfolio from './pages/Portfolio/Portfolio';
import Email from './components/Email/Email';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/*' element={<Intro />} />
        <Route path='/main' element={<Main />} />
        <Route path='/project' element={<Project />} />
        <Route path='/project/:projectId' element={<Portfolio />} />
        <Route path='/email' element={<Email />} />
      </Routes>
    </div>
  );
}

export default App;
