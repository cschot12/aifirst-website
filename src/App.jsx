import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Moon, Sun, Menu, X, Users, Rocket, Target, Lightbulb, TrendingUp, Shield, Mail, Phone, MapPin, ArrowRight, Check, Zap, Brain, Code, Database, Award } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'

import BlogPage from './pages/BlogPage.jsx'
import BlogPostPage from './pages/BlogPostPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import HomePage from './pages/HomePage.jsx'


import heroImage from './assets/hero-friday.jpg'
import servicesImage from './assets/services-unique.jpg'
import aboutImage from './assets/about-unique.jpg'
import logoFull from './assets/aifirst-logo-full-color.png'
import logoDark from './assets/aifirst-logo-dark-bg.png'
import logoIcon from './assets/aifirst-icon-only.png'

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  )
}

function MainApp() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode, location])

  useEffect(() => {
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className="min-h-screen">
      <Navigation 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:postId" element={<BlogPostPage />} />
      </Routes>

      <Footer darkMode={darkMode} />
    </div>
  )
}

function Navigation({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'nav-blur shadow-lg py-3' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={darkMode ? logoDark : logoFull} 
              alt="AI First" 
              className="h-16 transition-transform group-hover:scale-110"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Inicio</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">Nosotros</Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">Servicios</Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-medium">Blog</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">Contacto</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <Button asChild className="hidden md:inline-flex gradient-bg-first border-0">
              <Link to="/contact">Comenzar</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden nav-blur border-t border-border mt-3"
        >
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link to="/" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">Inicio</Link>
            <Link to="/about" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">Nosotros</Link>
            <Link to="/services" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">Servicios</Link>
            <Link to="/blog" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">Blog</Link>
            <Link to="/contact" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">Contacto</Link>
            <Button asChild className="w-full gradient-bg-first border-0">
              <Link to="/contact">Comenzar</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

function Footer({ darkMode }) {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src={darkMode ? logoDark : logoFull} 
              alt="AI First" 
              className="h-10 mb-4"
            />
            <p className="text-muted-foreground text-sm">
              Ponemos la IA primero para transformar tu negocio con soluciones innovadoras.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">Nosotros</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Servicios</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">Estrategia IA</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Desarrollo Custom</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Machine Learning</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Capacitación</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hola@aifirst.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+59 9761 93 937</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Santiago, Chile</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 AI First. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default App
