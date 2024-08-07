// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Footer.css'
import {motion} from 'framer-motion';
// Assets
import instagram from '../assets/icons/instagram.svg';



function Footer() {

  return (

    <motion.footer
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 2, delay: 1.5 }}>
      <div className='footer-container'>
          <div>
              <a href='https://www.instagram.com/trinitylosangeles/'><img src={instagram} alt="instagram logo"/></a>
          </div>
          <div>
              <p>
              © 2024 TRINITY
              </p>
          </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
