// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'
import '../styling/Nav.css'
import '../styling/Glitch.css'
// Components
import Nav from '../components/Nav';

// Assets
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import SpotifyNow from '../components/SpotifyNow';
import ScrollingText from '../components/scrollingText';
import Distortion from '../components/Distortion';
// import ScrollToTop from '../components/ScrollToTop';
import LoadingScreen from '../components/LoadingScreen';
import brandname from '../assets/name.svg'
import DistortedSvg from '../components/DistortedSvg';
import GradientText from '../components/GradientText';
import Clouds from '../components/Clouds'

function Home() {
  const text = 'trinity';
  const date = '9.28.24'

  return (
    <div>
      <LoadingScreen/>
      <Nav/>
      <motion.div 
        initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
        animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
        transition={{ duration: 2, delay: 1.5 }}
        id="home">
        <section id='section1' className='landing-page'>
        <motion.div 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 2, delay: 1.5 }}
          className='clouds'>
          {/* <img className='brand-name' src={brandname} alt='trinity'/> */}
          <div className="text-container">
      {text.split('').map((letter, index) => (
        <GradientText key={index} letter={letter} />
      ))}
    </div>
    
          {/* <Glitch/> */}
          <div className='slogan'>
              <h2 class="hero glitch layers" data-text="三位一体"><span>三位一体</span></h2>
          <h1><i>mind </i>body <b>sol</b></h1>
          </div>

         
        </motion.div>
        
        </section>
        <section className='second-page'>
        <div className='mountains'>
        <div className='spotify-container'>
          <SpotifyNow/>
        </div>
        </div>
        </section>
       
          <div className='distortion-container'>
          <ScrollingText/>

          <Distortion/>
          </div>
      <section className='blue-container'>
        <h1><div className="text-container">
      {date.split('').map((letter, index) => (
        <GradientText key={index} letter={letter} />
      ))}
    </div></h1>
      </section>
      </motion.div>
      <Footer/>
    </div>
  );
}

export default Home;
