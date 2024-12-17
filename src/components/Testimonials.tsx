import React from 'react';
import SectionTitle from './common/SectionTitle';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_LINK = "https://wa.me/5521986970434?text=Olá,%20tenho%20interesse%20e%20quero%20ter%20mais%20clientes.%20Como%20funciona?";

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'CEO da TechStart',
    content: 'A Activus Marketing transformou completamente nossa presença digital. Em apenas 3 meses, triplicamos nossas vendas online.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Ana Santos',
    role: 'Diretora de Marketing',
    content: 'Resultados impressionantes! Nossa taxa de conversão aumentou 150% com as estratégias implementadas pela equipe.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="O Que Nossos Clientes Dizem"
          subtitle="Histórias reais de empresas que transformaram seus resultados conosco"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-navy-800 p-8 rounded-lg border border-gray-800"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all"
          >
            Quero Resultados Como Esses
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;