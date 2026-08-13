import React from 'react';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { Logo } from '../common/Logo';

interface HeroProps {
  onExploreClick: () => void;
  onAboutClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onAboutClick }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 md:pt-36 pb-16 px-4 sm:px-8 lg:px-12 flex flex-col justify-between overflow-hidden bg-cream-100">
      {/* Background Decorative Thin Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-nude-300/40 hidden lg:block" />
        <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-nude-300/40 hidden lg:block" />
      </div>

      {/* Hero Header Meta */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-nude-200/80 pb-4 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-brand-cocoa bg-nude-100 px-3 py-1 rounded-full border border-nude-200">
            Editorial Lookbook 2026
          </span>
          <span className="text-xs text-brand-gold font-serif italic hidden sm:inline">
            Quiet Luxury Collection
          </span>
        </div>

        <div className="text-right hidden sm:block">
          <p className="text-[10px] uppercase tracking-[0.25em] text-brand-cocoa">
            EDITION NO. 01 — SÃO PAULO / PARIS
          </p>
        </div>
      </div>

      {/* Main Editorial Hero Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        
        {/* Left Column: Magazine Cover Typography */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pr-6">
          <div className="inline-flex items-center gap-2 text-brand-gold">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold">
              Conceito Autoral
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-brand-dark tracking-tight leading-[0.95] capitalize">
            É tudo sobre <br />
            <span className="italic font-normal text-brand-charcoal relative inline-block">
              você.
              <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-brand-gold/40" />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-brand-cocoa font-light max-w-lg leading-relaxed pt-2">
            Descubra peças que traduzem sua personalidade, seu estilo e seus momentos mais marcantes. Uma moda contemporânea feita para acompanhar quem você é.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#produtos"
              onClick={onExploreClick}
              className="group relative inline-flex items-center justify-center gap-3 bg-brand-dark text-cream-100 px-8 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded hover:bg-black transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <span>Explorar Coleção</span>
              <ArrowDownRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
            </a>

            <a
              href="#sobre"
              onClick={onAboutClick}
              className="inline-flex items-center justify-center gap-2 bg-transparent text-brand-dark border border-brand-dark/30 hover:border-brand-gold hover:text-brand-gold px-8 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded transition-all duration-300"
            >
              Conhecer a Leclerc
            </a>
          </div>

          {/* Editorial Micro-Details */}
          <div className="pt-8 grid grid-cols-3 gap-4 border-t border-nude-200/80 text-left">
            <div>
              <span className="block text-xl font-serif font-semibold text-brand-dark">100%</span>
              <span className="text-[10px] uppercase tracking-wider text-brand-cocoa">Design Autoral</span>
            </div>
            <div>
              <span className="block text-xl font-serif font-semibold text-brand-dark">Nobre</span>
              <span className="text-[10px] uppercase tracking-wider text-brand-cocoa">Matéria-Prima</span>
            </div>
            <div>
              <span className="block text-xl font-serif font-semibold text-brand-dark">Quiet</span>
              <span className="text-[10px] uppercase tracking-wider text-brand-cocoa">Luxury Style</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero High Fashion Photography Frame */}
        <div className="lg:col-span-6 relative">
          {/* Main Visual Image Card */}
          <div className="relative rounded-lg overflow-hidden shadow-card border border-nude-200/80 img-zoom-container bg-nude-100 aspect-[3/4] max-w-lg mx-auto lg:max-w-none">
            <img
              src="/images/hero.jpg"
              alt="Editorial Leclerc - É tudo sobre você"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Floating Editorial Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-header rounded-md border border-white/40 flex items-center justify-between shadow-lg">
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-brand-cocoa block">Peça em Destaque</span>
                <h3 className="font-serif text-lg font-semibold text-brand-dark">Alfaiataria Off-White Sculpt</h3>
              </div>
              <span className="text-xs font-serif italic text-brand-gold border-l border-brand-gold/30 pl-4">
                Edição Limitada
              </span>
            </div>
          </div>

          {/* Decorative Backing Frame */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-gold/30 rounded-lg -z-10 hidden sm:block pointer-events-none" />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 mt-12 text-center flex flex-col items-center justify-center">
        <a
          href="#nova-colecao"
          className="inline-flex flex-col items-center gap-2 text-brand-cocoa hover:text-brand-gold transition-colors duration-300 group"
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">Role para explorar</span>
          <div className="w-5 h-8 rounded-full border border-brand-cocoa/40 flex justify-center p-1 group-hover:border-brand-gold transition-colors">
            <div className="w-1 h-2 bg-brand-gold rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
