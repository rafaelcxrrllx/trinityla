import '../styling/Genesis.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backArrow from '../assets/icons/arrow-back.svg'
import cellsalts from '../assets/cellsalts.jpeg'
import Zodiac from '../components/Zodiac';


function CellSalts() {


    return (

    <div>
    <Nav/>
        <Link id='item-link' to="/blog">
            <motion.div
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            className="blog-back-container">
                <div className='back-container'>
                    <img className="arrow" src={backArrow}/>
                    <p>
                        Back to Blog
                    </p>
                </div>
            </motion.div>
        </Link>
        <motion.div 
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            className='blog-img-container'>
            <img src={cellsalts}  alt="Zodiac Wheel: Astro-Chemico-Physiological and Chromatic Chart"/>
        </motion.div> 
        <motion.div
        initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
        animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
        transition={{ duration: 1 }}
        className="blog-back-container">
            <div className='genesis-main-container'>
                <div className='title-container'>
                    <p>
                        22 June, 2024
                    </p>
                    <h1 id='title'>
                        The Cell Salts of Salvation: Summary
                    </h1>
                    
                </div>
                    <div className='genesis-container'>
                        <div className='blog-text-container'>
                        
                            <p>
                            <span className='start-letter'>
                                T
                            </span>
                            
                                his is an introduction to The Cell Salts of Salvation 
                                where I will give a brief summary on each Zodiac and its corresponding 
                                cell salt it is associated with. 
                            </p>
                            
                            <p>
                                This is based on the work done by 
                                Dr. George W. Carey, a famous biochemist and astrologer 
                                from the 1900s. His work and discoveries will help 
                                mankind free itself from ignorance, and finally place 
                                the stars rightfully where they belong! For centuries, 
                                astrology has been poisoned, perverted, and awfully 
                                misunderstood due to the lack of chemical, 
                                biological, astrological, and anatomical wisdom. These 
                                subjects in modern day have been completely perverted, 
                                leaving mathematics as one of the last true mediums of truth, 
                                where everything else has been manipulated and polluted. 

                            </p>
                            <p>
                                I am often criticized, misunderstood, and rejected when it comes to 
                                my teachings on Astrotheology and how 'As Above, So Below' could 
                                not be more true. I do not care about man judging me, for man does not 
                                even know himself. How can I except man to fathom what has existed 
                                as long as this barren earth. He cannot do it alone. I am not here to help, 
                                nor I ever will be. I am here to save myself, and point out
                                to others the very stone I have rejected. I repent, I know the truth is 
                                understanding, mastering, and perfecting the human body, to achieve 
                                Christ Consciousness and Regeneration. I know Jesus is king, he is the seed 
                                born in the Solar Plexus, who is risen to the Pineal Gland every 
                                28 1/2 days. He was not a person, he is a symbol, the symbol of the Celestial Man. 
                                The perfect man. The new man. 
                            </p>
                            <p>Please select a Zodiac to read more:</p>
                            <p>
                               (Only Aries and Taurus work. I am still building the remaining Zodiac Cards)
                            </p>

                            <Zodiac/>

                            
                            <h2>
                                ♊️ Gemini - Kali Mur (Potassium Chloride)                            
                            </h2>
                           
                            <p>
                                Derived from Latin dis means “apart” and gerere “to carry”, 
                                apart into different directions. Without Potassium Chloride, 
                                no fibrins can be made. Definition of fiber is “an elongated, thread-like structure of organize tissue”. 
                                With the exception of bones, it is evident that fibrin is necessary in the formation of the nerves, ligaments, 
                                veins, skin, tissue—all flesh. 
                            </p>
                            <div className='quote'>
                                <p>
                                    “the spinning salt, the threads from which the seamless garment of flesh is woven”
                                </p>
                                <p>
                                    - Dr. George W. Carey, The Cell Salts of Salvation
                                </p>
                            </div>
                            <p>
                                FOOD SOURCES: Peanuts, hazelnuts, lentils, potatoes, spinach, blackstrap molasses, ginger, coren, asparagus,
                                celery, peaches, cauliflower, pineapple, kale, squash, red beets.
                            </p>

                            <h2>
                                ♋️ Cancer - Calcium Flouride (Flouride of Lime)                           
                            </h2>
                            <p>
                                Cancer pertains to fluids, and is one of the signs of water triplicity. Nature’s power to 
                                reproduce the ceasless formation of corpuscles within the spleen where conception takes place. 
                                Derived from latin, concipio eans to take (hold) together. 
                                The corpuscle carries the spiritual germ or nucleus surrounded by fluid. 
                            </p>
                            <div className='quote'>
                                <p>
                                    “Give them their forms within. She will build coverings without. For Males-Females will they be. 
                                    Lords of the flame, also.”
                                </p>
                                <p>
                                    - Dr. George W. Carey, The Cell Salts of Salvation
                                </p>
                            </div>
                            <p>
                                FOOD SOURCES: Alfalfa, kelp, eggs, whole grains, raw green vegetables, beets, fish, apples, mushrooms, apples
                            </p>
                            <h2>
                                ♌️ Leo - Magnesium Phosphate (Phosphate of Magnesium)                           
                            </h2>
                            <p>
                                Derived from Latin, Leo means “to blot out, to destroy, to annihilate”, 
                                keeping within the nature of this animal. As the heart is a great mass of 
                                nervous muscular tissue concerned in dividing, lifting, and circulating the blod, 
                                it recieves from the inner sun Aries, the divine fire. Energy generated in the inner 
                                nucleus is wasted in emotion (motion thst moves out, goes forth from)
                            </p>
                            <div className='quote'>
                                <p>
                                    “As King of Beasts on Earth, is used as a symbol to illustrate the fact that energy or 
                                    power may be used to give life (create) and take life (destroy)”
                                </p>
                                <p>
                                    - Dr. George W. Carey, The Cell Salts of Salvation
                                </p>
                            </div>
                            <p>
                                FOOD SOURCES: Green vegetables, chlorophyll, chocolate (dark is best), nuts, seeds, whole grains, sea salt,
                                corn, peas.
                            </p>

                            <h2>
                                ♍️ Virgo - Kali Sulph (Sulphate of Potassium)
                            </h2>                           
                            <p>
                                Latin for Virgin, Virgo is Bethulah in Hebrew meaning “house or place of pure water”. 
                                To be pure, is to be perfect, unadulterated. Anything unadulterated means the original 
                                elements have been separated, resulting in loss of cerebral esse to furnish the body 
                                for an incoming ego. The indrawing of energy into the earth. It is the barren to carnality, 
                                therefore represents barren earth, but it is indeed fertile to spirituality. Oil, 
                                the physical manifestation of energy. 
                            </p>
                            <div className='quote'>
                                <p>
                                    “The Virgin: Symbol of the purified emotion, or purified lower nature, 
                                    no longer fructified by the desire-mind”
                                </p>
                                <p>
                                    - Dr. George W. Carey, The Cell Salts of Salvation
                                </p>
                            </div>
                            <p>
                                FOOD SOURCES: Green vegetables, chlorophyll, chocolate (dark is best), nuts, seeds, whole grains, sea salt,
                                corn, peas.
                            </p>
                            <h2>
                                ♎️ Libra - Nat Phos (Natrium of Phosphate)                            
                            </h2>                           
                            <p>
                                The Balancing Salt which neutralizes acid. It changes acid to alkili by 
                                releasing water from the tissues, collecting it in the kidneys, and carries 
                                it to the bladder. Acid of any kind forms no part in human economy. Acid’s 
                                original meaning is sharp and cutting which are the negatives of pleasant 
                                and attractive. Therefore too scale the heights and gain the balance, Venus 
                                must bid her son Cupid throw away his darts. 
                            </p>
                            <div className='quote'>
                                <p>
                                    “All Combat is ceaseth and it is santified. It is a symbol of 
                                    the point of balance and change reached in the soul’s development
                                     (sun’s course), when a line, as it were, is crossed and a new soul-process 
                                     is entered upon”
                                </p>
                                <p>
                                    - Dr. George W. Carey, The Cell Salts of Salvation
                                </p>
                            </div>
                            <div className='quote'>
                                <p>
                                    “Balance, measure, and patience are the eternal conditions of high success”
                                </p>
                                <p>
                                    - Matthew Arnol
                                </p>
                            </div>
                            <p>
                                FOOD SOURCES: Sea salt, red beets, lentils, radishes, tomatoes, dairy products, celery and celery seeds.
                            </p>
                            <h2>
                                ♏︎ Scorpio - Calcium Sulphate (Sulphate of Lime)
                            </h2>                            
                            <p>
                                Scorpio has been allocated with the organs of 
                                procreation, and that their use is solely for procreation. It is termed 
                                the VERY GATE OF HELL for it is the beginning of five dead cold months, 
                                and the act of sexual excesses or self-abuse, not only actually impairs
                                the activities of the five parts related to the remaining five zodiac 
                                signs. The White Eagle is the emblematical of the Divine promise of 
                                life everlasting to “him who overcometh.” Overcoming death, because
                                death cannot take place where there are sufficient corpuscles to
                                sustain life.
                            </p>
                            <div className='quote'>
                                <p>
                                    “Crab is actually changed into the scorpion. This means that 1/10s 
                                    of the corpuscles of the body (all of which rightfully belong to the body)
                                     under the vibration of the lower (carnal) mind, are attracted and drawn down 
                                     into the testes, and are changed into the animal germs or corpuscles.
                                    The truth is, if let alone (not lost), it will eventually go up. 
                                    For out of the serpent’s root shall come forth a cockatrice, and his 
                                    fruit shall be a fiery flying serpent”
                                </p>
                                <p>
                                    - Dr. George W. Carey, The Cell Salts of Salvation
                                </p>
                            </div>
                            <p>
                                FOOD SOURCES: Oats, almonds, cucumbers, lentils, peanuts, soybeans, cauliflower, 
                                onions, garlic, radishes, asparagus, celery, parsley, and green leafy vegetables.
                            </p>

                            <p>
                                Remaining five zodiacs coming soon...
                            </p>
                           
                            {/* <h2>
                                Conclusion
                            </h2>
                           
                          
                           


                            <h2>
                                Post-morteum thoughts:
                            </h2>
                          
                            <p>
                                Amen. 
                            </p> */}
                        </div>
                    </div>
            </div>
        </motion.div>
    <Footer/>
    </div>
  );
}

export default CellSalts;
