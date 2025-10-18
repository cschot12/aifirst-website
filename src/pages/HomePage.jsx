import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, Rocket, Target, Lightbulb, TrendingUp, Shield, Zap, Brain, Code, Database, Award } from 'lucide-react';
import heroImage from '../assets/hero-friday.jpg';
import servicesImage from '../assets/services-unique.jpg';
import logoIcon from '../assets/aifirst-icon-only.png';

export default function HomePage({ darkMode }) {
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
            <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/20 to-background/10"></div>
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
                  🚀 Acelera tu futuro con AI
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text-first">Transformamos</span>
                <br />
                <span className="text-foreground">tu negocio con AI</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Ponemos la inteligencia artificial en el centro de tu estrategia, con un enfoque en la evaluación de procesos. Somos expertos que priorizan la AI para convertir desafíos complejos en soluciones innovadoras que impulsan el crecimiento real.
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
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text-first">10+</div>
                  <div className="text-sm text-muted-foreground">Años de experiencia</div>
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
                { number: '10+', label: 'Años Experiencia', icon: Award },
                { number: '70%', label: 'Procesos optimizados', icon: Users },
                { number: '100%', label: 'Satisfacción', icon: Target },
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
              ¿Listo para <span className="gradient-text-first">Despegar</span>?
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
