import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-navy-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo e Nome clicáveis */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"

          >

            <a href="#home" className="flex items-center gap-2">
              <img
                src="logo1.png" // Caminho da sua logo
                alt="Logo Activus Marketing"
                className="h-8 w-8"
              />
              <span className="text-white text-xl font-bold">
                Activus Marketing
              </span>
            </a>
          </motion.div>

          {/* Menus */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-white hover:text-gradient-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Início
              </a>
              <a
                href="#services"
                className="text-white hover:text-gradient-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Serviços
              </a>
              <a
                href="#work"
                className="text-white hover:text-gradient-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Portfólio
              </a>
              <a
                href="https://wa.me/5521986970434?text=Olá,%20tenho%20interesse%20e%20quero%20ter%20mais%20clientes.%20Como%20funciona?>"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90"
              >
                Comece agora
              </a>
            </div>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gradient-primary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Início
            </a>
            <a
              href="#services"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Serviços
            </a>
            <a
              href="#work"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Portfólio
            </a>
            <a
              href="https://wa.me/5521986970434?text=Olá,%20tenho%20interesse%20e%20quero%20ter%20mais%20clientes.%20Como%20funciona?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Comece agora
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
