import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../../data/products';

interface CategoriesGridProps {
  onCategorySelect?: (categoryName: string) => void;
}

export const CategoriesGrid: React.FC<CategoriesGridProps> = ({ onCategorySelect }) => {
  return (
    <section id="categorias" className="py-20 lg:py-32 px-4 sm:px-8 lg:px-12 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-6 border-b border-nude-200 gap-4">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-brand-gold block mb-2">
              Universo Leclerc
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark tracking-tight">
              CATEGORIAS EDITORIAIS
            </h2>
          </div>
          <p className="text-xs text-brand-cocoa font-light max-w-sm">
            Navegue por nossas linhas pensadas para compor um guarda-roupa inteligente, versátil e sofisticado.
          </p>
        </div>

        {/* 6 Category Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onCategorySelect && onCategorySelect(cat.name)}
              className="group cursor-pointer relative rounded-xl overflow-hidden bg-cream-200 border border-nude-200 shadow-subtle hover:shadow-card transition-all duration-500 aspect-[4/5] img-zoom-container flex flex-col justify-end p-6 sm:p-8"
            >
              {/* Category Photography Background */}
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/30 to-transparent opacity-80 group-hover:opacity-75 transition-opacity duration-500" />

              {/* Category Meta Content */}
              <div className="relative z-10 text-cream-100 flex flex-col justify-between h-full">
                {/* Top Badge */}
                <div className="flex justify-between items-center">
                  <span className="text-[9px] uppercase tracking-[0.3em] bg-white/20 backdrop-blur-md px-3 py-1 rounded text-white border border-white/30">
                    {cat.count} Peças
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Title & Description */}
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-brand-goldLight transition-colors duration-300 font-semibold mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-cream-200/90 font-light line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
