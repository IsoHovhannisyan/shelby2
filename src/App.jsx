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

  const currentLanguage = localStorage.getItem('shelby-Language') || 'en';
  const [navbar, setNavbar] = useState([]);
  const [footer, setFooter] = useState([]);
  

  useEffect(() => {
    loadingData();
  }, [currentLanguage])

  async function loadingData() {
    const navbarData = await axios.get(`navbar?lang=${currentLanguage}`);
    setNavbar(navbarData.data);
    const footerData = await axios.get(`footer?lang=${currentLanguage}`);
    setFooter(footerData.data);
  }

  return (
    <div className='App'>
      <Header navbar={navbar} currentLanguage={currentLanguage}/>

        <main>
        <Routes>
          <Route path='/' element={<HomePage currentLanguage={currentLanguage}/>} />
          <Route path='/booking' element={<BookingPage currentLanguage={currentLanguage}/>} />
          <Route path='/booking/:id' element={<TourDetailPage currentLanguage={currentLanguage}/>} />
          <Route path='/about' element={<AboutPage currentLanguage={currentLanguage}/>}  />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </main>

      <Footer footer={footer} currentLanguage={currentLanguage}/>
    </div>
  )
}

