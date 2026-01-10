
import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Search,
  ArrowUp,
  X,
  ChevronRight,
  ShoppingBag,
  Heart,
  Plus,
  Instagram
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { LoyaltyCard } from '../components/LoyaltyCard';
import { ProductModal } from '../components/ProductModal';
import { Product, CartItem } from '../types';

export const MenuPage: React.FC = () => {
  const navigate = useNavigate();

  const user = useAppStore(state => state.user);
  const isAdmin = useAppStore(state => state.isAdmin);
  const products = useAppStore(state => state.products);
  const categories = useAppStore(state => state.categories);
  const activeCategory = useAppStore(state => state.activeCategory);
  const setActiveCategory = useAppStore(state => state.setActiveCategory);
  const addToCart = useAppStore(state => state.addToCart);
  const cart = useAppStore(state => state.cart);
  const favorites = useAppStore(state => state.favorites);
  const toggleFavorite = useAppStore(state => state.toggleFavorite);
  const orderStats = useAppStore(state => state.orderStats);

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [searchTerm, setSearchTerm] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isCartAnimating, setIsCartAnimating] = useState(false);

  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const loyaltyRef = useRef<HTMLDivElement>(null);
  const prevItemsCount = useRef(cartItemsCount);

  const isManualScroll = useRef(false);
  const scrollTimeout = useRef<any>(null);

  const HEADER_OFFSET = 140;

  useEffect(() => {
    if (cartItemsCount > prevItemsCount.current) {
      setIsCartAnimating(true);
      const timer = setTimeout(() => setIsCartAnimating(false), 300);
      return () => clearTimeout(timer);
    }
    prevItemsCount.current = cartItemsCount;
  }, [cartItemsCount]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFavorites = !showFavoritesOnly || favorites.includes(p.id);
      return matchesSearch && matchesFavorites;
    });
  }, [searchTerm, showFavoritesOnly, favorites, products]);

  const visibleCategories = useMemo(() => {
    return categories.filter(cat =>
      filteredProducts.some(p => p.categoryId === cat.id)
    );
  }, [filteredProducts, categories]);

  const handleAddToCart = (item: CartItem) => {
    addToCart(item);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!visibleCategories.length) return;

      if (loyaltyRef.current) {
        const threshold = loyaltyRef.current.offsetHeight + loyaltyRef.current.offsetTop + 120;
        setShowScrollTop(window.scrollY > threshold);
      } else {
        setShowScrollTop(window.scrollY > 400);
      }

      if (isManualScroll.current) return;
      const scrollPosition = window.scrollY + HEADER_OFFSET;

      let currentActiveId = visibleCategories[0]?.id || (categories.length > 0 ? categories[0].id : '');

      for (const cat of visibleCategories) {
        const element = categoryRefs.current[cat.id];
        if (element && element.offsetTop <= scrollPosition) {
          currentActiveId = cat.id;
        }
      }

      const currentStoredCategory = useAppStore.getState().activeCategory;
      if (currentActiveId && currentActiveId !== currentStoredCategory) {
        useAppStore.getState().setActiveCategory(currentActiveId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCategories, categories]);

  useEffect(() => {
    const tabElement = document.getElementById(`tab-${activeCategory}`);
    const container = tabsContainerRef.current;
    if (tabElement && container) {
      const containerWidth = container.offsetWidth;
      const tabLeft = tabElement.offsetLeft;
      const tabWidth = tabElement.offsetWidth;
      const scrollLeft = tabLeft - (containerWidth / 2) + (tabWidth / 2);
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeCategory]);

  const handleCategoryClick = (categoryId: string) => {
    const element = categoryRefs.current[categoryId];
    if (element) {
      let offsetPosition = 0;
      if (visibleCategories.length > 0 && visibleCategories[0].id === categoryId) {
        offsetPosition = 0;
      } else {
        const elementPosition = element.getBoundingClientRect().top;
        offsetPosition = elementPosition + window.scrollY - HEADER_OFFSET;
      }
      isManualScroll.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveCategory(categoryId);
      scrollTimeout.current = setTimeout(() => { isManualScroll.current = false; }, 1000);
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleToggleFavorite = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation();
    toggleFavorite(productId);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderProductCard = (product: Product, index: number) => (
    <div
      key={product.id}
      onClick={() => handleProductClick(product)}
      style={{ animationDelay: `${Math.min(index, 12) * 70}ms` }}
      className="bg-white p-3 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col active:scale-[0.96] animate-slide-up opacity-0 fill-mode-forwards relative overflow-hidden"
    >
      <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-gray-50 relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
        <button
          onClick={(e) => handleToggleFavorite(e, product.id)}
          className={`absolute top-1.5 right-1.5 p-1.5 rounded-full shadow-sm z-10 transition-all ${favorites.includes(product.id) ? 'bg-white text-red-500' : 'bg-white/80 backdrop-blur-md text-gray-500'
            }`}
        >
          <Heart size={14} fill={favorites.includes(product.id) ? "currentColor" : "none"} />
        </button>
      </div>
      <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2 leading-tight">{product.name}</h3>
      <div className="mt-auto flex items-center justify-between">
        <span className="font-bold text-gray-900">{product.price}₽</span>
        <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition-transform active:scale-90">
          <Plus size={18} strokeWidth={3} />
        </div>
      </div>
    </div>
  );

  if (!user) return null;

  return (
    <div className="pb-32 pt-6 bg-[#F4F2ED] min-h-screen relative">
      <div className="px-4 mb-4" ref={loyaltyRef}>
        <div className="animate-pop-in">
          <LoyaltyCard user={user} />
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-[#F4F2ED]/95 backdrop-blur-md pt-4 pb-1 shadow-sm transition-all duration-300 border-b border-gray-200/50">
        <div className="px-4 mb-4 flex gap-2">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Поиск в меню..."
              className="block w-full pl-10 pr-10 py-3 border-none rounded-xl bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-[#D6B24A] outline-none transition-all focus:scale-[1.01] placeholder:text-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`p-3 rounded-xl transition-all shadow-sm flex items-center justify-center ${showFavoritesOnly ? 'bg-red-50 text-red-500 ring-2 ring-red-100 scale-105' : 'bg-white text-gray-500 hover:text-gray-700'
              }`}
          >
            <Heart size={20} fill={showFavoritesOnly ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Скрываем категории, если включен фильтр избранного */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${showFavoritesOnly ? 'max-h-0 opacity-0' : 'max-h-14 opacity-100'}`}
        >
          <div ref={tabsContainerRef} className="flex overflow-x-auto space-x-2 px-4 pb-4 no-scrollbar scroll-smooth">
            {visibleCategories.map((cat) => (
              <button
                key={cat.id}
                id={`tab-${cat.id}`}
                onClick={() => handleCategoryClick(cat.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all border-2 ${activeCategory === cat.id ? 'bg-white border-[#2F4A5A] text-[#2F4A5A] shadow-md' : 'bg-white border-transparent text-slate-600'
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 space-y-8 mt-6">
        {showFavoritesOnly ? (
          <div className="animate-fade-in min-h-[300px]">
            <div className="flex items-center justify-between mb-6 px-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-gray-900">Избранные товары</h2>
                {filteredProducts.length > 0 && (
                  <span className="text-xs font-bold bg-red-100 text-red-500 px-2 py-0.5 rounded-full animate-pop-in">
                    {filteredProducts.length}
                  </span>
                )}
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {filteredProducts.map((product, index) => renderProductCard(product, index))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center animate-slide-up">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-5 relative">
                  <Heart size={36} className="text-slate-300" />
                  <div className="absolute top-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Plus size={12} className="text-slate-400" />
                  </div>
                </div>
                <p className="text-slate-600 font-bold mb-1 text-lg">Список избранного пуст</p>
                <p className="text-xs text-slate-400 max-w-[200px] leading-relaxed">
                  Отмечайте любимые товары сердечком, чтобы они появились здесь
                </p>
              </div>
            )}
          </div>
        ) : (
          <>
          {visibleCategories.map((cat) => {
          const categoryProducts = filteredProducts.filter(p => p.categoryId === cat.id);
          if (categoryProducts.length === 0) return null;

          return (
            <div key={cat.id} ref={(el) => { categoryRefs.current[cat.id] = el; }} className="scroll-mt-40">
              <h2 className="text-xl font-bold text-gray-900 mb-4 px-1">{cat.name}</h2>
              <div className="grid grid-cols-2 gap-4">
                {categoryProducts.map((product, index) => renderProductCard(product, index))}
              </div>
            </div>
          );
        })}
          </>
        )}

        <div className="pt-4 pb-6 text-center animate-fade-in stagger-6 opacity-0 fill-mode-forwards">
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-3">Мы в соцсетях</p>
          <div className="flex justify-center gap-4">
            <a href="https://instagram.com/sushihouse" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-500 hover:text-pink-500 transition-all active:scale-90 border border-gray-50">
              <Instagram size={24} />
            </a>
            <a href="https://wa.me/79991234567" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-500 hover:text-green-500 transition-all active:scale-90 border border-gray-50">
              <img src="https://static.vecteezy.com/system/resources/previews/045/602/361/large_2x/whatsapp-icon-logo-transparent-background-free-png.png" alt="WhatsApp" className="w-9 h-9 object-contain" />
            </a>
          </div>
          <p className="mt-4 text-[9px] text-slate-500 font-bold uppercase tracking-wider">CREATED BY &lt;PowerApp&gt;</p>
        </div>
      </div>

      {cartItemsCount > 0 && (
        <div className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isCartAnimating ? 'scale-105' : 'scale-100'}`}>
          <div
            onClick={() => navigate('/cart')}
            className={`bg-white/70 backdrop-blur-xl border border-white/40 p-1.5 pl-6 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] flex items-center gap-4 cursor-pointer active:scale-95 transition-all hover:bg-white/80 ${isCartAnimating ? 'ring-2 ring-blue-500/20' : ''}`}
          >
            <div className="flex flex-col items-start">
              <span className="text-sm font-black text-slate-900 leading-none mb-0.5">{cartTotal} ₽</span>
              <span className={`text-[10px] font-bold text-slate-600 leading-none transition-colors ${isCartAnimating ? 'text-blue-600' : ''}`}>
                {cartItemsCount} тов.
              </span>
            </div>
            <div className={`w-11 h-11 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 transition-transform ${isCartAnimating ? 'scale-110 rotate-12' : ''}`}>
              <ShoppingBag size={18} strokeWidth={2.5} className="animate-bounce-subtle" />
            </div>
          </div>
        </div>
      )}

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed ${cartItemsCount > 0 ? 'bottom-44' : 'bottom-28'} right-6 z-50 p-3 bg-white/80 backdrop-blur-md text-blue-600 rounded-full shadow-lg transition-all active:scale-90`}
        >
          <ArrowUp size={24} strokeWidth={2.5} />
        </button>
      )}

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddToCart={handleAddToCart} />
    </div>
  );
};
