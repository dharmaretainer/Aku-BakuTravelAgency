import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Destinations from './components/Destinations/destinations'
import Packages from './components/Packages/packages'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Destinations" element={<Destinations />} />
            <Route path="/packages" element={<Packages />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
