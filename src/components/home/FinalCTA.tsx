import React from 'react';
import { ArrowRight, Instagram, MessageCircle } from 'lucide-react';
import { Logo } from '../common/Logo';
import { STORE_CONTACT } from '../../data/products';

interface FinalCTAProps {
  onExploreClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreClick }) => {
  return (
    <section className="py-24 lg:py-36 px-4 sm:px-8 lg:px-12 bg-brand-dark text-cream-100 relative overflow-hidden border-t border-brand-gold/30">
      
      {/* Background Subtle Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Dark Mode Brand Emblem Logo */}
        <div className="inline-block mb-4">
          <Logo variant="gold" size="lg" showSubtext={true} />
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.02] text-cream-100">
          SEU ESTILO <br />
          <span className="italic font-normal text-brand-gold">COMEÇA AQUI.</span>
        </h2>

        <p className="text-base sm:text-lg text-cream-200/80 font-light max-w-xl mx-auto leading-relaxed">
          Descubra a Leclerc e encontre peças atemporais que traduzem a sua essência com elegância, sofisticação e caimento perfeito.
        </p>

        {/* Dual Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#produtos"
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-dark hover:bg-brand-goldLight px-8 py-4 text-xs tracking-[0.25em] uppercase font-semibold rounded transition-all duration-300 shadow-lg shadow-brand-gold/10"
          >
            <span>Explorar Coleção</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={STORE_CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent text-cream-100 border border-cream-100/30 hover:border-brand-gold hover:text-brand-gold px-8 py-4 text-xs tracking-[0.25em] uppercase font-semibold rounded transition-all duration-300"
          >
            <Instagram className="w-4 h-4 text-brand-gold" />
            <span>@loja.leclerc</span>
          </a>

          <a
            href={STORE_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-cream-100/10 text-cream-100 hover:bg-cream-100/20 px-8 py-4 text-xs tracking-[0.25em] uppercase font-semibold rounded transition-all duration-300 border border-white/10"
          >
            <MessageCircle className="w-4 h-4 text-brand-gold" />
            <span>WhatsApp Direct</span>
          </a>
        </div>

      </div>
    </section>
  );
};
