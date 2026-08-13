import React from 'react';
import { Instagram, Heart, ExternalLink } from 'lucide-react';
import { INSTAGRAM_POSTS, STORE_CONTACT } from '../../data/products';

export const InstagramFeed: React.FC = () => {
  return (
    <section id="instagram" className="py-20 lg:py-32 px-4 sm:px-8 lg:px-12 bg-nude-50 border-t border-b border-nude-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 pb-6 border-b border-nude-200 gap-4">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-brand-gold block mb-1">
              Comunidade & Universo Visual
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-dark tracking-tight">
              FROM OUR INSTAGRAM
            </h2>
          </div>

          <a
            href={STORE_CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-brand-dark hover:text-brand-gold py-2.5 px-5 rounded border border-brand-dark/20 hover:border-brand-gold transition-all duration-300 bg-cream-100 shadow-xs"
          >
            <Instagram className="w-4 h-4 text-brand-gold" />
            <span>@loja.leclerc</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* 6 Photos Editorial Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={STORE_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden bg-cream-200 border border-nude-200 img-zoom-container shadow-xs"
            >
              <img
                src={post.image}
                alt="Instagram post Leclerc"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Dark Hover Overlay with Likes & Caption */}
              <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-cream-100">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-brand-gold" />
                </div>
                
                <div>
                  <div className="flex items-center gap-1 text-xs font-medium text-white mb-1">
                    <Heart className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    <span>{post.likes}</span>
                  </div>
                  <p className="text-[10px] text-cream-200/90 line-clamp-2 font-light">
                    {post.caption}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Centered CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={STORE_CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-dark text-cream-100 px-8 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded hover:bg-black transition-all shadow-md group"
          >
            <Instagram className="w-4 h-4 text-brand-gold group-hover:rotate-12 transition-transform" />
            <span>Ver no Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
};
