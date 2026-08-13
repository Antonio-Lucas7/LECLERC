import React, { useState } from 'react';
import { X, MessageCircle, Instagram, MapPin, Clock, Mail, Phone, Send, Check } from 'lucide-react';
import { STORE_CONTACT } from '../../data/products';
import { Logo } from '../common/Logo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Meu nome é *${name}*.\n\nEnviei uma mensagem pelo site oficial da Leclerc:\n"${message}"`
    );
    window.open(`https://wa.me/5511998876655?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-dark/75 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl bg-cream-100 rounded-2xl shadow-2xl border border-nude-300 overflow-hidden animate-slideUp">
        {/* Header Bar */}
        <div className="bg-brand-dark text-cream-100 p-6 flex items-center justify-between border-b border-brand-gold/30">
          <Logo variant="gold" size="sm" showSubtext={false} />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 text-cream-100 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif text-brand-dark font-semibold">
              Atendimento Leclerc
            </h3>
            <p className="text-xs text-brand-cocoa font-light max-w-md mx-auto">
              Fale com nossa equipe via WhatsApp ou agende seu atendimento presencial em nosso espaço autoral nos Jardins.
            </p>
          </div>

          {/* Quick Direct Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={STORE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-nude-100 border border-nude-300 hover:border-brand-gold flex items-center gap-3 transition-colors shadow-xs group"
            >
              <div className="w-10 h-10 rounded-full bg-brand-dark text-cream-100 flex items-center justify-center group-hover:bg-black">
                <MessageCircle className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-brand-cocoa block">Atendimento Imediato</span>
                <span className="text-xs font-semibold text-brand-dark">WhatsApp Direct</span>
              </div>
            </a>

            <a
              href={STORE_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-nude-100 border border-nude-300 hover:border-brand-gold flex items-center gap-3 transition-colors shadow-xs group"
            >
              <div className="w-10 h-10 rounded-full bg-brand-dark text-cream-100 flex items-center justify-center group-hover:bg-black">
                <Instagram className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-brand-cocoa block">Perfil Oficial</span>
                <span className="text-xs font-semibold text-brand-dark">@loja.leclerc</span>
              </div>
            </a>
          </div>

          {/* Quick Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-nude-200">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-brand-cocoa font-medium mb-1">
                Seu Nome
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como prefere ser chamada?"
                className="w-full bg-cream-50 text-brand-dark text-xs p-3 rounded border border-nude-300 focus:outline-none focus:border-brand-gold"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-brand-cocoa font-medium mb-1">
                Sua Mensagem ou Dúvida
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Conte-nos sobre a peça ou ocasião que procura..."
                className="w-full bg-cream-50 text-brand-dark text-xs p-3 rounded border border-nude-300 focus:outline-none focus:border-brand-gold"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-brand-dark text-cream-100 py-3.5 px-6 rounded text-xs uppercase tracking-[0.2em] font-medium hover:bg-black transition-colors shadow-md"
            >
              {sent ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Redirecionando para WhatsApp...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-brand-gold" />
                  <span>Enviar para Consultora via WhatsApp</span>
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};
