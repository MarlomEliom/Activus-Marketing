import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5521986970434?text=Olá,%20tenho%20interesse%20e%20quero%20ter%20mais%20clientes.%20Como%20funciona?";

const benefits = [
  "Aumento garantido no número de leads qualificados",
  "Estratégias personalizadas para seu negócio",
  "Relatórios detalhados de resultados",
  "Suporte dedicado 7 dias por semana"
];

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-orange-500" />
              <span className="text-orange-500 font-semibold">Resultados Garantidos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Pronto para Transformar seu
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">Marketing Digital?</span>
            </h2>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all"
            >
              Falar com Especialista Agora
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Marketing Results"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;