import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { NewEditSection } from './components/home/NewEditSection';
import { FeaturedProducts } from './components/home/FeaturedProducts';
import { EditorialProductSpotlight } from './components/home/EditorialProductSpotlight';
import { CategoriesGrid } from './components/home/CategoriesGrid';
import { BrandStorySection } from './components/home/BrandStorySection';
import { NewInSection } from './components/home/NewInSection';
import { InstagramFeed } from './components/home/InstagramFeed';
import { FinalCTA } from './components/home/FinalCTA';
import { Footer } from './components/layout/Footer';
import { ProductModal } from './components/modals/ProductModal';
import { ContactModal } from './components/modals/ContactModal';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { Product } from './types';

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream-100 text-brand-charcoal font-sans selection:bg-brand-gold/30 selection:text-brand-dark overflow-x-hidden">
      {/* Fixed Sticky Header */}
      <Header onOpenContact={() => setContactModalOpen(true)} />

      {/* Hero Section (Magazine Editorial Cover) */}
      <Hero
        onExploreClick={() => scrollToSection('produtos')}
        onAboutClick={() => scrollToSection('sobre')}
      />

      {/* New Edit / Nova Coleção Editorial Section */}
      <NewEditSection />

      {/* Featured Products / Curated Pieces Catalog */}
      <FeaturedProducts onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* Editorial Product Spotlight (Flagship Blazer Feature) */}
      <EditorialProductSpotlight onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* Categories Visual Photography Grid */}
      <CategoriesGrid
        onCategorySelect={() => scrollToSection('produtos')}
      />

      {/* Institutional Brand Story ("É Tudo Sobre Você") */}
      <BrandStorySection />

      {/* New In Highlights */}
      <NewInSection onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* Instagram Feed (@loja.leclerc) */}
      <InstagramFeed />

      {/* Final Call to Action (Dark Mode Closing Section) */}
      <FinalCTA onExploreClick={() => scrollToSection('produtos')} />

      {/* Minimal Luxury Footer */}
      <Footer />

      {/* Interactive Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

export default App;
