// Global Styling
import './styling/styles.css'

// Local Styling
import './styling/Shop.css'

// Components
import Carousel from './Carousel';
import Menu from './Menu';
import Nav from './Nav';

// Assets
import hero from './assets/hero-shot-desktop.jpeg'
import stars from './assets/stars.svg'
import Footer from './Footer';


function Shop() {

  return (

    <div className='home-container'>
      <Nav/>
      <Menu/>
      <h1>
        Shop
      </h1>
      {/* <div className='trinity-container'>
        <h1 className='slogan'>𝐇𝐄𝐀𝐑𝐓 𝐎𝐅 𝐆𝐎𝐃</h1>
      </div>
      <Carousel/>
      <div className='hero-container'>
        <img src={hero}  alt="a picture of trinity and his bmw"/>
      </div> 
      <div className='trinity-container'>
        <h1 className="spaced">
        ♱TRINITY♱
        </h1>
        <h2 className="less-spaced">
          Los Angeles
        </h2>
        
        <img src={stars} id="stars"  alt="three stars"/>
      </div> */}
      <Footer/>
    </div>
  );
}

export default Shop;
