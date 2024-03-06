import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/*' element={<Home />} />
        <Route exact path='/main' element={<Main />} />
        <Route exact path='/project' element={<Project />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
