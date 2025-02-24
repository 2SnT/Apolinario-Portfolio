import React from 'react'
import NavBar from './NavBar'
//import "./Hero.css"
import myImage from "/src/assets/ME.jpg";
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <header>
            <NavBar />

            <main className='hero'>
                <div className='mask'>
                    <img className='myImage' src={myImage} alt="myImage" />
                </div>

                <div className='hero-content'>

                    <h2>Shayne Apolinario</h2>
                    <h3>Web Developer</h3>
                    <p>Hello! I am an aspiring developer currently learning and exploring how to build impactful web applications.</p>

                    <div>
                        <Link to="/about" className="btn">Explore My Portfolio</Link>
                        {/* <Link to="/projects" className='btn'>Projects</Link>
                        <Link to="/contact" className='btn btn-light'>Contact</Link> */}
                    </div>

                </div>
            </main>

        </header>
    )
}

export default Hero
