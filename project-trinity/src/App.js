// Styling
import './styling/App.css';


// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';
import Collections from './pages/Collections';
import Blog from './pages/Blog';

// Items
import Item from './items/item';
import ItemTwo from './items/itemTwo';
import ItemThree from './items/itemThree';
import ItemFour from './items/itemFour';

// Collections
import VolumeOne from './collections/VolumeOne';

// Blogs
import Genesis from './blogs/Genesis';
import Mercury from './blogs/Mercury';
import FullMetal from './blogs/FullMetal';
import HolyMount from './blogs/TheHolyMountain';
import TheAntiChrist from './blogs/AntiChrist'

import CellSalts from './blogs/CellSalts';
import HolyTrinity from './blogs/HolyTrinity';

// Components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import React, { useEffect } from 'react';
import { convertAniBinaryToCSS } from "ani-cursor";


async function applyCursor(selector, aniUrl) {
  const response = await fetch(aniUrl);
  const data = new Uint8Array(await response.arrayBuffer());

  const style = document.createElement("style");
  style.innerText = convertAniBinaryToCSS(selector, data);

  document.head.appendChild(style);
}

function App() {

  useEffect(() => {
    applyCursor(".dove", "https://archive.org/cors/tucows_169750_Dove_Flying/dove.ani");
    applyCursor("a", "https://archive.org/cors/tucows_169750_Dove_Flying/dove.ani");
    applyCursor("Link", "https://archive.org/cors/tucows_169750_Dove_Flying/dove.ani");
    applyCursor(".letter", "https://archive.org/cors/tucows_169750_Dove_Flying/dove.ani");
    applyCursor("button", "https://archive.org/cors/tucows_169750_Dove_Flying/dove.ani");
    applyCursor(".menu", "https://archive.org/cors/tucows_169750_Dove_Flying/dove.ani");

    



  }, []);


  return (

    <div>
       <Router>
        <ScrollToTop/>
        <Routes>   
          <Route path='/' element={<Home/>}/> 
          <Route path='/trinityla' element={<Home/>}/> 
          <Route path="*" element={<Home />} />
          {/* Pages */}
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>

          {/* Blogs */}
          <Route path='/blog/genesis' element={<Genesis/>}/>
          <Route path='/blog/mercury' element={<Mercury/>}/>
          <Route path='/blog/fullmetal' element={<FullMetal/>}/>
          <Route path='/blog/theholymountain' element={<HolyMount/>}/>
          <Route path='/blog/cellsaltsintro' element={<CellSalts/>}/>
          <Route path='/blog/theantichrist' element={<TheAntiChrist/>}/>
          <Route path='/blog/holytrinity' element={<HolyTrinity/>}/>


          {/* Shop Items */}
          <Route path='/shop/heartofgod' element={<Item/>}/>
          <Route path='/shop/lovelybones' element={<ItemTwo/>}/>
          <Route path='/shop/trinity' element={<ItemThree/>}/>
          <Route path='/shop/emfblkr' element={<ItemFour/>}/>

          {/* Collections */}
          <Route path='/collections/vol.1' element={<VolumeOne/>}/>
        </Routes>   
        </Router>     
    </div>
  );
}

export default App;
