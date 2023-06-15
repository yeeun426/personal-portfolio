import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Intro from './pages/Introduce';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/*' element={<Main/>} />
        <Route exact path='/intro' element={<Intro/>} />
      </Routes>
    </div>
  );
}

export default App;
