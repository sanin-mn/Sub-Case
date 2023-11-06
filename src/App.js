import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Subtitles from './Pages/Subtitles';
import Contribute from './Pages/Contribute';
import About from './Pages/About';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/subtitles' element={<Subtitles/>}/>
        <Route path='/contribute' element={<Contribute/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
