import './App.css'

import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'

import HomePage from './pages/HomePage/home'
import LoadingPage from './pages/LoadingPage/loading'
import ProjectPage from './pages/ProjectPage/project'
import ContactPage from './pages/ContactPage/contact'
import ResumePage from './pages/ResumePage/resume'
import NotFoundPage from './pages/NotFoundPage/notfound'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import SkillsPage from './pages/SkillsPage/skills'

function App() {
  const ui = useSelector((state) => state.ui)
  console.log(ui.language)
  localStorage.setItem('LanguageSaeedPortfolio' ,ui.language)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1400)
  }, [])

  return (
    <>
      <BrowserRouter>
        {isLoading ? <LoadingPage />
          : (
          <>
            <Header />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/project' element={<ProjectPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/resume' element={<ResumePage />} />
              <Route path='/skills' element={<SkillsPage />} />
              <Route path='/*' element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </>
          )
        }
      </BrowserRouter>
    </>
  )
}

export default App
