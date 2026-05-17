/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, Grid, List as ListIcon, ShoppingCart, Heart } from 'lucide-react';
import { PRODUCTS, Product } from '../data';
import { cn } from '../lib/utils';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'freshness' | 'price-asc' | 'price-desc'>('freshness');

  const categories = ['all', 'fish', 'shellfish', 'crustacean', 'specialty'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      if (sortBy === 'price-desc') return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      return 0; // Default to natural order (freshness in data)
    });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <section id="products" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          {/* Header & Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-5xl font-bold mb-4">Our <span className="text-gradient">Marketplace</span></h2>
              <p className="text-white/40">Browse full collection of coastal treasures.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 flex-1 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search fresh seafood..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 pl-12 pr-4 glass rounded-xl focus:ring-2 focus:ring-ocean-aqua outline-hidden transition-all"
                />
              </div>
              <div className="flex gap-2">
                 <select 
                   value={sortBy}
                   onChange={(e) => setSortBy(e.target.value as any)}
                   className="glass px-4 py-3 rounded-xl text-sm outline-hidden cursor-pointer hover:bg-white/10"
                 >
                   <option value="freshness">Sort: Freshness</option>
                   <option value="price-asc">Price: Low to High</option>
                   <option value="price-desc">Price: High to Low</option>
                 </select>
                 <button className="glass p-3 rounded-xl hover:bg-white/10">
                   <SlidersHorizontal className="w-5 h-5" />
                 </button>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all",
                  activeCategory === cat ? "badge-gradient text-black" : "glass text-white/40 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group glass card-gradient rounded-3xl overflow-hidden hover:border-ocean-aqua/30 transition-all"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4">
                       <button className="p-2 glass rounded-full hover:bg-red-500 hover:text-white transition-all text-white/60">
                         <Heart className="w-4 h-4" />
                       </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-white">{product.price}</span>
                      <span className="text-[10px] bg-white/10 px-2 py-1 rounded uppercase tracking-tighter text-white/60">
                        {product.category}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => addToCart(product)}
                        className="py-3 bg-ocean-aqua/10 border border-ocean-aqua/30 text-ocean-aqua font-bold text-xs rounded-xl hover:bg-ocean-aqua hover:text-ocean-deep transition-all flex items-center justify-center gap-2"
                      >
                         <ShoppingCart className="w-4 h-4" />
                         CART
                      </button>
                      <button 
                        onClick={() => {
                          addToCart(product);
                          navigate('/order');
                        }}
                        className="py-3 bg-white text-black font-bold text-xs rounded-xl hover:bg-ocean-aqua transition-all flex items-center justify-center gap-2"
                      >
                         ORDER NOW
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredProducts.length === 0 && (
              <div className="col-span-full py-24 text-center glass rounded-3xl">
                 <p className="text-white/40 text-lg">No catch found in this deep blue...</p>
                 <button 
                   onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                   className="text-ocean-aqua font-bold underline mt-4"
                 >
                   Clear all filters
                 </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
