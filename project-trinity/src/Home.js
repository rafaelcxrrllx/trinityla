// Global Styling
import './styling/styles.css'

// Local Styling
import './styling/Home.css'

// Components
import Carousel from './Carousel';
import Menu from './Menu';
import Nav from './Nav';

// Assets
import hero from './assets/hero-shot-desktop.jpeg'
import stars from './assets/stars.svg'


function Home() {

  return (

    <div className='home-container'>
      <Nav/>
      <Menu/>
      <div className='trinity-container'>
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
      </div>
    </div>
  );
}

export default Home;
