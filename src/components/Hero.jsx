import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavBar from './NavBar';
import myImage from "/src/assets/ME.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
    const fullText = "Hello! I am an aspiring developer currently learning and exploring how to build impactful web applications.";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + fullText.charAt(index));
                setIndex(prev => prev + 1);
            }, 15); // Typing speed (adjust if needed)
            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

    return (
        <header>
            <NavBar />
            <main className='hero'>
                <div className='mask'>
                    <img className='myImage' src={myImage} alt="myImage" />
                </div>

                <div className='hero-content'>
                    <motion.h2
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 5 }}
                        className="glowing-text"
                    >
                        Shayne Apolinario
                    </motion.h2>

                    <motion.h3
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3, delay: 0.3 }}
                    >
                        Web Developer
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="typing"
                    >
                        {displayedText}<span className="cursor">|</span>
                    </motion.p>

                    <div>
                        <Link to="/about" className="btn">Explore My Portfolio</Link>
                    </div>
                </div>
            </main>
        </header>
    )
}

export default Hero;
