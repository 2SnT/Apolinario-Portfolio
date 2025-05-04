import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Contact.css";
import Navbar from "../components/NavBar";

const Contact = () => {
    return (
        <div className="page-wrapper">
            <Navbar />

            <div className="about-container">
                {/* Introduction Section */}
                <section className="section">
                    <h1 className="title">Contact Information</h1>
                </section>

                {/* Contact Section */}
                <section className="section contact-section">
                    <h2 className="section-title">Let's Connect!</h2>
                    <p className="contact-text">
                        I'm always happy to connect with developers, clients, or anyone interested in web development. Feel free to reach out!
                    </p>
                    <div className="infos">
                        {/* Displayed Contact Info (Static) */}
                        <div className="contact-info">
                            <p><FaEnvelope /> shayneapolinario35@gmail.com</p>
                            <p><FaPhone /> 09972988300</p>
                            <p><FaMapMarkerAlt /> Zamboanga City, Philippines</p>
                        </div>

                        {/* Social Media Links */}
                        <div className="social-icons">
                            <a href="www.linkedin.com/in/shayne-apolinario-732b0b361" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://github.com/2SnT" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://www.facebook.com/share/198dGsgU99/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href="https://www.instagram.com/shayneapolinario_16?igsh=MWlzNXZ3emQxemNwdA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
