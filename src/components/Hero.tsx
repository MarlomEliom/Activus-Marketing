import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_LINK = "https://wa.me/5521986970434?text=Olá,%20tenho%20interesse%20e%20quero%20ter%20mais%20clientes.%20Como%20funciona?";

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 p-3 rounded-full">
              <Rocket className="h-12 w-12 text-white" />
            </div>
          </motion.div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Aumente Seus Resultados com
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">Marketing Digital Estratégico</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transforme visitantes em clientes fiéis. Aumente sua visibilidade online e multiplique seus resultados com estratégias comprovadas de marketing digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all"
            >
              Quero Aumentar Minhas Vendas
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-gray-400"
          >
            Mais de 100+ empresas já aumentaram seus resultados conosco
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;