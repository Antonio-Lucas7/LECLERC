import React from 'react';
import { Heart, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { Logo } from '../common/Logo';
import { STORE_CONTACT } from '../../data/products';

export const BrandStorySection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 lg:py-36 px-4 sm:px-8 lg:px-12 bg-nude-100 relative overflow-hidden border-t border-b border-nude-200">
      
      {/* Subtle Background Graphic Rings */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-brand-gold/10 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-brand-gold/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Atelier Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden shadow-card border border-nude-300 img-zoom-container bg-cream-200 aspect-[4/3]">
              <img
                src="/images/boutique.jpg"
                alt="Espaço Leclerc Boutique - Atelier & Provador"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Atelier Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-header rounded-lg border border-white/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-brand-cocoa block">Boutique Autoral</span>
                    <span className="text-xs font-serif font-semibold text-brand-dark">Jardins, São Paulo</span>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-medium bg-nude-200/80 px-2.5 py-1 rounded">
                  Atendimento Com Hora Marcada
                </span>
              </div>
            </div>

            {/* Backing Frame */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-brand-gold/25 rounded-xl -z-10 hidden sm:block pointer-events-none" />
          </div>

          {/* Right Column: Institutional Brand Copy */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            
            <div className="inline-flex items-center gap-2 text-brand-gold">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold">
                Manifesto da Marca
              </span>
            </div>

            <Logo size="lg" showSubtext={false} />

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-brand-dark tracking-tight leading-[1.05]">
              É tudo sobre <br />
              <span className="italic font-normal text-brand-cocoa">você.</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-dark font-serif italic leading-relaxed text-brand-charcoal">
              "A Leclerc acredita em uma moda que acompanha quem você é. Peças pensadas para unir elegância, versatilidade e personalidade em todos os momentos."
            </p>

            <p className="text-xs sm:text-sm text-brand-cocoa font-light leading-relaxed">
              Nossa proposta vai além de tendências passageiras. Desenvolvemos peças com corte preciso, tecidos nobres e acabamento impecável para compor a sua identidade visual com quiet luxury — um luxo discreto, acolhedor e atemporal.
            </p>

            {/* Value Pillars */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-nude-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-nude-200 flex items-center justify-center text-brand-dark shrink-0">
                  <Heart className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-brand-dark">Acolhimento & Escuta</h4>
                  <p className="text-xs text-brand-cocoa font-light">Consultoria atenciosa para encontrar o seu estilo ideal.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-nude-200 flex items-center justify-center text-brand-dark shrink-0">
                  <ShieldCheck className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-brand-dark">Qualidade Excepcional</h4>
                  <p className="text-xs text-brand-cocoa font-light">Tecidos nobres de alta durabilidade e caimento perfeito.</p>
                </div>
              </div>
            </div>

            {/* Action Direct Contact */}
            <div className="pt-4">
              <a
                href={STORE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-dark text-cream-100 px-8 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded hover:bg-black transition-all shadow-md"
              >
                <span>Agendar Atendimento Presencial</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
