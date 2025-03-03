import { useState } from 'react'
import "./styles/main.css";

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>

    <Navbar />

    <Home />

    <Footer />
    </div>
  )
}

export default App
