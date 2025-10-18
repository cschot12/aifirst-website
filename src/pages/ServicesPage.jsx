import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Code, Database, Shield, TrendingUp, Users, Check, ArrowRight } from 'lucide-react';
import servicesImage from '../assets/services-unique.jpg';

export default function ServicesPage() {
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
