import { useState, useEffect} from 'react'
import axios from './axios'
import { Navigate,Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { BookingPage } from './pages/BookingPage'
import TourDetailPage from './pages/TourDetailPage'
import { AboutPage } from './pages/AboutPage'

export  function App() {

  const [currentLanguage, setCurrentLanguage] = useState('am');
  const [navbar, setNavbar] = useState([]);
  const [footer, setFooter] = useState([]);
  

  useEffect(() => {
    if (!localStorage.getItem('shelby-Language')) {
      localStorage.setItem('shelby-Language', 'en');
    }
    
    loadingData();
    setCurrentLanguage(localStorage.getItem('shelby-Language'));
  }, [currentLanguage])

  async function loadingData() {
    const navbarData = await axios.get(`navbar?lang=${currentLanguage}`);
    setNavbar(navbarData.data);
    const footerData = await axios.get(`footer?lang=${currentLanguage}`);
    setFooter(footerData.data);
  }

  return (
    <div className='App'>
      <Header navbar={navbar}/>

        <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/booking' element={<BookingPage/>} />
          <Route path='/booking/:id' element={<TourDetailPage />} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </main>

      <Footer footer={footer}/>
    </div>
  )
}

