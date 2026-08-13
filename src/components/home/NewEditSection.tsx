import React, { useState } from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { LOOKBOOK_ITEMS } from '../../data/products';

export const NewEditSection: React.FC = () => {
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const look = LOOKBOOK_ITEMS[activeLookIndex];

  return (
    <section id="nova-colecao" className="py-20 lg:py-32 px-4 sm:px-8 lg:px-12 bg-nude-50 relative border-t border-nude-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 border-b border-nude-200 mb-12 gap-4">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-brand-gold block mb-2">
              Editorial Collection 2026
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-brand-dark tracking-tight">
              THE NEW EDIT
            </h2>
          </div>
          
          {/* Lookbook Switcher Tabs */}
          <div className="flex items-center space-x-2 bg-cream-100 p-1.5 rounded border border-nude-200">
            {LOOKBOOK_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveLookIndex(idx)}
                className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 rounded ${
                  activeLookIndex === idx
                    ? 'bg-brand-dark text-cream-100 font-medium shadow-sm'
                    : 'text-brand-cocoa hover:text-brand-dark'
                }`}
              >
                Look 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Magazine Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Large Image (Hero Photo of Look) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-lg overflow-hidden bg-cream-200 border border-nude-300 shadow-card aspect-[4/5] img-zoom-container">
              <img
                src={look.mainImage}
                alt={look.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Floating Editorial Quote Badge */}
              <div className="absolute top-6 left-6 max-w-xs bg-cream-100/90 backdrop-blur-md p-4 rounded border border-white/50 hidden sm:block shadow-sm">
                <Quote className="w-4 h-4 text-brand-gold mb-1" />
                <p className="text-xs font-serif italic text-brand-dark leading-relaxed">
                  {look.quote}
                </p>
              </div>

              {/* Bottom Image Tag */}
              <div className="absolute bottom-6 left-6 text-cream-100">
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-80 block">Leclerc Lookbook</span>
                <p className="font-serif text-2xl text-white">{look.title}</p>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Secondary Images + Narrative & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Top Narrative Card */}
            <div className="space-y-4 bg-cream-100 p-6 sm:p-8 rounded-lg border border-nude-200 shadow-subtle">
              <span className="text-[10px] uppercase tracking-[0.25em] text-brand-marsala font-semibold">
                Direção de Arte & Conceito
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-brand-dark">
                {look.subtitle}
              </h3>
              <p className="text-sm text-brand-cocoa leading-relaxed font-light">
                {look.description}
              </p>
              <div className="pt-2">
                <a
                  href="#produtos"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-brand-dark hover:text-brand-gold transition-colors group"
                >
                  <span>Explorar Coleção</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Asymmetric 2 Secondary Photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden border border-nude-200 bg-cream-200 aspect-[3/4] img-zoom-container shadow-sm">
                <img
                  src={look.secondaryImage1}
                  alt="Detalhe de alfaiataria"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-nude-200 bg-cream-200 aspect-[3/4] img-zoom-container shadow-sm">
                <img
                  src={look.secondaryImage2}
                  alt="Caimento da peça"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
