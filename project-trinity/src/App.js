import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter as  Router, Route, Routes, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter >
    <Routes >
    <Route path='/' element={<Home/>}/> 
      {/* <Route path='/shop' element={<Shop/>}/> */}
      <Route path='/home' element={<Home/>}/>
      {/* <Route path='/Contact' element={<Contact/>}/> */}
      {/* <Route path='/About' element={<About/>}/> */}
    </Routes>
  </HashRouter>
  );
}

export default App;
