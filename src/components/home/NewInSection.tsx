import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../types';

interface NewInSectionProps {
  onSelectProduct: (product: Product) => void;
}

export const NewInSection: React.FC<NewInSectionProps> = ({ onSelectProduct }) => {
  const newInProducts = PRODUCTS.filter((p) => p.isNewIn || p.badge === 'Nova Coleção').slice(0, 4);

  return (
    <section id="novidades" className="py-20 lg:py-28 px-4 sm:px-8 lg:px-12 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-brand-gold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
              Recém Chegadas
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-brand-dark tracking-tight mb-2">
            NEW IN
          </h2>
          <p className="text-xs sm:text-sm text-brand-cocoa font-light tracking-wide">
            Novidades selecionadas com exclusividade para você.
          </p>
        </div>

        {/* 4 Circular Editorial Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {newInProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group cursor-pointer flex flex-col items-center text-center p-4 rounded-xl bg-nude-50 border border-nude-200/80 hover:border-brand-gold transition-all duration-500 shadow-subtle hover:shadow-card"
            >
              {/* Oval/Circular Fashion Framed Image */}
              <div className="relative w-36 h-48 sm:w-44 sm:h-56 mb-4 rounded-[100px] overflow-hidden border-2 border-nude-300 group-hover:border-brand-gold transition-colors duration-500 img-zoom-container shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-cream-100 flex items-center justify-center text-brand-dark shadow">
                    <ArrowUpRight className="w-4 h-4 text-brand-gold" />
                  </div>
                </div>
              </div>

              <span className="text-[9px] uppercase tracking-[0.25em] text-brand-cocoa block mb-1">
                {product.category}
              </span>
              <h3 className="font-serif text-base text-brand-dark group-hover:text-brand-gold transition-colors line-clamp-1 font-semibold">
                {product.name}
              </h3>
              <span className="text-xs font-serif font-semibold text-brand-dark mt-2">
                {product.price || 'Sob Consulta'}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
