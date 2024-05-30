// Global Styling
import './styling/styles.css'

// Local Styling
import './styling/Shop.css'

// Components
import Carousel from './Carousel';
import Menu from './Menu';
import Nav from './Nav';
import Footer from './Footer';


// Assets
import heartofgod from './assets/items/shirt1-front.svg'
import stars from './assets/stars.svg'


function Shop() {

  return (

    <div className='home-container'>
      <Nav/>
      <Menu/>
      <h1>
        Shop
      </h1>
      <div className='items'>
        <div className='item-container'>
          <div className='item-img'>
            <img src={heartofgod} alt="an image of a shirt with a heart design"/>
          </div>
        </div>
        <div className='item-container'>
          <div className='item-img'>
            <img src={heartofgod} alt="an image of a shirt with a heart design"/>
          </div>
        </div>
        <div className='item-container'>
          <div className='item-img'>
            <img src={heartofgod} alt="an image of a shirt with a heart design"/>
          </div>
        </div>
        <div className='item-container'>
          <div className='item-img'>
            <img src={heartofgod} alt="an image of a shirt with a heart design"/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Shop;
