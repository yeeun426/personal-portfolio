import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/*' element={<Home />} />
        <Route exact path='/main' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
