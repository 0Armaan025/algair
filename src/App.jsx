import { useState } from 'react'
import './App.css'
import Home from './sections/Home'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import HowItWorks from './sections/HowItWorks'
import Technology from './sections/Technology'
import Features from './sections/Features'
import Future from './sections/Future'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const sections = {
    home: <Home />,
    problem: <Problem />,
    solution: <Solution />,
    how: <HowItWorks />,
    technology: <Technology />,
    features: <Features />,
    future: <Future />
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-text">ALGAIR</div>
          <ul className="nav-links">
            <li><button onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''}>ALGAIR</button></li>
            <li><button onClick={() => setActiveSection('problem')} className={activeSection === 'problem' ? 'active' : ''}>Problem</button></li>
            <li><button onClick={() => setActiveSection('solution')} className={activeSection === 'solution' ? 'active' : ''}>Solution</button></li>
            <li><button onClick={() => setActiveSection('how')} className={activeSection === 'how' ? 'active' : ''}>How It Works</button></li>
            <li><button onClick={() => setActiveSection('technology')} className={activeSection === 'technology' ? 'active' : ''}>Technology</button></li>
            <li><button onClick={() => setActiveSection('features')} className={activeSection === 'features' ? 'active' : ''}>Features</button></li>
            <li><button onClick={() => setActiveSection('future')} className={activeSection === 'future' ? 'active' : ''}>Future</button></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        {sections[activeSection]}
      </main>

      <footer className="footer">
        <p>&copy; 2024 ALGAIR. Engineering nature into cleaner mobility.</p>
      </footer>
    </div>
  )
}

export default App
