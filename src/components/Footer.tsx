import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/nikosophoscode',
      emoji: '🐙',
      label: 'GitHub Repository',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/nikosophoscode',
      emoji: '💼',
      label: 'LinkedIn Profile',
    },
    {
      name: 'Website',
      url: 'https://nikosophoscode.com',
      emoji: '🌐',
      label: 'Personal Website',
    },
  ];

  return (
    <footer className={`bg-gradient-to-r ${theme.colors.primary} text-white mt-16 shadow-lg`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span className="text-2xl">🐶</span>
              Perritos UwU
            </h3>
            <p className="text-white/80 text-sm text-center md:text-left">
              Una aplicación para explorar y descubrir información sobre diferentes razas de perros, 
              con datos curiosos y la posibilidad de guardar tus favoritos.
            </p>
          </div>

          {/* Features Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-4">Características</h3>
            <ul className="text-white/80 text-sm space-y-2 text-center">
              <li>✨ Perros aleatorios</li>
              <li>🔍 Búsqueda por raza</li>
              <li>📚 Catálogo completo</li>
              <li>❤️ Guardar favoritos</li>
              <li>🌙 Modo oscuro</li>
              <li>🌐 Traducción automática</li>
            </ul>
          </div>

          {/* Developer Section */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-bold mb-4">Desarrollador</h3>
            <p className="text-white/80 text-sm mb-4 text-center md:text-right">
              Desarrollado por<br />
              <span className="font-semibold text-white">Nicolás Acuña</span><br />
              <span className="text-xs text-white/70">@nikosophoscode</span>
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8 pb-8 border-t border-white/20">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label={link.label}
              title={link.label}
            >
              <span className="text-2xl">{link.emoji}</span>
              <span className="hidden sm:inline text-sm font-medium">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm text-center md:text-left">
            © {currentYear} Perritos UwU. Todos los derechos reservados.
          </p>
          <p className="text-white/70 text-sm text-center md:text-right">
            Construido con <span className="text-red-400">❤️</span> usando React, TypeScript y TailwindCSS
          </p>
        </div>

        {/* API Attribution */}
        <div className="mt-6 pt-6 border-t border-white/20 text-center">
          <p className="text-white/60 text-xs">
            Datos de perros proporcionados por{' '}
            <a
              href="https://dogapi.dog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors underline"
            >
              Dog API
            </a>
            {' '}| Traducción por{' '}
            <a
              href="https://mymemory.translated.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors underline"
            >
              MyMemory
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
