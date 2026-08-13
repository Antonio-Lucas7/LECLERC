import React, { useState } from 'react';
import { X, MessageCircle, CheckCircle2, Shield, Sparkles, Heart } from 'lucide-react';
import { Product } from '../../types';
import { STORE_CONTACT } from '../../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : '');
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0].name : '');
  const [copied, setCopied] = useState(false);

  const images = [product.image, product.secondaryImage, product.detailImage].filter(Boolean) as string[];

  const whatsappMessage = encodeURIComponent(
    `Olá! Vim pelo site oficial da Leclerc e gostaria de consultar disponibilidade da peça:\n\n*${product.name}*\nCategoria: ${product.category}\nTamanho: ${selectedSize || 'A definir'}\nCor: ${selectedColor || 'A definir'}\n\nPoderia me fornecer mais informações?`
  );

  const whatsappLink = `https://wa.me/5511998876655?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-brand-dark/70 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-cream-100 rounded-2xl shadow-2xl border border-nude-300 grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 animate-slideUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-cream-200 text-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-cream-100 transition-colors shadow-xs"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="md:col-span-6 flex flex-col space-y-4">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-cream-200 border border-nude-200 shadow-sm">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 bg-brand-dark text-cream-100 text-[9px] uppercase tracking-[0.25em] px-3 py-1 rounded">
                {product.badge}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex space-x-3 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImage === img ? 'border-brand-gold shadow-md' : 'border-nude-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Meta & Inquiry Actions */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-gold block">
              {product.category} — Leclerc Editorial
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif text-brand-dark tracking-tight font-semibold">
              {product.name}
            </h2>

            <div className="text-xl font-serif text-brand-dark font-semibold">
              {product.price || 'Sob Consulta Direct'}
            </div>

            <p className="text-xs sm:text-sm text-brand-cocoa font-light leading-relaxed">
              {product.detailedDescription || product.description}
            </p>

            {/* Features Checklist */}
            {product.features && (
              <div className="space-y-2 pt-2 border-t border-nude-200">
                <span className="text-[10px] uppercase tracking-wider text-brand-cocoa block font-medium">Destaques:</span>
                <ul className="space-y-1 text-xs text-brand-dark">
                  {product.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && (
              <div className="pt-2 border-t border-nude-200">
                <span className="text-[10px] uppercase tracking-wider text-brand-cocoa block mb-2 font-medium">
                  Selecione o Tamanho:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 text-xs font-medium rounded border transition-all ${
                        selectedSize === sz
                          ? 'bg-brand-dark text-cream-100 border-brand-dark shadow-xs'
                          : 'bg-transparent text-brand-dark border-nude-300 hover:border-brand-gold'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Swatches */}
            {product.colors && (
              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-wider text-brand-cocoa block mb-2 font-medium">
                  Tom Selecionado: <span className="text-brand-dark font-normal">{selectedColor}</span>
                </span>
                <div className="flex space-x-2">
                  {product.colors.map((clr) => (
                    <button
                      key={clr.name}
                      onClick={() => setSelectedColor(clr.name)}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
                        selectedColor === clr.name ? 'border-brand-gold scale-110 shadow-sm' : 'border-nude-300 opacity-80'
                      }`}
                      style={{ backgroundColor: clr.hex }}
                      title={clr.name}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-4 border-t border-nude-200">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-brand-dark text-cream-100 py-3.5 px-6 rounded text-xs uppercase tracking-[0.2em] font-medium hover:bg-black transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-brand-gold" />
              <span>Consultar via WhatsApp</span>
            </a>

            <a
              href={STORE_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-cream-200 text-brand-dark py-3 px-6 rounded text-xs uppercase tracking-[0.2em] font-medium hover:bg-nude-200 transition-colors border border-nude-300"
            >
              <span>Ver Fotos no Instagram</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
