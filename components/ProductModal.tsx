
import React from 'react';
import { X, ArrowLeft, Plus, Heart } from 'lucide-react';
import { Product, CartItem } from '../types';
import { useAppStore } from '../store/useAppStore';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const favorites = useAppStore(state => state.favorites);
  const toggleFavorite = useAppStore(state => state.toggleFavorite);

  if (!isOpen || !product) return null;

  const isFavorite = favorites.includes(product.id);

  const handleAddToCart = () => {
    const uniqueId = `${product.id}-default`;

    onAddToCart({
      uniqueId,
      productId: product.id,
      productName: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
      selectedModifiers: [],
    });
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-white flex flex-col animate-slide-up font-sans">
      <div className="flex justify-between items-center p-4 border-b border-gray-50 bg-white z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-gray-800 active:opacity-60 transition-opacity active:scale-90">
          <ArrowLeft size={24} />
        </button>
        <h1 className="font-bold text-lg tracking-wide uppercase text-gray-900 animate-fade-in">ДЕТАЛИ</h1>
        <button onClick={onClose} className="p-2 -mr-2 text-gray-800 active:opacity-60 transition-opacity active:scale-90">
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar bg-white">
        <div className="w-full aspect-square flex items-center justify-center p-8 bg-gray-50 animate-pop-in">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        <div className="px-6 pb-32 animate-slide-up stagger-1">
          <div className="flex items-center justify-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
            <button
              onClick={handleToggleFavorite}
              className={`p-1.5 rounded-full transition-all active:scale-90 ${
                isFavorite ? 'text-red-500 bg-red-50' : 'text-gray-300 bg-gray-50'
              }`}
            >
              <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Описание</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-100 p-4 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-20 animate-slide-up stagger-2">
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 active:bg-blue-700 text-white rounded-2xl px-6 h-14 flex items-center justify-between font-bold shadow-lg shadow-blue-200 transition-all duration-200 active:scale-95"
        >
          <span className="text-lg">{product.price} ₽</span>
          <Plus size={24} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};
