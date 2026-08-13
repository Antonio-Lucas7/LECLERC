import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STORE_CONTACT } from '../../data/products';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={STORE_CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-brand-dark hover:bg-black text-cream-100 px-4 py-3 rounded-full shadow-2xl border border-brand-gold/40 transition-all duration-300 hover:scale-105 group"
      aria-label="Atendimento WhatsApp Leclerc"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5 text-brand-gold group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
      </div>
      <span className="text-xs uppercase tracking-widest font-medium hidden md:inline-block">
        Atendimento Personalizado
      </span>
    </a>
  );
};
