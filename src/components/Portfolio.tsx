import React from 'react';
import SectionTitle from './common/SectionTitle';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Campanha Digital - E-commerce',
    category: 'ROI: 300%',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    results: 'Aumento de 150% nas vendas em 3 meses'
  },
  {
    title: 'Marketing B2B - Tech',
    category: 'ROI: 250%',
    image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    results: '200+ leads qualificados por mês'
  },
  {
    title: 'Branding Digital - Startup',
    category: 'ROI: 400%',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    results: 'Crescimento de 200% em reconhecimento de marca'
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-20 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Resultados Comprovados"
          subtitle="Cases reais de empresas que transformaram seus resultados com nossas estratégias"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg aspect-[9/16] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transform transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-transparent opacity-90">
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-orange-400 font-semibold mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.results}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;