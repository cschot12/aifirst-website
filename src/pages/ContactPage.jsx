import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, ArrowRight, Zap } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://srv981742.hstgr.cloud/webhook-test/9af7b14e-947f-41d2-9d1a-69806037dfff', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('¡Gracias! Nos pondremos en contacto pronto.');
      setFormData({ name: '', email: '', company: '', message: '' });
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
    });
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
                  <CardTitle className="text-3xl">Cuentanos sobre tu proyecto</CardTitle>
                  <CardDescription className="text-base">Obten una evaluación en solo 5 minutos</CardDescription>
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
                      <label className="block text-sm font-medium mb-2">Proyecto *</label>
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
                      Obtener evaluación <ArrowRight className="ml-2 w-5 h-5" />
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
                    { icon: Phone, title: 'Teléfono', content: ['+56 9761 93 937', 'Lun-Vie, 9am-6pm EST'] },
                    { icon: MapPin, title: 'Oficina', content: ['Santiago, Chile'] },
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
