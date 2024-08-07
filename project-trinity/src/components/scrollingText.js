// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/ScrollingText.css'

import { motion } from 'framer-motion';

function ScrollingText() {

  return (

    <div>
      <div> 
        <div id='scroll-container'>
            <div class='scroll' id='scroll-one'>
                <div class='scroll-item'><p>TO MEASURE YOU BY YOUR SMALLEST DEED IS TO RECKON THE POWER OF OCEAN BY THE FRAILTY OF ITS FOAM.</p></div>
               
            </div>
            <div class='scroll' id='scroll-two'>
            <div class='scroll-item'><p>TO JUDGE YOU BY YOUR FAILURES IS TO CAST BLAME UPON THE SEASONS FOR THEIR INCONSISTENCY.</p></div>
            </div>
            <div class='fade'></div>
        </div>
      </div>
    </div>
  );
}

export default ScrollingText;
