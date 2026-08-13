import React, { useState } from 'react';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { Product } from '../../types';
import { PRODUCTS } from '../../data/products';

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Alfaiataria', 'Vestidos', 'Blusas', 'Calças', 'Conjuntos', 'Acessórios'];

  const filteredProducts = activeCategory === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="produtos" className="py-20 lg:py-32 px-4 sm:px-8 lg:px-12 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-brand-gold block mb-2">
            Seleção Autoral
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark tracking-tight mb-4">
            PEÇAS EM DESTAQUE
          </h2>
          <p className="text-sm text-brand-cocoa font-light leading-relaxed">
            Uma curadoria especial de peças desenhadas para proporcionar sofisticação silenciosa, conforto e atemporalidade.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12 border-b border-nude-200 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 rounded-full border ${
                activeCategory === cat
                  ? 'bg-brand-dark text-cream-100 border-brand-dark font-medium shadow-sm'
                  : 'bg-transparent text-brand-cocoa border-nude-200 hover:border-brand-gold hover:text-brand-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group cursor-pointer flex flex-col bg-cream-50 rounded-lg overflow-hidden border border-nude-200/70 hover:border-brand-gold/50 shadow-subtle hover:shadow-card transition-all duration-500"
            >
              {/* Product Image Wrapper */}
              <div className="relative aspect-[3/4] bg-cream-200 overflow-hidden img-zoom-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Secondary Image Hover Reveal */}
                {product.secondaryImage && (
                  <img
                    src={product.secondaryImage}
                    alt={`${product.name} look`}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />
                )}

                {/* Badge if present */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-brand-dark/90 text-cream-100 text-[9px] uppercase tracking-[0.25em] px-2.5 py-1 rounded backdrop-blur-sm border border-brand-gold/30">
                    {product.badge}
                  </div>
                )}

                {/* Hover Quick View Trigger Overlay */}
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="bg-cream-100 text-brand-dark text-xs uppercase tracking-widest py-2.5 px-5 rounded shadow-lg font-medium flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Ver Peça</span>
                  </span>
                </div>
              </div>

              {/* Card Meta Info */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-brand-cocoa block mb-1">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-brand-dark group-hover:text-brand-gold transition-colors duration-300 line-clamp-1 font-semibold">
                    {product.name}
                  </h3>
                  <p className="text-xs text-brand-cocoa/80 line-clamp-2 font-light mt-1">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-nude-200/60 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-serif font-semibold text-brand-dark">
                    {product.price || 'Sob Consulta'}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-brand-gold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Detalhes</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
