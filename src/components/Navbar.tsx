import React from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-navy-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Rocket className="h-8 w-8 text-gradient-primary" />
                <span className="text-white text-xl font-bold">Activus Marketing</span>
              </div>
            </div>
          </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="#home" 
                className="text-white hover:text-gradient-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Início
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="#services" 
                className="text-white hover:text-gradient-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Serviços
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="#work" 
                className="text-white hover:text-gradient-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Portfólio
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="#about" 
                className="text-white hover:text-gradient-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Sobre
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="#contact" 
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90"
              >
                Contato
              </motion.a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gradient-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-white block px-3 py-2 rounded-md text-base font-medium">Início</a>
            <a href="#services" className="text-white block px-3 py-2 rounded-md text-base font-medium">Serviços</a>
            <a href="#work" className="text-white block px-3 py-2 rounded-md text-base font-medium">Portfólio</a>
            <a href="#about" className="text-white block px-3 py-2 rounded-md text-base font-medium">Sobre</a>
            <a href="#contact" className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 block px-3 py-2 rounded-md text-base font-medium">Contato</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;