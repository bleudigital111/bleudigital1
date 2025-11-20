import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Globe, CreditCard, Calendar, Box, Video, Smartphone, Mail, Phone, MapPin, ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Páginas Web",
      description: "Sitios web profesionales y modernos adaptados a tus necesidades. Diseño responsive y optimizado para todos los dispositivos.",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2Mjg5MDA4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Smartphone,
      title: "Mini Páginas Web",
      description: "Soluciones web compactas y efectivas para negocios que necesitan presencia digital rápida y profesional.",
      color: "from-cyan-500 to-blue-400",
      image: "https://images.unsplash.com/photo-1581093805071-a04e696db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyOTUzNTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: CreditCard,
      title: "Tarjetas Digitales",
      description: "Tarjetas de presentación digitales interactivas que dejan huella. Comparte tu información de manera moderna.",
      color: "from-indigo-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1648260295976-de09f77ab469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYnVzaW5lc3MlMjBjYXJkfGVufDF8fHx8MTc2Mjk3NDk2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Calendar,
      title: "Agendas Digitales",
      description: "Sistemas de gestión y agendamiento online para optimizar tu tiempo y el de tus clientes.",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1762690717850-d006c1416a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyOTc1MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Box,
      title: "Plataformas",
      description: "Plataformas digitales personalizadas para tu negocio. Soluciones escalables y robustas.",
      color: "from-blue-600 to-indigo-600",
      image: "https://images.unsplash.com/photo-1609649396743-14f587aca8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGJsdWV8ZW58MXx8fHwxNzYyOTc0OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Video,
      title: "Videos con Drone",
      description: "Captura aérea profesional con drone. Vistas espectaculares para marketing, eventos e inmobiliarias.",
      color: "from-sky-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1717582212847-bab166151ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBjaXR5JTIwdmlld3xlbnwxfHx8fDE3NjI5MTU2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const stats = [
    { number: "100+", label: "Proyectos Completados", icon: Target },
    { number: "50+", label: "Clientes Satisfechos", icon: Sparkles },
    { number: "24/7", label: "Soporte Técnico", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-black/80 backdrop-blur-xl border-b border-blue-500/20 z-50"
        style={{
          boxShadow: scrollY > 50 ? '0 0 30px rgba(59, 130, 246, 0.3)' : 'none'
        }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50 relative">
              <Globe className="w-7 h-7 text-white" />
              <div className="absolute inset-0 bg-blue-400 rounded-lg blur-xl opacity-50 animate-pulse"></div>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-xl">
              Mundo Digital Bleu
            </span>
          </motion.div>
          <nav className="hidden md:flex gap-8">
            <a href="#servicios" className="text-blue-300 hover:text-cyan-300 transition-colors relative group">
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all"></span>
            </a>
            <a href="#nosotros" className="text-blue-300 hover:text-cyan-300 transition-colors relative group">
              Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all"></span>
            </a>
            <a href="#contacto" className="text-blue-300 hover:text-cyan-300 transition-colors relative group">
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all"></span>
            </a>
          </nav>
          <Button className="hidden md:flex bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-lg shadow-blue-500/50 border-0">
            Consulta Gratis
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full text-blue-300">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  Innovación Digital
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Transformamos tus ideas en{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-gradient">
                  realidad digital
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-200/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                En Mundo Digital Bleu creamos experiencias digitales excepcionales. Desde páginas web hasta videos con drone, ofrecemos servicios integrales para impulsar tu presencia digital.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-lg shadow-blue-500/50 border-0 group">
                  Ver Servicios
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-400/50 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400">
                  Contáctanos
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-4 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Icon className="w-5 h-5 text-cyan-400 mr-2" />
                        <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                          {stat.number}
                        </span>
                      </div>
                      <p className="text-blue-300/60 text-sm">{stat.label}</p>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/20">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI5NTA3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Digital Technology"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-60"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-3xl opacity-60"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0]
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-blue-400 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Nuestros Servicios
              </span>
            </h2>
            <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios digitales para llevar tu negocio al siguiente nivel
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-blue-500/30 hover:border-cyan-400/50 transition-all group overflow-hidden h-full backdrop-blur-sm">
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 mix-blend-overlay`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                    </div>

                    <CardHeader>
                      <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg relative`}>
                        <Icon className="w-7 h-7 text-white" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl blur-xl opacity-50`}></div>
                      </div>
                      <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-blue-200/70">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-blue-500/10 p-0 group/btn">
                        Más información 
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 to-purple-950/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-5xl md:text-6xl mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  ¿Por qué elegirnos?
                </span>
              </h2>
              <p className="text-xl text-blue-200/80 mb-8">
                En Mundo Digital Bleu combinamos creatividad, tecnología y experiencia para crear soluciones digitales que realmente funcionan.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Soluciones Personalizadas",
                    description: "Cada proyecto es único y lo tratamos como tal"
                  },
                  {
                    title: "Tecnología Moderna",
                    description: "Usamos las últimas herramientas y tecnologías"
                  },
                  {
                    title: "Soporte Continuo",
                    description: "Estamos contigo antes, durante y después del proyecto"
                  },
                  {
                    title: "Resultados Garantizados",
                    description: "Nos comprometemos con la excelencia en cada entrega"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl text-blue-300 mb-1">{item.title}</h3>
                      <p className="text-blue-200/60">{item.description}</p>
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
              className="order-1 lg:order-2 relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="aspect-square rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/20"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1632154131447-969e46f0b29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwZGlnaXRhbCUyMGNpdHl8ZW58MXx8fHwxNzYyOTc1MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Digital City"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                </motion.div>
                
                <motion.div 
                  className="aspect-square rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 mt-12"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjI5MzU3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Development"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"></div>
                </motion.div>
              </div>

              {/* Floating orb */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-black"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Contacta con Nosotros
                </span>
              </h2>
              <p className="text-xl text-blue-200/80">
                ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a hacerlo realidad
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { icon: Mail, title: "Email", info: "contacto@mundodigitalbleu.com" },
                { icon: Phone, title: "Teléfono", info: "+1 (234) 567-8900" },
                { icon: MapPin, title: "Ubicación", info: "Disponible en línea" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-blue-500/30 hover:border-cyan-400/50 transition-all text-center backdrop-blur-sm">
                      <CardContent className="pt-8 pb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/50 relative">
                          <Icon className="w-8 h-8 text-white" />
                          <div className="absolute inset-0 bg-blue-400 rounded-2xl blur-xl opacity-50"></div>
                        </div>
                        <h3 className="text-xl text-blue-300 mb-2">{item.title}</h3>
                        <p className="text-blue-200/70">{item.info}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gradient-to-br from-blue-600 to-cyan-500 border-0 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                
                <CardContent className="p-12 text-center relative z-10">
                  <h3 className="text-3xl mb-4">¿Listo para comenzar tu proyecto?</h3>
                  <p className="text-xl mb-8 opacity-90">
                    Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all border-0"
                  >
                    <Sparkles className="mr-2 w-5 h-5" />
                    Agendar Consulta Gratuita
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-slate-950 border-t border-blue-500/20 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50 relative">
                  <Globe className="w-7 h-7 text-white" />
                  <div className="absolute inset-0 bg-blue-400 rounded-lg blur-xl opacity-50"></div>
                </div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Mundo Digital Bleu
                </span>
              </div>
              <p className="text-blue-200/60">
                Creando soluciones digitales innovadoras para tu negocio
              </p>
            </div>

            <div>
              <h4 className="text-blue-300 mb-4">Servicios</h4>
              <ul className="space-y-2 text-blue-200/60">
                <li><a href="#" className="hover:text-cyan-300 transition-colors">Páginas Web</a></li>
                <li><a href="#" className="hover:text-cyan-300 transition-colors">Tarjetas Digitales</a></li>
                <li><a href="#" className="hover:text-cyan-300 transition-colors">Agendas Digitales</a></li>
                <li><a href="#" className="hover:text-cyan-300 transition-colors">Videos con Drone</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-300 mb-4">Compañía</h4>
              <ul className="space-y-2 text-blue-200/60">
                <li><a href="#nosotros" className="hover:text-cyan-300 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#servicios" className="hover:text-cyan-300 transition-colors">Servicios</a></li>
                <li><a href="#contacto" className="hover:text-cyan-300 transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-300 mb-4">Síguenos</h4>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'youtube'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-cyan-500 transition-all border border-blue-500/20 hover:border-cyan-400/50 shadow-lg hover:shadow-blue-500/50"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      {social === 'facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>}
                      {social === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>}
                      {social === 'youtube' && <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>}
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-blue-500/20 pt-8 text-center text-blue-200/60">
            <p>&copy; 2025 Mundo Digital Bleu. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
