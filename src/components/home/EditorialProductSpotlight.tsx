import React from 'react';
import { CheckCircle2, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS, STORE_CONTACT } from '../../data/products';
import { Product } from '../../types';

interface EditorialProductSpotlightProps {
  onSelectProduct: (product: Product) => void;
}

export const EditorialProductSpotlight: React.FC<EditorialProductSpotlightProps> = ({
  onSelectProduct,
}) => {
  const blazer = PRODUCTS.find((p) => p.id === 'blazer-leclerc-alfaiataria') || PRODUCTS[0];

  return (
    <section id="ficha-editorial" className="py-20 lg:py-32 px-4 sm:px-8 lg:px-12 bg-nude-100/60 relative border-t border-b border-nude-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-6 border-b border-nude-200 gap-4">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-brand-gold block mb-2">
              Ficha Editorial de Moda
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark tracking-tight">
              PEÇA EM DESTAQUE EDITORIAL
            </h2>
          </div>
          <div className="flex items-center gap-2 text-brand-cocoa text-xs uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Quiet Luxury Signature</span>
          </div>
        </div>

        {/* Editorial Spread Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-cream-100 p-6 sm:p-10 lg:p-12 rounded-xl border border-nude-300 shadow-card">
          
          {/* Left Column: Triple Photo Magazine Collage */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4">
            
            {/* Frontal Main Photo */}
            <div className="col-span-8 rounded-lg overflow-hidden border border-nude-200 shadow-sm aspect-[3/4] img-zoom-container bg-cream-200">
              <img
                src={blazer.image}
                alt="Blazer Leclerc - Foto Frontal"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Secondary & Detail Shots stacked */}
            <div className="col-span-4 flex flex-col gap-4 justify-between">
              <div className="rounded-lg overflow-hidden border border-nude-200 shadow-sm aspect-[3/4] img-zoom-container bg-cream-200">
                <img
                  src={blazer.secondaryImage}
                  alt="Blazer Leclerc - Composição"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-nude-200 shadow-sm aspect-[3/4] img-zoom-container bg-cream-200">
                <img
                  src={blazer.detailImage}
                  alt="Blazer Leclerc - Detalhe de Costura"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Specs & Description */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-3">
              <div className="inline-block bg-brand-dark text-cream-100 text-[10px] uppercase tracking-[0.25em] px-3 py-1 rounded">
                Flagship Highlight
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-serif text-brand-dark tracking-tight">
                BLAZER LECLERC ALFAIATARIA
              </h3>
              
              <p className="text-sm italic font-serif text-brand-gold font-normal">
                "Uma peça de alfaiataria pensada para acompanhar diferentes momentos."
              </p>
              
              <p className="text-xs sm:text-sm text-brand-cocoa font-light leading-relaxed pt-2">
                O Blazer Leclerc traduz a essência da mulher contemporânea. Construído com caimento acinturado sutil, ombros levemente estruturados e forro interno aveludado, é a escolha perfeita para transitar do trabalho a jantares especiais.
              </p>
            </div>

            {/* Features Checklist */}
            <div className="space-y-3 pt-4 border-t border-nude-200">
              <span className="text-[10px] uppercase tracking-[0.25em] text-brand-cocoa font-semibold block">
                Características Autoras:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-dark">
                {blazer.features?.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="font-light">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sizes & Color Swatches */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-nude-200">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-brand-cocoa block mb-1">Tamanhos</span>
                <div className="flex space-x-1.5 text-xs font-medium text-brand-dark">
                  {blazer.sizes?.map((sz) => (
                    <span key={sz} className="w-7 h-7 flex items-center justify-center rounded border border-nude-300 bg-cream-50">
                      {sz}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-brand-cocoa block mb-1">Tons</span>
                <div className="flex space-x-2">
                  {blazer.colors?.map((clr) => (
                    <span
                      key={clr.name}
                      title={clr.name}
                      className="w-5 h-5 rounded-full border border-nude-300 shadow-xs"
                      style={{ backgroundColor: clr.hex }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onSelectProduct(blazer)}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-dark text-cream-100 px-6 py-3.5 text-xs tracking-widest uppercase font-medium rounded hover:bg-black transition-colors"
              >
                <span>Conhecer Peça</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </button>

              <a
                href={`${STORE_CONTACT.whatsappUrl}&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Blazer%20Leclerc%20Alfaiataria`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-brand-dark border border-brand-dark/30 hover:border-brand-gold hover:text-brand-gold px-6 py-3.5 text-xs tracking-widest uppercase font-medium rounded transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-brand-gold" />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
