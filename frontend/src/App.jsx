import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-[#0b1c30]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App