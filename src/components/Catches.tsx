/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingCart, Star, Clock, MapPin } from 'lucide-react';
import { PRODUCTS } from '../data';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Catches() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const highlightedCatches = PRODUCTS.filter(p => p.category === 'fish').slice(0, 4);

  return (
    <section id="catches" className="py-24 px-6 md:px-12 bg-linear-to-b from-ocean-deep via-[#002B66] to-ocean-deep">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-ocean-aqua uppercase tracking-[0.3em] text-sm font-bold block mb-2"
            >
              Fresh From the Boat
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold">Today's <span className="text-gradient">Premium Catches</span></h2>
          </div>
          <p className="text-white/60 max-w-md">
            Our traditional fishermen have just arrived at the harbor. Hand-selected for quality, these are the freshest seafood options available today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlightedCatches.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative glass card-gradient rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-ocean-aqua/10 transition-all duration-500"
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4">
                  <span className="badge-gradient px-3 py-0.5 text-[10px] font-bold rounded-full text-black">
                    {product.freshness}
                  </span>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-ocean-deep/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-ocean-aqua/80">{product.category}</span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-xs text-white/80">4.9</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-ocean-aqua transition-colors">{product.name}</h3>
                <p className="text-2xl font-display font-black text-white mb-4">{product.price}</p>
                
                <div className="flex items-center gap-3 text-white/50 text-xs mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Express Delivery</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>Coastal Origin</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => navigate('/marketplace')}
                    className="py-2.5 glass rounded-lg text-xs font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                  >
                    DETAILS
                  </button>
                  <button 
                    onClick={() => addToCart(product)}
                    className="py-2.5 bg-ocean-aqua text-ocean-deep rounded-lg text-xs font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
