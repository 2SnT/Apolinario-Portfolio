import Navbar from "../components/NavBar"
import "./Blog.css"

const Blog = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <section className="blog-intro-container">
                <div className="intro-text-container">
                    <h1 className="title">Welcome to My Blog</h1>
                    <p>
                        <p>
                            Welcome to my Industry Visit blog! Here, I document the experiences, insights, and memorable moments from our educational tour. 
                            Dive into the highlights, reflections, and learnings that shaped this exciting journey.
                        </p>

                    </p>
                    <div className="buttons-wrapper">
                        <a href="https://industry-visit.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="contact-button blog-button">
                                Visit my Blog
                            </button>
                        </a>
                    </div>
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
