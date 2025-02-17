import { NavLink } from 'react-router-dom'

const Hero = () => {
    return (

        <div className='image-container'>
            <div className='hero-container'>
                <nav className='navbar'>
                    <ul className="navbar-links">
                        <li><NavLink to="/about"> About </NavLink></li>
                        <li><NavLink to="/projects"> Projects </NavLink></li>
                        <li><NavLink to="/contact"> Contact </NavLink></li>
                    </ul>
                </nav>
            </div>

            <div className='hero-content'>
                <h1>Shayne Apolinario</h1>
                <h3>Web Developer</h3>
                <p>Hello! I am an aspiring developer currently learning and exploring how to build impactful web applications.</p>


            </div>
        </div>
    )
}

export default Hero