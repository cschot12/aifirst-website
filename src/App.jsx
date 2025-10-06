import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Moon, Sun, Menu, X, Users, Rocket, Target, Lightbulb, TrendingUp, Shield, Mail, Phone, MapPin, ArrowRight, Check, Zap, Brain, Code, Database, Award } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'

import heroImage from './assets/hero-unique.jpg'
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
  }, [darkMode])

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
              className="h-16 md:h-20 transition-transform group-hover:scale-110"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Inicio</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">Nosotros</Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">Servicios</Link>
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

function HomePage({ darkMode }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y, opacity }} className="w-full h-full">
            <img 
              src={heroImage} 
              alt="AI First Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60"></div>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full gradient-bg-first text-white text-sm font-semibold">
                  🚀 IA Primero, Resultados Siempre
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text-first text-glow">Transformamos</span>
                <br />
                <span className="text-foreground">Tu Negocio con IA</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Ponemos la inteligencia artificial en el centro de tu estrategia. Somos expertos que priorizan la IA para convertir desafíos complejos en soluciones innovadoras que impulsan el crecimiento real.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gradient-bg-first border-0 text-lg px-8 py-6 hover-lift">
                  <Link to="/contact">
                    Comienza con IA <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 hover-lift">
                  <Link to="/services">Ver Servicios</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold gradient-text-first">500+</div>
                  <div className="text-sm text-muted-foreground">Proyectos</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <div className="text-3xl font-bold gradient-text-first">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfacción</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <div className="text-3xl font-bold gradient-text-first">24/7</div>
                  <div className="text-sm text-muted-foreground">Soporte</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 gradient-bg-first opacity-20 blur-3xl rounded-full blob-animation"></div>
                <img 
                  src={logoIcon} 
                  alt="AI First Icon" 
                  className="relative w-96 h-96 mx-auto floating"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative section-divider">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestras <span className="gradient-text-first">Especialidades</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones de IA diseñadas para resultados reales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Brain, 
                title: 'Estrategia IA', 
                description: 'Diseñamos la hoja de ruta perfecta para integrar IA en tu negocio con visión a largo plazo.',
                color: 'from-cyan-500 to-blue-500'
              },
              { 
                icon: Code, 
                title: 'Desarrollo Custom', 
                description: 'Creamos soluciones de IA a medida que se adaptan exactamente a tus necesidades únicas.',
                color: 'from-pink-500 to-rose-500'
              },
              { 
                icon: Database, 
                title: 'Machine Learning', 
                description: 'Implementamos modelos ML que aprenden y mejoran continuamente con tus datos.',
                color: 'from-orange-500 to-amber-500'
              },
              { 
                icon: Shield, 
                title: 'IA Ética', 
                description: 'Garantizamos implementaciones responsables, justas y transparentes de inteligencia artificial.',
                color: 'from-purple-500 to-indigo-500'
              },
              { 
                icon: TrendingUp, 
                title: 'Analítica Avanzada', 
                description: 'Convertimos tus datos en insights accionables con visualizaciones poderosas.',
                color: 'from-green-500 to-emerald-500'
              },
              { 
                icon: Users, 
                title: 'Capacitación', 
                description: 'Empoderamos a tu equipo con el conocimiento para dominar las herramientas de IA.',
                color: 'from-yellow-500 to-orange-500'
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="perspective-card"
              >
                <Card className="h-full hover-lift card-glow perspective-card-inner gradient-border-first">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="gradient-bg-first border-0 hover-lift">
              <Link to="/services">
                Explorar Todos los Servicios <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img src={servicesImage} alt="Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Por Qué <span className="gradient-text-first">AI First</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Porque creemos que la IA debe ser tu prioridad número uno. No es solo una herramienta más, es el motor que impulsa la innovación. Trabajamos contigo para poner la IA en el centro de cada decisión estratégica.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Rocket, title: 'Velocidad de Implementación', desc: 'De la idea a producción en tiempo récord' },
                  { icon: Target, title: 'Enfoque en Resultados', desc: 'Nos importan tus KPIs, no solo la tecnología' },
                  { icon: Lightbulb, title: 'Innovación Constante', desc: 'Siempre un paso adelante en IA' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-bg-first flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: '15+', label: 'Años Experiencia', icon: Award },
                { number: '50+', label: 'Expertos IA', icon: Users },
                { number: '200+', label: 'Empresas', icon: Target },
                { number: '99%', label: 'Éxito', icon: TrendingUp },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="text-center hover-lift card-glow">
                    <CardContent className="pt-6">
                      <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                      <div className="text-3xl font-bold gradient-text-first mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-first opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              ¿Listo para <span className="gradient-text-first text-glow">Despegar</span>?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Únete a las empresas líderes que ya están transformando su futuro con AI First. Tu próxima gran innovación comienza aquí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-bg-first border-0 text-lg px-10 py-7 hover-lift">
                <Link to="/contact">
                  Agenda una Demo <Zap className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-10 py-7 hover-lift">
                <Link to="/about">Conoce AI First</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutImage} alt="Acerca de AI First" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Somos <span className="gradient-text-first">AI First</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Un equipo apasionado de expertos en IA dedicados a hacer que la inteligencia artificial sea accesible, práctica y poderosa para tu negocio.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Nuestra Misión</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none text-muted-foreground"
            >
              <p className="text-lg leading-relaxed mb-6">
                En AI First, creemos que la inteligencia artificial no debería ser un lujo reservado para gigantes tecnológicos. Nuestra misión es democratizar el acceso a la IA, haciendo que empresas de todos los tamaños puedan aprovechar su poder transformador.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Fundado por un grupo de investigadores, ingenieros y estrategas que compartían una visión común, AI First nació de la frustración de ver cómo muchas empresas luchaban por implementar IA de manera efectiva. Decidimos cambiar eso.
              </p>
              <p className="text-lg leading-relaxed">
                Hoy, somos más que consultores. Somos tu equipo líder de batalla, tu equipo de confianza que trabaja contigo desde la estrategia hasta la implementación, asegurando que cada solución de IA no solo funcione, sino que genere resultados medibles y sostenibles.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada proyecto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Lightbulb, 
                title: 'Innovación', 
                description: 'Nunca dejamos de explorar nuevas fronteras en IA. La curiosidad y la experimentación están en nuestro ADN.',
                gradient: 'from-cyan-500 to-blue-500'
              },
              { 
                icon: Shield, 
                title: 'Integridad', 
                description: 'Construimos IA ética y transparente. Tu confianza es nuestro activo más valioso.',
                gradient: 'from-pink-500 to-rose-500'
              },
              { 
                icon: Users, 
                title: 'Colaboración', 
                description: 'Trabajamos como un verdadero equipo contigo. Tus éxitos son nuestros éxitos.',
                gradient: 'from-orange-500 to-amber-500'
              },
              { 
                icon: Target, 
                title: 'Excelencia', 
                description: 'No nos conformamos con lo bueno. Buscamos la excelencia en cada línea de código.',
                gradient: 'from-purple-500 to-indigo-500'
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full text-center hover-lift card-glow">
                  <CardHeader>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} mx-auto mb-4 flex items-center justify-center`}>
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicesImage} alt="Servicios" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nuestros <span className="gradient-text-first">Servicios</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Soluciones completas de IA para cada etapa de tu transformación digital
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {[
              {
                icon: Brain,
                title: 'Estrategia de IA',
                description: 'Diseñamos tu hoja de ruta completa de transformación con IA. Analizamos tu negocio, identificamos oportunidades de alto impacto y creamos un plan estratégico que se alinea perfectamente con tus objetivos. No solo te decimos qué hacer, te mostramos cómo hacerlo realidad.',
                features: ['Auditoría de madurez en IA', 'Identificación de casos de uso', 'ROI y análisis de viabilidad', 'Roadmap de implementación'],
                gradient: 'from-cyan-500 to-blue-500',
                align: 'left'
              },
              {
                icon: Code,
                title: 'Desarrollo de Soluciones Custom',
                description: 'Construimos soluciones de IA a medida que se integran perfectamente con tu infraestructura existente. Desde chatbots inteligentes hasta sistemas de recomendación avanzados, cada línea de código está optimizada para tu caso de uso específico.',
                features: ['Modelos de ML personalizados', 'APIs y microservicios', 'Integración con sistemas legacy', 'Arquitectura escalable en la nube'],
                gradient: 'from-pink-500 to-rose-500',
                align: 'right'
              },
              {
                icon: Database,
                title: 'Machine Learning e IA Generativa',
                description: 'Implementamos modelos de aprendizaje automático que evolucionan con tu negocio. Desde análisis predictivo hasta generación de contenido con IA, aprovechamos las últimas tecnologías para darte ventaja competitiva.',
                features: ['Modelos predictivos y clasificación', 'Procesamiento de lenguaje natural', 'Visión por computadora', 'IA generativa (LLMs, difusión)'],
                gradient: 'from-orange-500 to-amber-500',
                align: 'left'
              },
              {
                icon: Shield,
                title: 'IA Ética y Responsable',
                description: 'La confianza es fundamental. Implementamos sistemas de IA que son justos, transparentes y cumplen con todas las regulaciones. Auditamos modelos para detectar sesgos y aseguramos que tu IA sea explicable y confiable.',
                features: ['Auditoría de sesgos', 'IA explicable (XAI)', 'Cumplimiento normativo', 'Gobernanza de datos'],
                gradient: 'from-purple-500 to-indigo-500',
                align: 'right'
              },
              {
                icon: TrendingUp,
                title: 'Analítica de Datos Avanzada',
                description: 'Convertimos tus datos en tu activo más valioso. Diseñamos pipelines de datos robustos, creamos dashboards interactivos y aplicamos análisis avanzados que revelan insights ocultos en tus datos.',
                features: ['Data warehousing y ETL', 'Dashboards interactivos', 'Análisis predictivo', 'Business Intelligence'],
                gradient: 'from-green-500 to-emerald-500',
                align: 'left'
              },
              {
                icon: Users,
                title: 'Capacitación y Upskilling',
                description: 'Empoderamos a tu equipo con las habilidades necesarias para el futuro. Ofrecemos programas de capacitación personalizados, workshops prácticos y mentoría continua para que tu organización domine la IA.',
                features: ['Programas de formación personalizados', 'Workshops y bootcamps', 'Certificaciones en IA', 'Soporte y mentoría continua'],
                gradient: 'from-yellow-500 to-orange-500',
                align: 'right'
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${service.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={service.align === 'right' ? 'lg:order-2' : ''}>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={service.align === 'right' ? 'lg:order-1' : ''}>
                    <Card className="hover-lift card-glow">
                      <CardContent className="p-8">
                        <div className={`w-full h-64 rounded-lg bg-gradient-to-br ${service.gradient} opacity-20`}></div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para <span className="gradient-text-first">Empezar</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agenda una consultoría gratuita y descubre cómo AI First puede transformar tu negocio.
            </p>
            <Button asChild size="lg" className="gradient-bg-first border-0 text-lg px-10 py-7 hover-lift">
              <Link to="/contact">
                Hablar con un Experto <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('¡Gracias! Nos pondremos en contacto pronto.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <div className="pt-20">
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-first opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hablemos de <span className="gradient-text-first">Tu Proyecto</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Estamos listos para ayudarte a transformar tu negocio con IA
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="hover-lift card-glow">
                <CardHeader>
                  <CardTitle className="text-3xl">Envíanos un Mensaje</CardTitle>
                  <CardDescription className="text-base">Te responderemos en menos de 24 horas</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Tu nombre"
                        className="text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@email.com"
                        className="text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Empresa</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Tu empresa"
                        className="text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mensaje *</label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Cuéntanos sobre tu proyecto..."
                        rows={5}
                        className="text-base"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full gradient-bg-first border-0 text-lg">
                      Enviar Mensaje <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-8">Información de Contacto</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, title: 'Email', content: ['hola@aifirst.com', 'soporte@aifirst.com'] },
                    { icon: Phone, title: 'Teléfono', content: ['+1 (555) 123-4567', 'Lun-Vie, 9am-6pm EST'] },
                    { icon: MapPin, title: 'Oficina', content: ['123 Innovation Drive', 'San Francisco, CA 94105'] },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-14 h-14 rounded-xl gradient-bg-first flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        {item.content.map((line, i) => (
                          <p key={i} className="text-muted-foreground">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="gradient-border-first card-glow">
                <CardHeader>
                  <CardTitle className="text-2xl">Agenda una Demo</CardTitle>
                  <CardDescription className="text-base">
                    Reserva 30 minutos con nuestro equipo para una consultoría gratuita
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="lg" className="w-full gradient-bg-first border-0 text-lg">
                    Reservar Ahora <Zap className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
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
              className="h-14 mb-4"
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
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
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
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
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
