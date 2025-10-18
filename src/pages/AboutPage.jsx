import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb, Shield, Users, Target } from 'lucide-react';
import aboutImage from '../assets/about-unique.jpg';

export default function AboutPage() {
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
