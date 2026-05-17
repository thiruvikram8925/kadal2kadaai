/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, X, Plus, Minus, Trash2, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredItems = cart.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md glass border-l border-white/10 z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-ocean-deep/50">
               <div className="flex items-center gap-3">
                  <ShoppingCart className="text-ocean-aqua" />
                  <h2 className="text-xl font-bold uppercase tracking-widest">Your Cart</h2>
               </div>
               <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                 <X size={24} />
               </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 bg-white/5 border-b border-white/10">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Search in cart..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-ocean-aqua outline-none transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
               {filteredItems.length > 0 ? (
                 <div className="space-y-4">
                   {filteredItems.map((item) => (
                     <motion.div 
                       layout
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       key={item.id} 
                       className="flex gap-4 p-4 glass rounded-2xl border-white/5"
                     >
                       <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/10">
                         <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                       </div>
                       <div className="flex-1">
                         <div className="flex justify-between items-start mb-1">
                           <h3 className="font-bold text-sm text-white">{item.name}</h3>
                           <button 
                             onClick={() => removeFromCart(item.id)}
                             className="text-white/20 hover:text-red-400 transition-colors"
                           >
                             <Trash2 size={14} />
                           </button>
                         </div>
                         <p className="text-[10px] text-white/40 uppercase tracking-widest mb-3">{item.category}</p>
                         <div className="flex items-center justify-between">
                            <span className="text-ocean-aqua font-bold text-sm">{item.price}</span>
                            <div className="flex items-center gap-3 bg-white/5 rounded-lg px-2 py-1 border border-white/10">
                               <button 
                                 onClick={() => updateQuantity(item.id, -1)}
                                 className="text-white/40 hover:text-white transition-colors"
                               >
                                 <Minus size={12} />
                               </button>
                               <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                               <button 
                                 onClick={() => updateQuantity(item.id, 1)}
                                 className="text-white/40 hover:text-white transition-colors"
                               >
                                 <Plus size={12} />
                               </button>
                            </div>
                         </div>
                       </div>
                     </motion.div>
                   ))}
                 </div>
               ) : (
                 <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                    <WavesIcon className="w-16 h-16 mb-4 text-ocean-aqua/50" />
                    <p className="text-lg font-light">
                      {searchQuery ? "No matching catch found." : "Your ocean catch is empty."}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] mt-2">
                       {searchQuery ? "Try searching for something else" : "Start exploring today's haul"}
                    </p>
                 </div>
               )}
            </div>

             <div className="p-6 bg-ocean-deep/80 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between text-white/60">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-ocean-aqua">₹{subtotal.toLocaleString()}</span>
                </div>
                <button 
                  onClick={() => {
                    onClose();
                    // Navigate logic usually handled by Link or navigate hook, 
                    // but since this is a component, we can use a Link if we import it or just let the button be.
                    // Let's assume the user goes to /order.
                    window.location.href = '/order';
                  }}
                  className="w-full py-4 bg-ocean-aqua text-ocean-deep font-black rounded-xl hover:bg-white transition-all transform active:scale-95 shadow-lg shadow-ocean-aqua/20"
                >
                  CHECKOUT NOW
                </button>
               <p className="text-[10px] text-center text-white/30 uppercase tracking-widest">
                 Safe & Secure Coastal Checkout
               </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function WavesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}
