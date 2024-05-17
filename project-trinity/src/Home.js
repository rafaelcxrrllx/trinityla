import Carousel from './Carousel';
import Menu from './Menu';
import Nav from './Nav';
import logo from './assets/logo.svg';
import trinity from './assets/title.svg'
import './styling/Home.css'
import './styling/styles.css'
import wave from './assets/wave.svg'

function Home() {
  return (
    <div className='home-container'>
      <Nav/>
      <Menu/>
      <Carousel/>
      <div className='wave-container'>
        <img src={wave}  alt="Trinity, Los Angeles"/>
      </div>
      <div className='trinity-container'>
      <img src={trinity} alt="Trinity, Los Angeles"/>
      <p>Your Body is the Temple, Your Life is the Religion</p>
      </div>
      
    </div>
  );
}

export default Home;
