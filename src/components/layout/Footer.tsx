import React, { useState } from 'react';
import { Instagram, MessageCircle, Mail, MapPin, Clock, ArrowRight, Check } from 'lucide-react';
import { Logo } from '../common/Logo';
import { STORE_CONTACT } from '../../data/products';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer id="contato" className="bg-brand-dark text-cream-200 pt-20 pb-12 px-4 sm:px-8 lg:px-12 border-t border-brand-gold/20 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-nude-300/20">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="md" showSubtext={true} />
            <p className="text-xs text-cream-200/70 font-light leading-relaxed max-w-sm">
              Leclerc — Moda feminina contemporânea com estética quiet luxury, caimento impecável e alfaiataria atemporal.
            </p>
            <p className="text-sm font-serif italic text-brand-gold">
              "É tudo sobre você."
            </p>
          </div>

          {/* Navigation Links (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-cream-200/80 font-light">
              <li><a href="#hero" className="hover:text-brand-gold transition-colors">Início</a></li>
              <li><a href="#nova-colecao" className="hover:text-brand-gold transition-colors">Nova Coleção — The New Edit</a></li>
              <li><a href="#produtos" className="hover:text-brand-gold transition-colors">Peças em Destaque</a></li>
              <li><a href="#ficha-editorial" className="hover:text-brand-gold transition-colors">Ficha Editorial</a></li>
              <li><a href="#categorias" className="hover:text-brand-gold transition-colors">Categorias</a></li>
              <li><a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre a Leclerc</a></li>
            </ul>
          </div>

          {/* Store Contact & Location (Cols 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
              Atendimento
            </h4>
            <div className="space-y-2.5 text-xs text-cream-200/80 font-light">
              <a
                href={STORE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-brand-gold" />
                <span>WhatsApp Store</span>
              </a>
              <a
                href={STORE_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-brand-gold" />
                <span>@loja.leclerc</span>
              </a>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-[11px] leading-tight">{STORE_CONTACT.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-[11px] leading-tight">{STORE_CONTACT.hours}</span>
              </div>
            </div>
          </div>

          {/* Newsletter (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
              Editorial Privé
            </h4>
            <p className="text-xs text-cream-200/70 font-light">
              Inscreva-se para receber prévias das coleções e lançamentos exclusivos da Leclerc.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail elegante"
                  required
                  className="w-full bg-cream-100/10 text-cream-100 placeholder-cream-200/40 text-xs px-4 py-3 rounded border border-white/20 focus:outline-none focus:border-brand-gold transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand-gold text-brand-dark px-3 rounded hover:bg-brand-goldLight transition-colors flex items-center justify-center"
                  aria-label="Inscrever"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Obrigado! Seu e-mail foi cadastrado no Editorial Leclerc.</span>
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-cream-200/50 font-light gap-4">
          <p>© {new Date().getFullYear()} LECLERC MODA FEMININA. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-cream-200 transition-colors cursor-pointer">Termos de Uso</span>
            <span className="hover:text-cream-200 transition-colors cursor-pointer">Privacidade</span>
            <span className="hover:text-cream-200 transition-colors cursor-pointer">Atendimento Direct</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
