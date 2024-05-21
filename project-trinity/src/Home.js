import Carousel from './Carousel';
import Menu from './Menu';
import Nav from './Nav';
import './styling/Home.css'
import './styling/styles.css'
import hero from './assets/hero-shot-desktop.jpeg'
import stars from './assets/stars.svg'

function Home() {
  return (
    <div className='home-container'>
      <Nav/>
      <Menu/>
      <Carousel/>
      <h1 className='slogan'>HEART OF GOD</h1>
      <div className='wave-container'>
        <img src={hero}  alt="a picture of trinity and his bmw"/>
      </div>
      <div className='trinity-container'>
        <h1 className="spaced">
          TRINITY
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
