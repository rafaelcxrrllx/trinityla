// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/About.css'

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {motion} from 'framer-motion'

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
      transition={{ duration: 1 }}>
        <p className='title'>
          About
        </p> 
    </motion.div>
    
    <motion.div 
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 1 }}
      className='about-main-container'>
      <br/>
      <br/>
      <br/>
      <div id="about-flour" className='flourescent-about'></div>

    
      <div className='about-description-container'>

      <p> <span className='start-letter'>
                              R
                            </span>afael Carrillo AKA Trinity was born and raised in South Los Angeles California. 
        An aspiring entrepreneur in Design and Development with a passion for art and technology. Rafael is an alumni from the University of 
        California, Irvine with a Bachelor of Science, Specializing in Human Computer Interaction in 2024. 
        Combining his unique problem solving skills with human-centered design, Rafael reimagines how
        our world can be designed and delivered for the best human experience. 
        </p>
      </div>
      <div id="about-flour" className='flourescent-about'></div>

        
              <img class="spinning-logo" id="emblem" src={logo} alt="emblem of trinity la"/>
    <div >
        <img src={stars} id="stars"  alt="three stars"/>
        <h2 className="less-spaced">
         <span className='stay-blue'>Los Angeles</span>
        </h2>
        <h1 className="spaced">
          <span className="stay-blue"> ♱TRINITY♱</span>
         
        </h1>
    </div>
        <div className='about-description-container'>
      
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
      <div className='about-description-container'>
        <h1 className='stay-blue'>
          Evoking Divinity To Amplify Human Consciousness
        </h1>
        <p>
        <span className='start-letter'>
                                I
                            </span> am here to spread the gospel truth. 
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
