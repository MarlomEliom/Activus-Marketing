import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import GradientButton from './common/GradientButton';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content }: { icon: any, title: string, content: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="flex items-start gap-4"
  >
    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white shrink-0">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="text-white font-semibold mb-1">{title}</h4>
      <p className="text-gray-400">{content}</p>
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Entre em Contato"
          subtitle="Pronto para levar sua marca a novos patamares? Vamos conversar sobre seus objetivos."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo
              icon={Mail}
              title="Email"
              content="contato@activusmarketing.com.br"
            />
            <ContactInfo
              icon={Phone}
              title="Telefone"
              content="+55 (11) 99999-9999"
            />
            <ContactInfo
              icon={MapPin}
              title="Localização"
              content="Av. Paulista, 1000 - Bela Vista, São Paulo - SP"
            />
          </div>
          
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Seu Nome"
                className="bg-navy-900 text-white rounded-lg px-4 py-3 border border-gray-800 focus:border-purple-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Seu Email"
                className="bg-navy-900 text-white rounded-lg px-4 py-3 border border-gray-800 focus:border-purple-500 focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Assunto"
              className="w-full bg-navy-900 text-white rounded-lg px-4 py-3 border border-gray-800 focus:border-purple-500 focus:outline-none"
            />
            <textarea
              placeholder="Sua Mensagem"
              rows={4}
              className="w-full bg-navy-900 text-white rounded-lg px-4 py-3 border border-gray-800 focus:border-purple-500 focus:outline-none resize-none"
            ></textarea>
            <GradientButton icon={Send}>
              Enviar Mensagem
            </GradientButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;