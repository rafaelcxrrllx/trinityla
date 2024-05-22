// Global Styling
import './styling/styles.css'

// Local Styling
import './styling/Footer.css'

// Components
import instagram from './assets/instagram.svg';

// Assets
import hero from './assets/hero-shot-desktop.jpeg'
import stars from './assets/stars.svg'


function Footer() {

  return (

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
  );
}

export default Footer;
