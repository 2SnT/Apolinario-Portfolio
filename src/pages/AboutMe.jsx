import { FaCode, FaBookOpen, FaHeart, FaEnvelope, FaPhone, FaCoffee, FaPlane, FaGamepad } from "react-icons/fa"

import "./AboutMe.css"
import Navbar from "../components/NavBar"
import myPhoto from "../assets/myPhoto.jpg"

const AboutMe = () => {
    const skills = ["HTML", "CSS", "JavaScript", "React"]

    return (

        <div className="page-wrapper">
            <Navbar />

            <div className="about-container">
                {/* Introduction Section */}
                <section className="section">
                    <h1 className="title">About Me</h1>
                    <div className="intro-container">
                        <div className="photo-container">
                            <img className='profile-photo' src={myPhoto} alt="My Professional Photo" />
                        </div>

                        <div className="intro-text-container">
                            <p>
                                Hello! I am Shayne Ebol Apolinario, a passionate web developer and designer in the making.
                                Currently, I'm a student exploring the connection between design and technology,
                                striving to create beautiful and easy-to-use digital experiences.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="section">
                    <h2 className="section-title">
                        <FaCode className="icon" />
                        My Skills
                    </h2>
                    <div className="skills-container">
                        <div className="skills-list">
                            {skills.map((skill, index) => (
                                <span key={index} className="skill-item">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Goals Section */}
                <section className="section">
                    <h2 className="section-title">
                        <FaBookOpen className="icon" />
                        Career Goals
                    </h2>
                    <div className="goals-container">
                        <ul className="goals-list">
                            <li>
                                <FaHeart />
                                Become a successful and skilled developer
                            </li>
                            <li>
                                <FaHeart />
                                Create helpful web applications
                            </li>
                            <li>
                                <FaHeart />
                                Learn new programming languages
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Personal Section */}
                <section className="section">
                    <h2 className="section-title">
                        <FaHeart className="icon" />
                        Personal Interests
                    </h2>
                    <div className="personal-grid">
                        {/* Fun Fact Card */}
                        <div className="personal-card">
                            <h3 className="card-title">
                                <FaCoffee />
                                Fun Fact
                            </h3>
                            <p>I love solving puzzles and brain teasers!</p>
                        </div>

                        {/* Travel Card */}
                        <div className="personal-card">
                            <h3 className="card-title">
                                <FaPlane />
                                Travel
                            </h3>
                            <p>I enjoy exploring new places and cultures.</p>
                        </div>

                        {/* Hobbies Card */}
                        <div className="personal-card">
                            <h3 className="card-title">
                                <FaGamepad />
                                Hobbies
                            </h3>
                            <p>Gaming, reading, watching videos, editing photos and videos, and learning new things.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="section contact-section">
                    <h2 className="section-title">Let's Connect!</h2>
                    <p className="contact-text">
                        I'm always happy to connect with developers, clients, or anyone interested in web development. Feel free to reach out!
                    </p>

                    {/* Displayed Contact Info (Static) */}
                    <div className="contact-info">
                        <p><FaEnvelope /> shayneapolinario35@gmail.com</p>
                        <p><FaPhone /> 09972988300</p>
                    </div>

                    {/* Clickable Buttons (CTA)
                    <div className="contact-buttons">
                        <button className="contact-button" onClick={() => window.open("mailto:shayneapolinario35@gmail.com", "_self")}>
                            <FaEnvelope /> Email Me
                        </button>
                        <button className="contact-button" onClick={() => window.open("tel:09972988300", "_self")}>
                            <FaPhone /> Call Me
                        </button>
                    </div> */}
                </section>
            </div>
        </div>
    )
}

export default AboutMe

