import Navbar from "../components/NavBar"
import { Link } from "react-router-dom"
import "./Blog.css"

const Blog = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <section className="blog-intro-container">
                <div className="intro-text-container">
                    <h1 className="title">Welcome to My Blog</h1>
                    <p>
                        Step into my world of creativity, code, and curiosity. Here, I share my thoughts on front-end development, personal projects, creative tips, and life experiences that shape my journey.
                    </p>
                    <Link to="/blog/posts">
                        <button className="contact-button blog-button">
                            Visit my Blog
                        </button>
                    </Link>
                </div>
                {/* <div className="photo-container">
                    <img
                        src="/assets/blog-preview.jpg"
                        alt="Blog Preview"
                        className="profile-photo"
                    />
                </div> */}
            </section>
        </div>
    )
}

export default Blog
