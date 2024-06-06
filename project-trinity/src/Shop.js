// Global Styling
import './styling/styles.css'

// Local Styling
import './styling/Shop.css'

// Components
import Carousel from './Carousel';
import Menu from './Menu';
import Nav from './Nav';
import Footer from './Footer';
import {motion} from 'framer-motion'

// Assets
import heartofgod from './assets/items/shirt1-back.svg'
import stars from './assets/stars.svg'
import { Link } from 'react-router-dom';


function Shop() {

  return (

    <div 
    className='home-container'>
      <Nav/>
    <motion.div
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 1 }}
      >
      <p className='title'>
        Shop
      </p>
      <div className='items'>
      <Link id='item-link' to="/item">
        <div className='item'>
          <div className='item-img'>
            <img src={heartofgod} alt="an image of a shirt with a heart design"/>
          </div>
        </div>
      </Link>
        
      </div>
      </motion.div>
      <Footer/>
    </div>
  );
}

export default Shop;
