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


function Home() {

  return (
    <div>
    
      <Nav/>
      {/* <MasonryLayout/> */}
      <motion.div 
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 2 }}
      className='home-container'
      id="home">
      
      <div id="desktop-row" className='row'>
          <div className='col'>
          <Carousel/>
          </div>
          <div className='col'>
              <div className='col-container'>
              <p className='home-title'>Rafael Carrillo</p>
              
              <div id="mobile-flour" className='flourescent'></div>
              <p className='subtitle'><i>UXUI Designer / Full-Stack Developer </i>based out of <b>Los Angeles California.</b></p>
              
              </div>
          </div>
      </div>
  
      <div id="desktop-flour" className='flourescent'></div>
      <div className='spotify-container'>
        <SpotifyNow/>
      </div>
      
      {/* <div>
        <p id="recent-work-title"><i>Recent Work</i></p>
      </div> */}

      </motion.div>
      <Footer/>
    </div>
  );
}

export default Home;
