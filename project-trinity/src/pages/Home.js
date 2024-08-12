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
import React, { useEffect, useRef, useState } from 'react';
import GradientText from '../components/GradientText';
import Clouds from '../components/Clouds'
import { Link } from 'react-router-dom';
import TRINITYFRONT from '../assets/items/trinity-front.svg'
import TRINITYBACK from '../assets/items/trinity-back.svg'


function Home() {

  const [TRISRC, setTRISrc] = useState(TRINITYBACK);



  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }


    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const text = 'trinity';
  const date = '9.28.24';
  const question = 'what if you take that chance?';
  const thyself = 'and come to know thyself?';
  return (
    <div className='dove'>
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
                {text.split(' ').map((letter, index) => (
                  <GradientText key={index} letter={letter} />
                ))}
              </div>
              <div className='slogan'>
                  <h2 class="hero glitch layers" data-text="三位一体"><span>三位一体</span></h2>
              <h1><i>mind </i>body <b>sol</b></h1>
              </div>
            </motion.div>
          </section>

        <section className='blue-container'>
          <div className='clouds'>
            <div
              ref={sectionRef}
              className={`section ${isVisible ? 'visible' : ''}`}>
              <h1 id='question'>
              wake up, <span className='rainbow'>Neo...</span>
              </h1>
              </div>
       
          </div>
        </section>
       
       
          <div className='distortion-container'>
          <ScrollingText/>

          <Distortion/>
          </div>
    
      <section className='blue-container'>
        <div className='clouds'>
       
          <h1 id='question'>
            follow <br/>the  <span className='rainbow'>white rabbit...</span>
          </h1>
          </div>
        </section>

        <section className='clouds'>
       
        <Link id='item-link' to="/shop/trinity">
       
        <div className='item'>
          <div className='shop-item-img'>
          <img
          src={TRISRC}
          alt="hover"
          onMouseEnter={() => setTRISrc(TRINITYFRONT)}
          onMouseLeave={() => setTRISrc(TRINITYBACK)}
          className="hover-image"/>
          </div>
        </div>
      </Link>
      
      </section>

        <section id="black" className='blue-container'>
          <div className='clouds'>
            <h1 id='question'>
            <span id="no-border" className='rainbow'>9.28.24</span>
            </h1>
          </div>
        </section>
      <section className='second-page'>
        <div className='clouds'>
        <div className='spotify-container'>
          <SpotifyNow/>
        </div>
        </div>
        </section>
      </motion.div>
      <Footer/>
    </div>
  );
}

export default Home;
