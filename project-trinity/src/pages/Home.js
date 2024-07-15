// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'

// Components
import Carousel from '../carousels/Carousel';
import Nav from '../components/Nav';

// Assets
import hero from '../assets/hero-shot-desktop.jpeg'
import stars from '../assets/stars.svg'
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg'

function Home() {

  return (
    <div>
    <Nav/>
   
      <motion.div initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 1 }}
      className='home-container'>
      <Carousel/>
      
      <div className='hero-container'>
        <img src={hero} alt="a picture of trinity and his bmw"/>
      </div> 
      <img class="spinning-logo" id="emblem" src={logo} alt="emblem of trinity la"/>
      <div className='trinity-container'>
        <img src={stars} id="stars"  alt="three stars"/>
        <h2 className="less-spaced">
          Los Angeles
        </h2>
        <h1 className="spaced">
        ♱TRINITY♱
        </h1>
        
      </div>
    </motion.div>
    <Footer/>
    </div>
  );
}

export default Home;
