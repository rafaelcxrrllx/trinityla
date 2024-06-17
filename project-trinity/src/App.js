import './styling/App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';
import Item from './items/item';
import ItemTwo from './items/itemTwo';
import ItemThree from './items/itemThree';
import Blog from './pages/Blog';
import Genesis from './blogs/Genesis';
import Mercury from './blogs/Mercury';
import FullMetal from './blogs/FullMetal';


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
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blog/genesis' element={<Genesis/>}/>
      <Route path='/blog/mercury' element={<Mercury/>}/>
      <Route path='/blog/fullmetal' element={<FullMetal/>}/>
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
