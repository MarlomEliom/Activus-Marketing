import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5521986970434?text=Olá,%20tenho%20interesse%20e%20quero%20transformar%20meu%20negócio.%20Como%20funciona?";

const benefits = [
  "Campanhas de anúncios online com foco em resultados",
  "Vídeos profissionais que destacam sua marca",
  "Design criativo para fortalecer a identidade visual",
  "Suporte contínuo com acompanhamento de métricas"
];

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto e Benefícios */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-6 h-6 text-orange-500" />
              <span className="text-orange-500 font-semibold">Resultados Sob Medida</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Impulsione Seu Negócio com  
              <span className="block bg-gradient-to-r from-orange-500 py-4 via-pink-500 to-purple-500 text-transparent bg-clip-text">Estratégias Visuais e Digitais</span>
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
              Transforme Seu Negócio Agora
            </motion.a>
          </motion.div>

          {/* Imagem com Destaque */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://i.imgur.com/O3vPxYC.png"
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
