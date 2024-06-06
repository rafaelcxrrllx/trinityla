// Global Styling
import './styling/styles.css'

// Local Styling
import './styling/About.css'

// Components
import Carousel from './Carousel';
import Menu from './Menu';
import Nav from './Nav';
import Footer from './Footer';
import {motion} from 'framer-motion'

// Assets
import heartofgod from './assets/items/shirt1-back.svg'
import stars from './assets/stars.svg'
import logo from './assets/logo.svg'
import { Link } from 'react-router-dom';


function About() {

  return (
    <div>
      
    <Nav/>
    
    <motion.div
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 1 }}
      >
      <p className='title'>
        About
      </p> 
    </motion.div>
    
    <motion.div 
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 1 }}
    
    className='about-main-container'>
    <div>

    </div>
    <div className='about-container'>
      <img src={logo} id="about-logo" alt="trinity logo"/>
      <div className='about-description-container'>
    <h3>
      trin·i·ty /ˈtrinədē/ 
    </h3> 
     <p>
     noun
    </p>
    <p>
      the state of being three.
    </p>
    <p>
      "The divine mind reasserts itself in its endeavors to fructify the divine mother, so that she may become big with the divine child, This constitutes the TRINITY." 
    </p>
    <p>
      "At one end is the personality, and at the other end is the individuality, our higher self, the TRINITY of our divine Nature" 
    </p>
    <p>
      "As the blood is the life of the flesh, it naturally follows that, as man is a TRINITY (body, or flesh, soul and spirit), the condition, or health of his body determines that of his soul."
    </p>
    </div>
    </div>
    </motion.div>
    
    <Footer/>
    </div>

  );
}

export default About;
