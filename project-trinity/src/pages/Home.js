// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'

// Components
import Carousel from '../carousels/Carousel';
import Nav from '../components/Nav';

// Assets
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import SpotifyNow from '../components/SpotifyNow';
import ScrollingText from '../components/scrollingText';
import ScrollToTop from '../components/ScrollToTop';
import LoadingScreen from '../components/LoadingScreen';
import brandname from '../assets/name.svg'

function Home() {
  // "homepage": "https://rafaelcxrrllx.github.io/trinityla",

  return (
    <div>
            

            <LoadingScreen/>
      <Nav/>
      
      {/* <MasonryLayout/> */}
      <motion.div 
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 2, delay: 1.5 }}
      className='home-container'
      id="home">
      
    
          
            <img className='brand-name' src={brandname} alt='trinity'/>
              
              <div className='slogan'>
                <h1><i>mind </i>body <b>sol</b></h1>
              </div>
            
              <div className='spotify-container'>
                <SpotifyNow/>
              </div>
    
    <Carousel/>
      
  
     
      
      {/* <div id="desktop-flour" className='flourescent'></div>
      <div id="mobile-flour" className='flourescent'></div> */}

      
      {/* <ScrollingText/> */}
      </motion.div>
      <Footer/>
    </div>
  );
}

export default Home;
