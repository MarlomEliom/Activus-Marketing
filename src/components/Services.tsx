import React from 'react';
import { Video, MonitorPlay, Layout, TrendingUp, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Target />,
    title: 'Anúncios Online',
    description: 'Campanhas de anúncios otimizadas para gerar máxima conversão e retorno sobre investimento (ROI).'
  },
  {
    icon: <Video />,
    title: 'Produção de Vídeos Profissionais',
    description: 'Videomaker especializado para criar conteúdos visuais de alto impacto que destacam sua marca.'
  },
  {
    icon: <Layout />,
    title: 'Design Gráfico',
    description: 'Identidades visuais criativas e designs que comunicam profissionalismo e atraem seu público.'
  },
  {
    icon: <MonitorPlay />,
    title: 'Gestão de Redes Sociais',
    description: 'Criação e gestão estratégica para engajar seu público nas principais plataformas digitais.'
  },
  {
    icon: <TrendingUp />,
    title: 'Estratégia de Performance',
    description: 'Acompanhamento e otimização contínua para resultados reais e mensuráveis.'
  },
  {
    icon: <Users />,
    title: 'Consultoria Digital',
    description: 'Orientação especializada para alavancar seus resultados através de estratégias digitais eficazes.'
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
            Soluções completas de anúncios, vídeos e design para impulsionar sua marca no mundo digital.
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
