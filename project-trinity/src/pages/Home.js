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
import Section from '../components/Section';
import Landing from '../components/Landing';
import LandingShirt from '../components/LandingShirt';
import ReleaseDate from '../components/ReleaseDate';

function Home() {

  const [TRISRC, setTRISrc] = useState(TRINITYBACK);



  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const sectio2Ref = useRef(null);


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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectio2Ref.current) {
      observer.observe(sectio2Ref.current);
    }


    return () => {
      if (sectio2Ref.current) {
        observer.unobserve(sectio2Ref.current);
      }
    };
  }, []);



  return (
    <div className='dove'>
      <LoadingScreen/>
      <Nav/>
      <motion.div 
        initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
        animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
        transition={{ duration: 2, delay: 1.5 }}
        id="home">
       
        <Landing/>

            <Section/>
       
       
          <div className='distortion-container'>
          <ScrollingText/>

          <Distortion/>
          </div>
    
          <section className='blue-container'>
    <div className='clouds'>
      <div
        ref={sectionRef}
        className={`section ${isVisible ? 'visible' : ''}`}>
        <motion.h1 
            className='question' 
            id="rabbit"
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={isVisible ? { y: 0, opacity:  1 }: {y: '7vw', opacity: 0} } // Animate opacity to 1
            transition={{ duration: 1 }}>
        follow <br/>the <span className='rainbow'>white rabbit.</span>
        
        </motion.h1>
       
        </div>
 
    </div>
  </section>

    <LandingShirt/>

       <ReleaseDate/>
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
