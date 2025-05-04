import { FaCode, FaBookOpen, FaHeart, FaCoffee, FaPlane, FaGamepad } from "react-icons/fa"
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiCanva, SiAdobephotoshop, SiAdobeillustrator, SiAdobelightroom } from "react-icons/si";
import { motion } from "framer-motion"
import "./AboutMe.css"
import Navbar from "../components/NavBar"
import myPhoto from "../assets/myPhoto.jpg"

const AboutMe = () => {
    const skills = [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <SiReact /> },
        { name: "Canva", icon: <SiCanva /> },
        { name: "Photoshop", icon: <SiAdobephotoshop /> },
        { name: "Illustrator", icon: <SiAdobeillustrator /> },
        { name: "Lightroom", icon: <SiAdobelightroom /> },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="about-container">
                {/* Introduction Section */}
                <section className="section">
                    <h1 className="title">About Me</h1>
                    <div className="intro-container">
                        <motion.div
                            className="photo-container"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <img className="profile-photo" src={myPhoto} alt="My Professional Photo" />
                        </motion.div>

                        <div className="intro-text-container">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <p>Hello! I am Shayne Ebol Apolinario, a passionate web developer and designer in the making.
                                    Currently, I'm a student exploring the connection between design and technology,
                                    striving to create beautiful and easy-to-use digital experiences.</p>
                            </motion.div>
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
                                    {skill.icon} {skill.name}
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
            </div>
        </div>
    )
}

export default AboutMe
