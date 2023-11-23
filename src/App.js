import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Subtitles from './Pages/Subtitles';
import Contribute from './Pages/Contribute';
import About from './Pages/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Auth from './Components/Auth';
import Account from './Pages/Account';
import Admin from './Pages/Admin';



function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/> }/>
        <Route path='/subtitles' element={<Subtitles/>}/>
        <Route path='/contribute' element={<Contribute/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
