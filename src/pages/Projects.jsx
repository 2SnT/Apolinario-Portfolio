import { useState } from "react";
import { FaLaptopCode, FaCalendarWeek, FaCertificate, FaImages } from "react-icons/fa";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import "./Projects.css";

// Development Experience
import portal from "../assets/projects/EEPortal.png";
import schedlr from "../assets/projects/Schedlr.png";

// Weekly Projects
import scical from "../assets/projects/ScientificCalculator.png";
import pokedex from "../assets/projects/Pokedex.png"

// Certificates
import cert1 from "../assets/certificates/cert1.png"
import cert2 from "../assets/certificates/cert2.png"
import cert3 from "../assets/certificates/cert3.png"
import cert4 from "../assets/certificates/cert4.png"
import cert5 from "../assets/certificates/cert5.png"
import cert6 from "../assets/certificates/cert6.png"
import cert7 from "../assets/certificates/cert7.png"
import cert8 from "../assets/certificates/cert8.png"
import cert9 from "../assets/certificates/cert9.png"
import cert10 from "../assets/certificates/cert10.png"
import cert11 from "../assets/certificates/cert11.png"
import cert12 from "../assets/certificates/cert12.png"
import cert13 from "../assets/certificates/cert13.png"
import cert14 from "../assets/certificates/cert14.png"
import cert15 from "../assets/certificates/cert15.png"
import cert16 from "../assets/certificates/cert16.png"
import cert17 from "../assets/certificates/cert17.png"
import cert18 from "../assets/certificates/cert18.png"
import cert19 from "../assets/certificates/cert19.png"
import cert20 from "../assets/certificates/cert20.png"
import cert21 from "../assets/certificates/cert21.png"
import cert22 from "../assets/certificates/cert22.png"
import cert23 from "../assets/certificates/cert23.png"
import cert24 from "../assets/certificates/cert24.png"
import cert25 from "../assets/certificates/cert25.png"
import cert26 from "../assets/certificates/cert26.png"
import cert27 from "../assets/certificates/cert27.png"
import cert28 from "../assets/certificates/cert28.png"
import cert29 from "../assets/certificates/cert29.png"
import cert30 from "../assets/certificates/cert30.png"
import cert31 from "../assets/certificates/cert31.png"

// Graphics
import digiCol from "../assets/graphics/DigitalCollage.png"
import adPost from "../assets/graphics/AdvocacyPoster.png"
import sportPost from "../assets/graphics/SportPoster.png"
import typoArt from "../assets/graphics/TypographyArt.png"
import logoP from "../assets/graphics/ZenCreationsP.png"
import logoS from "../assets/graphics/ZenCreationsS.png"
import logoM from "../assets/graphics/ZenCreationsM.png"
import logoF from "../assets/graphics/ZenCreationsF.png"
import apron from "../assets/graphics/Apron.png"
import tshirt from "../assets/graphics/TShirt.png"
import sshirt from "../assets/graphics/SweatShirt.png"
import pshirt from "../assets/graphics/PoloShirt.png"
import PhotoAction from "../assets/graphics/Action.jpg"
import PhotoFraming from "../assets/graphics/Framing.jpg"
import PhotoGolden from "../assets/graphics/Golden.jpg"
import PhotoOdds from "../assets/graphics/Odds.jpg"
import PhotoSpace from "../assets/graphics/Space.jpg"
import PhotoThird from "../assets/graphics/Third.jpg"
import PhotoViewpoint from "../assets/graphics/Viewpoint.jpg"


const Projects = () => {
    const [activeSection, setActiveSection] = useState("Experience");

    const sections = {
        Experience: {
            icon: <FaLaptopCode />,
            label: "Development Experience",
            title: "Development Experience",
            content: (
                <div className="experience-cards-container">
                    {[
                        {
                            image: schedlr,
                            title: "Schedlr",
                            description: "Schedlr is an effective scheduling solution.",
                            role: "System Analyst",
                            duration: "Jan 2023 - April 2023"
                        },
                        {
                            image: portal,
                            title: "Chronologix - EE Portal",
                            description: "Chronologix created the Environmental Engineering Portal.",
                            role: "System Analyst",
                            duration: "Jan 2024 - Present"
                        },
                        {
                            image: portal,
                            title: "SupplyEase",
                            description: "SupplyEase is an intuitive e-commerce platform.",
                            role: "System Analyst and Front End",
                            duration: "Jan 2024 - Present"
                        }
                    ].map((exp, index) => (
                        <motion.div
                            className="experience-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img src={exp.image} alt={exp.title} className="experience-image" />
                            <div className="experience-content">
                                <h3>{exp.title}</h3>
                                <p>{exp.description}</p>
                                <p><strong>Role:</strong> {exp.role}</p>
                                <p><strong>Duration:</strong> {exp.duration}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )
        },
        WeeklyProjects: {
            icon: <FaCalendarWeek />,
            label: "Weekly Projects",
            title: "Weekly Projects",
            content: (
                <div className="card-grid">
                    <div className="card">
                        <img src={scical} alt="Scientific Calculator" />
                        <h3>Scientific Calculator</h3>
                        <p>A fully functional scientific calculator with advanced mathematical operations, history tracking, and theme customization.</p>
                        <div className="card-links">
                            <a href="https://github.com/2SnT/scientific-calculator" target="_blank" rel="noreferrer">
                                <FaGithub size={20} style={{ marginRight: '8px' }} />
                                GitHub
                            </a>
                            <a href="https://ali-apolinario-sci-cal.netlify.app/" target="_blank" rel="noreferrer">
                                <FaExternalLinkAlt size={20} style={{ marginRight: '8px' }} />
                                Live Demo
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={pokedex} alt="Pokedex" />
                        <h3>Pokedex</h3>
                        <p>An interactive Pokédex showcasing Pokémon stats, types, and abilities with real-time data and clean visuals.</p>

                        <div className="card-links">
                            <a href="https://github.com/2SnT/pokedex" target="_blank" rel="noreferrer">
                                <FaGithub size={20} style={{ marginRight: '8px' }} />
                                GitHub
                            </a>
                            <a href="https://pokedex-ali-apolinario.netlify.app" target="_blank" rel="noreferrer">
                                <FaExternalLinkAlt size={20} style={{ marginRight: '8px' }} />
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            )
        },
        Certificates: {
            icon: <FaCertificate />,
            label: "Certificates",
            title: "Certificates",
            content: (
                <div className="certificates-grid">
                    {/* Certificate Item */}
                    {[
                        {
                            title: "Introduction to Cyber Security",
                            href: "https://simpli-web.app.link/e/pgy4rVcd5Sb",
                            src: cert1,
                            hours: "2 hours"
                        },
                        {
                            title: "ReactJS for Beginners",
                            href: "https://simpli-web.app.link/e/ZvzJcfog5Sb",
                            src: cert2,
                            hours: "6 hours"
                        },
                        {
                            title: "Introduction to Cloud Security",
                            href: "https://simpli-web.app.link/e/9b32VSwg5Sb",
                            src: cert3,
                            hours: "7 hours"
                        },
                        {
                            title: "Introduction to Front End Development",
                            href: "https://simpli-web.app.link/e/7qFtTvIg5Sb",
                            src: cert4,
                            hours: "12 hours"
                        },
                        {
                            title: "Introduction to the Computer Networking",
                            href: "https://simpli-web.app.link/e/CUUhzbTg5Sb",
                            src: cert5,
                            hours: "3 hours"
                        },
                        {
                            title: "PMP Basics",
                            href: "https://simpli-web.app.link/e/AyL6Y1fh5Sb",
                            src: cert6,
                            hours: "9 hours"
                        },
                        {
                            title: "Ethical Hacking 101",
                            href: "https://simpli-web.app.link/e/JyvOjtnh5Sb",
                            src: cert7,
                            hours: "2 hours"
                        },
                        {
                            title: "Web Development for Beginners",
                            href: "https://simpli-web.app.link/e/FG8Jviuh5Sb",
                            src: cert8,
                            hours: "4 hours"
                        },
                        {
                            title: "Introduction to Data Science",
                            href: "https://simpli-web.app.link/e/pUIsGgDh5Sb",
                            src: cert9,
                            hours: "7 hours"
                        },
                        {
                            title: "Introduction to DevOps Tools",
                            href: "https://simpli-web.app.link/e/YqKAN3Ih5Sb",
                            src: cert10,
                            hours: "8 hours"
                        },
                        {
                            title: "Python for Beginners",
                            href: "https://simpli-web.app.link/e/yE9c2ERh5Sb",
                            src: cert11,
                            hours: "11 hours"
                        },
                        {
                            title: "Introduction to Machine Learning with R",
                            href: "https://simpli-web.app.link/e/c3cCyFZh5Sb",
                            src: cert12,
                            hours: "10 hours"
                        },
                        {
                            title: "Introduction to HTML",
                            href: "https://simpli-web.app.link/e/AzM1iI6h5Sb",
                            src: cert13,
                            hours: "6 hours"
                        },
                        {
                            title: "Introduction to MongoDB",
                            href: "https://simpli-web.app.link/e/3COE6vdi5Sb",
                            src: cert14,
                            hours: "5 hours"
                        },
                        {
                            title: "Introduction to C#",
                            href: "https://simpli-web.app.link/e/LINTfali5Sb",
                            src: cert15,
                            hours: "8 hours"
                        },
                        {
                            title: "Introduction to C++",
                            href: "https://simpli-web.app.link/e/0rEWa7ri5Sb",
                            src: cert16,
                            hours: "6 hours"
                        },
                        {
                            title: "Generative AI for Beginners",
                            href: "https://simpli-web.app.link/e/5SMpJRxi5Sb",
                            src: cert17,
                            hours: "4 hours"
                        },
                        {
                            title: "Introduction to Supervised & Unsupervised Machine Learning",
                            href: "https://simpli-web.app.link/e/yTDznxDi5Sb",
                            src: cert18,
                            hours: "6 hours"
                        },
                        {
                            title: "JavaScript for Beginners",
                            href: "https://simpli-web.app.link/e/mgnQeSLi5Sb",
                            src: cert19,
                            hours: "5 hours"
                        },
                        {
                            title: "Introduction to Data Visualization",
                            href: "https://simpli-web.app.link/e/dDhymeTi5Sb",
                            src: cert20,
                            hours: "9 hours"
                        },
                        {
                            title: "Introduction to Android Studio Course",
                            href: "https://simpli-web.app.link/e/vemIPd0i5Sb",
                            src: cert21,
                            hours: "2 hours"
                        },
                        {
                            title: "Programming Fundamentals",
                            href: "https://simpli-web.app.link/e/F8HIU36i5Sb",
                            src: cert22,
                            hours: "5 hours"
                        },
                        {
                            title: "Introduction to SQL",
                            href: "https://simpli-web.app.link/e/KyDFfYzj5Sb",
                            src: cert23,
                            hours: "7 hours"
                        },
                        {
                            title: "Introduction to the Fundamentals of Databases",
                            href: "https://simpli-web.app.link/e/qJA74HQj5Sb",
                            src: cert24,
                            hours: "7 hours"
                        },
                        {
                            title: "Java Programming for Beginners",
                            href: "https://simpli-web.app.link/e/CyJAQi2j5Sb",
                            src: cert25,
                            hours: "4 hours"
                        },
                        {
                            title: "Introduction to CSS",
                            href: "https://simpli-web.app.link/e/v3uCdD8j5Sb",
                            src: cert26,
                            hours: "3 hours"
                        },
                        {
                            title: "Introduction to PHP",
                            href: "https://simpli-web.app.link/e/beoIRlek5Sb",
                            src: cert27,
                            hours: "7 hours"
                        },
                        {
                            title: "Fundamentals of Data Structures in C",
                            href: "https://simpli-web.app.link/e/9X44lekk5Sb",
                            src: cert28,
                            hours: "10 hours"
                        },
                        {
                            title: "Advanced Python",
                            href: "https://simpli-web.app.link/e/ZCH1WGxk5Sb",
                            src: cert29,
                            hours: "10 hours"
                        },
                        {
                            title: "Full Stack Java Development",
                            href: "https://simpli-web.app.link/e/IOCkz17u6Sb",
                            src: cert30,
                            hours: "12 hours"
                        },
                        {
                            title: "Introduction to Computer-Networking",
                            href: "https://simpli-web.app.link/e/2HTcNlkv6Sb",
                            src: cert31,
                            hours: "6 hours"
                        },
                    ].map((cert, index) => (
                        <div className="certificate-wrapper" key={index}>
                            <a href={cert.href} target="_blank" rel="noreferrer">
                                <img
                                    src={cert.src}
                                    alt={cert.title}
                                    className="certificate-image"
                                />
                                <div className="certificate-info">
                                    <p className="certificate-title">{cert.title}</p>
                                    <p className="certificate-hours">{cert.hours}</p>
                                </div>
                                <div className="preview">
                                    <img src={cert.src} alt={`Preview of ${cert.title}`} />
                                    <div className="certificate-info">
                                        <p className="certificate-title">{cert.title}</p>
                                        <p className="certificate-hours">{cert.hours}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

            )
        },
        Graphics: {
            icon: <FaImages />,
            label: "Graphics",
            title: "Graphics",
            content: (
                <motion.div
                    className="image-grid"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {[digiCol, sportPost, typoArt, adPost, logoP, apron, tshirt, sshirt, pshirt,
                        PhotoAction, PhotoFraming, PhotoSpace, PhotoGolden, PhotoOdds, PhotoThird, PhotoViewpoint].map((img, index) => (
                            <motion.img
                                src={img}
                                alt={`Graphic ${index + 1}`}
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            />
                        ))}
                </motion.div>
            )
        }
    };

    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="projects-container">
                <motion.section
                    className="sticky-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="title">Projects</h1>
                    <p className="subtitle">Explore the different projects I have worked on</p>
                    <div className="scroll-nav">
                        {Object.entries(sections).map(([key, section]) => (
                            <button
                                key={key}
                                className={activeSection === key ? "active" : ""}
                                onClick={() => setActiveSection(key)}
                            >
                                {section.icon} <span className="btn-label">{section.label}</span>
                            </button>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    key={activeSection}
                    className="project-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="section-title">{sections[activeSection].title}</h2>
                    <div className="section-content">{sections[activeSection].content}</div>
                </motion.section>
            </div>
        </div>
    );
};

export default Projects;
