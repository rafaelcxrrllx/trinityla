// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/About.css'

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {motion} from 'framer-motion'
import Carousel from '../carousels/Carousel';
// Assets
import logo from '../assets/logo.svg'
import stars from '../assets/stars.svg'
import sign from '../assets/signature.svg'


function About() {

  return (
    <div> 
      <Nav/>
      <motion.div 
        initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
        animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
        transition={{ duration: 1 }}
        className='about-main-container'>
           
         
            <img class="spinning-logo" id="emblem" src={logo} alt="emblem of trinity la"/>
            <Carousel/>
            <div>
              <div className='open-effect'>
                <h2>
                  TRINITY
                  <span>TRINITY</span>
                  <span>TRINITY</span>
                  <span>los angeles</span>
                </h2>
              </div>
            </div>
      <div className='about-description-container'>
      <h1 className='stay-blue'>
          Evoking Divinity To Amplify Human Consciousness
        </h1>
         
          <div>
          <img src={stars} id="stars"  alt="three stars"/>
            <p>
              trin·i·ty /ˈtrinədē/ noun
            </p>
            <p>
              <i>the state of being three.</i>
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
          <p>
            <span className='start-letter'>
            I 
            </span> 
            am here to spread the gospel truth. 
            The real story that astrology tells, that story concerns the understanding, purification, mastery and perfection of the human body and nothing else. 
            The scriptures are allegories, parables and fables based on the human body, "fearfully and wonderfully made". 
          </p>
          <p>
            Loved Not Owned,
          </p>
          <img id="emblem" src={sign} alt="signature of trinity"/>
        </div>
       
      
      </motion.div>  
      
    <Footer/>
    </div>
  );
}

export default About;
