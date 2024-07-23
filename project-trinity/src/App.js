import './styling/App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';
import Item from './items/item';
import ItemTwo from './items/itemTwo';
import ItemThree from './items/itemThree';
import ItemFour from './items/itemFour';

import Blog from './pages/Blog';
import Genesis from './blogs/Genesis';
import Mercury from './blogs/Mercury';
import FullMetal from './blogs/FullMetal';
import HolyMount from './blogs/TheHolyMountain';
import TheAntiChrist from './blogs/AntiChrist'
import { BrowserRouter as  Router, Route, Routes, HashRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import CellSalts from './blogs/CellSalts';
import Portfolio from './pages/Portfolio';
import Collections from './pages/Collections';
import VolumeOne from './collections/VolumeOne';
import HolyTrinity from './blogs/HolyTrinity';

function App() {
  return (
    <HashRouter >
    <ScrollToTop/>
    <Routes >
    <Route path='/' element={<Home/>}/> 
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/collections' element={<Collections/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blog/genesis' element={<Genesis/>}/>
      <Route path='/blog/mercury' element={<Mercury/>}/>
      <Route path='/blog/fullmetal' element={<FullMetal/>}/>
      <Route path='/blog/theholymountain' element={<HolyMount/>}/>
      <Route path='/blog/cellsaltsintro' element={<CellSalts/>}/>
      <Route path='/blog/theantichrist' element={<TheAntiChrist/>}/>
      <Route path='/blog/holytrinity' element={<HolyTrinity/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/shop/heartofgod' element={<Item/>}/>
      <Route path='/shop/lovelybones' element={<ItemTwo/>}/>
      <Route path='/shop/trinity' element={<ItemThree/>}/>
      <Route path='/shop/emfblkr' element={<ItemFour/>}/>
      <Route path='/collections/vol.1' element={<VolumeOne/>}/>




    </Routes>
  </HashRouter>
  );
}

export default App;
