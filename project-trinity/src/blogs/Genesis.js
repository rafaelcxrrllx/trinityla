import '../styling/Genesis.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backArrow from '../assets/icons/arrow-back.svg'
import zodiac from '../assets/zodiac.jpg'
function Genesis() {


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
        className="blog-back-container">
            <div className='genesis-main-container'>
                <div className='title-container'>
                    <h1 id='title'>
                        Genesis: The Beginning and the End
                    </h1>
                </div>
                <Link id='item-link' to="/blog/genesis">
                    <div className='genesis-container'>
                        <div className='blog-text-container'>
                            <p>
                            <span className='start-letter'>
                                L
                            </span>
                            orem ipsum dolor sit amet consectetur. Pellentesque facilisis gravida odio semper turpis scelerisque sit. Cursus vulputate vel purus ac pretium. Condimentum lorem mollis nunc fermentum lacinia. Pellentesque nam pretium urna quis sed metus. Scelerisque metus tellus quam in euismod mollis. Vel sed tellus et accumsan interdum mi mattis. Morbi et morbi vitae diam placerat egestas mauris sed. Id risus at cras diam mi in porta. Pharetra ut ornare sagittis turpis tincidunt donec ultrices. Ultrices mauris orci non sit eget accumsan ut accumsan.
                            Ut urna neque morbi enim fermentum morbi. Porta luctus et eget massa lectus commodo. Aliquam porta lorem nisi sagittis mi purus sagittis libero. Scelerisque ut quis dignissim id tortor sed volutpat. Mauris dictumst nulla orci auctor fringilla nulla elit. Mollis habitant magna pulvinar leo vestibulum semper sit neque commodo. Venenatis bibendum maecenas mi amet sagittis ut cursus cursus.
                            Feugiat vitae sed a ultricies sapien imperdiet sed lacus. Eleifend nisl aenean ac velit morbi. Nibh turpis ut aliquet ullamcorper bibendum in pharetra. Et libero lacus tincidunt posuere. Massa risus quam neque proin. Eu mauris ut magna amet nisl fermentum netus. Massa amet nunc ullamcorper et sed ultrices. Nec mattis eu id in diam pellentesque at aliquam sem. Cras diam semper nibh fames turpis hendrerit aliquam.
                            </p>
                            <h3>
                                Title
                            </h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur. Pellentesque facilisis gravida odio semper turpis scelerisque sit. Cursus vulputate vel purus ac pretium. Condimentum lorem mollis nunc fermentum lacinia. Pellentesque nam pretium urna quis sed metus. Scelerisque metus tellus quam in euismod mollis. Vel sed tellus et accumsan interdum mi mattis. Morbi et morbi vitae diam placerat egestas mauris sed. Id risus at cras diam mi in porta. Pharetra ut ornare sagittis turpis tincidunt donec ultrices. Ultrices mauris orci non sit eget accumsan ut accumsan.
                            Ut urna neque morbi enim fermentum morbi. Porta luctus et eget massa lectus commodo. Aliquam porta lorem nisi sagittis mi purus sagittis libero. Scelerisque ut quis dignissim id tortor sed volutpat. Mauris dictumst nulla orci auctor fringilla nulla elit. Mollis habitant magna pulvinar leo vestibulum semper sit neque commodo. Venenatis bibendum maecenas mi amet sagittis ut cursus cursus.
                            Feugiat vitae sed a ultricies sapien imperdiet sed lacus. Eleifend nisl aenean ac velit morbi. Nibh turpis ut aliquet ullamcorper bibendum in pharetra. Et libero lacus tincidunt posuere. Massa risus quam neque proin. Eu mauris ut magna amet nisl fermentum netus. Massa amet nunc ullamcorper et sed ultrices. Nec mattis eu id in diam pellentesque at aliquam sem. Cras diam semper nibh fames turpis hendrerit aliquam.
                            </p>
                            <div className='blog-img'>
                                <img src={zodiac}  alt="zodiac wheel"/>
                            </div>
                            <div className='quote'>
                                <h2>
                                "Lorem ipsum dolor sit amet consectetur. Pellentesque facilisis gravida odio semper turpis scelerisque sit."
                                </h2>
                                <p>
                                    - Anonymous
                                </p>
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet consectetur. Pellentesque facilisis gravida odio semper turpis scelerisque sit. Cursus vulputate vel purus ac pretium. Condimentum lorem mollis nunc fermentum lacinia. Pellentesque nam pretium urna quis sed metus. Scelerisque metus tellus quam in euismod mollis. Vel sed tellus et accumsan interdum mi mattis. Morbi et morbi vitae diam placerat egestas mauris sed. Id risus at cras diam mi in porta. Pharetra ut ornare sagittis turpis tincidunt donec ultrices. Ultrices mauris orci non sit eget accumsan ut accumsan.
                            Ut urna neque morbi enim fermentum morbi. Porta luctus et eget massa lectus commodo. Aliquam porta lorem nisi sagittis mi purus sagittis libero. Scelerisque ut quis dignissim id tortor sed volutpat. Mauris dictumst nulla orci auctor fringilla nulla elit. Mollis habitant magna pulvinar leo vestibulum semper sit neque commodo. Venenatis bibendum maecenas mi amet sagittis ut cursus cursus.
                            Feugiat vitae sed a ultricies sapien imperdiet sed lacus. Eleifend nisl aenean ac velit morbi. Nibh turpis ut aliquet ullamcorper bibendum in pharetra. Et libero lacus tincidunt posuere. Massa risus quam neque proin. Eu mauris ut magna amet nisl fermentum netus. Massa amet nunc ullamcorper et sed ultrices. Nec mattis eu id in diam pellentesque at aliquam sem. Cras diam semper nibh fames turpis hendrerit aliquam.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </motion.div>
    <Footer/>
    </div>
  );
}

export default Genesis;
