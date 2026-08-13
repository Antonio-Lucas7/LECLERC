import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MessageCircle, ChevronRight } from 'lucide-react';
import { Logo } from '../common/Logo';
import { STORE_CONTACT } from '../../data/products';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Coleções', href: '#nova-colecao' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Spotlight', href: '#ficha-editorial' },
    { name: 'Categorias', href: '#categorias' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Top Banner */}
      <div className="bg-brand-dark text-cream-200 text-[10px] sm:text-xs py-1.5 px-4 text-center tracking-[0.25em] uppercase font-light border-b border-brand-gold/20 flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
        <span>NOVA COLEÇÃO 2026 — É TUDO SOBRE VOCÊ</span>
        <span className="hidden md:inline opacity-60">|</span>
        <span className="hidden md:inline opacity-80">ATENDIMENTO PERSONALIZADO VIA WHATSAPP</span>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-500 py-3 md:py-4 px-4 sm:px-8 md:px-12 flex items-center justify-between ${
          isScrolled
            ? 'glass-header border-b border-nude-200/60 shadow-subtle py-2.5 md:py-3'
            : 'bg-cream-100/90 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        {/* Left Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8 text-xs tracking-editorial uppercase font-medium text-brand-charcoal">
          {navLinks.slice(0, 4).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 hover:text-brand-gold transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Center Brand Logo */}
        <a href="#hero" className="flex items-center focus:outline-none">
          <Logo variant="dark" size="md" showSubtext={true} />
        </a>

        {/* Right Desktop Links & Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.slice(4, 7).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs tracking-editorial uppercase font-medium text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          {/* Instagram Link */}
          <a
            href={STORE_CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs tracking-widest uppercase font-medium py-2 px-3 rounded border border-brand-charcoal/20 hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
            title="Siga no Instagram"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@loja.leclerc</span>
          </a>

          {/* WhatsApp Action Button */}
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 text-xs tracking-widest uppercase font-medium bg-brand-dark text-cream-100 py-2 px-4 rounded hover:bg-black transition-all duration-300 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 text-brand-gold" />
            <span>Contato</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center space-x-3">
          <a
            href={STORE_CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-brand-charcoal hover:text-brand-gold"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brand-charcoal focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[88px] bg-cream-100/98 backdrop-blur-md z-40 flex flex-col justify-between p-8 border-t border-nude-200 animate-fadeIn">
          <div className="space-y-6">
            <div className="pb-4 border-b border-nude-200 flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-brand-cocoa">Navegação Leclerc</span>
              <Logo size="sm" />
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-wide text-brand-dark hover:text-brand-gold flex items-center justify-between py-1 border-b border-nude-100"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-brand-gold/60" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-nude-200">
            <p className="text-xs text-center text-brand-cocoa font-light italic">
              "É tudo sobre você."
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={STORE_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-cream-200 text-brand-dark rounded text-xs uppercase tracking-wider font-medium"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href={STORE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-brand-dark text-cream-100 rounded text-xs uppercase tracking-wider font-medium"
              >
                <MessageCircle className="w-4 h-4 text-brand-gold" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
