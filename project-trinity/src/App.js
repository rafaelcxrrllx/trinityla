import './styling/App.css';
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import About from './About';
import Item from './item';
import ItemTwo from './itemTwo';
import ItemThree from './itemThree';


import { BrowserRouter as  Router, Route, Routes, HashRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <HashRouter >
    <ScrollToTop/>
    <Routes >
    <Route path='/' element={<Home/>}/> 
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/shop/heartofgod' element={<Item/>}/>
      <Route path='/shop/lovelybones' element={<ItemTwo/>}/>
      <Route path='/shop/trinity' element={<ItemThree/>}/>


    </Routes>
  </HashRouter>
  );
}

export default App;
