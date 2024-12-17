import React from 'react';
import { Rocket, Palette, Globe, TrendingUp, Users, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Rocket />,
    title: 'Estratégia Digital',
    description: 'Lance sua marca com estratégias baseadas em dados que impulsionam o crescimento.'
  },
  {
    icon: <Palette />,
    title: 'Design de Marca',
    description: 'Crie identidades visuais impressionantes que capturam a essência da sua marca.'
  },
  {
    icon: <Globe />,
    title: 'Desenvolvimento Web',
    description: 'Construa websites modernos e responsivos que convertem visitantes em clientes.'
  },
  {
    icon: <TrendingUp />,
    title: 'Otimização SEO',
    description: 'Aumente sua visibilidade e alcance melhores posições nos resultados de busca.'
  },
  {
    icon: <Users />,
    title: 'Mídia Social',
    description: 'Engaje seu público e construa conexões significativas.'
  },
  {
    icon: <MessageSquare />,
    title: 'Marketing de Conteúdo',
    description: 'Conte sua história através de conteúdo envolvente que ressoa com seu público.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Nossos Serviços</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubra como podemos transformar sua presença digital com nosso conjunto abrangente de serviços.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-navy-800 p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;