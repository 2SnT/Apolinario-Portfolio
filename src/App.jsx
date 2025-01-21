import { useState } from 'react'
import './App.css'

function App() {
  const [buttonText, setButtonText] = useState("More.");

  const changeButtonText = () => {
    setButtonText("To be continue...");
  };

  return (
    <>
      <header>
        <p>Welcome to My Portfolio</p>
        <h1>Shayne Apolinario</h1>
        <nav>
          <ul>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>Skills</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>About Me</h2>
          <p>Hello! I am an aspiring developer currently learning and exploring how to build impactful web applications.</p>
        </section>

        <section>
          <h2>Skills</h2>
          <p>HTML, CSS, JavaScript, </p>
        </section>

        <section>
          <h2>My Projects</h2>
          <ul>
            <li>
              <strong>Project 1:</strong> E-commerce Website - SupplyEase
              <p>An online store with a shopping cart and payment gateway.</p>
            </li>

          </ul>
        </section>

        <section>
          <h2>Contact Me</h2>
          <p>Email: shayneapolinario35@gmail.com</p>
          <p>Phone: 0997 298 8300</p>
          <p>Address: Zamboanga City</p>
        </section>
      </main>

      <button onClick={changeButtonText}>
        {buttonText}
      </button>

      <footer>
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
