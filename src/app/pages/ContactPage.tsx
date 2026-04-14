import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/Card';
import { Input, Textarea } from '../components/Input';
import { Button } from '../components/Button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulación de envío de formulario
    toast.success('¡Mensaje enviado correctamente! Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9FAFB] mb-4">
            Contacta<span className="text-[#22C55E]">me</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22C55E] to-[#3B82F6] mx-auto rounded-full mb-4"></div>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 sm:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-4 sm:space-y-6"
          >
            <Card hover={false}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#22C55E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#22C55E]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#F9FAFB] mb-1">Email</h3>
                  <a 
                    href="mailto:jlopezbenavides73@gmail.com"
                    className="text-[#9CA3AF] text-sm hover:text-[#22C55E] transition-colors break-all"
                  >
                    jlopezbenavides73@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card hover={false}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#3B82F6]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#F9FAFB] mb-1">Teléfono</h3>
                  <a 
                    href="tel:+573148076105"
                    className="text-[#9CA3AF] text-sm hover:text-[#3B82F6] transition-colors"
                  >
                    +57 314 807 6105
                  </a>
                </div>
              </div>
            </Card>

            <Card hover={false}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#22C55E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#22C55E]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#F9FAFB] mb-1">Ubicación</h3>
                  <p className="text-[#9CA3AF] text-sm">Colombia</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <Card hover={false}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Nombre"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />

                <Textarea
                  label="Mensaje"
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />

                <Button type="submit" className="w-full">
                  Enviar mensaje
                  <Send size={20} />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
