import { FaEnvelope, FaPhone } from "react-icons/fa"
import "./Contact.css"
import Navbar from "../components/NavBar"

const Contact = () => {

    return (
        <div className="page-wrapper">
            <Navbar />

            <div className="about-container">
                {/* Introduction Section */}
                <section className="section">
                    <h1 className="title">Let's Connect!</h1>
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

export default Contact

