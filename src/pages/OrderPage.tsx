/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingCart, CheckCircle2, ChevronRight, MapPin, Phone, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function OrderPage() {
  const { cart, subtotal } = useCart();
  const [step, setStep] = useState(1);
  const deliveryCharge = 49;
  const total = subtotal + deliveryCharge;

  return (
    <div className="pt-32 pb-24 px-8 min-h-screen max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Form/Progress */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${
                  step >= s ? "bg-ocean-aqua text-black border-ocean-aqua" : "border-white/10 text-white/40"
                }`}>
                  {step > s ? <CheckCircle2 size={16} /> : s}
                </div>
                {s < 3 && <div className={`w-12 h-[1px] ${step > s ? "bg-ocean-aqua" : "bg-white/10"}`} />}
              </div>
            ))}
          </div>

          <div className="glass card-gradient p-8 md:p-12 rounded-[40px] border-white/5">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-4xl font-black mb-2 uppercase tracking-tighter">Delivery <span className="text-gradient">Details</span></h2>
                <p className="text-slate-400 mb-8">Tell us where to bring your fresh catch.</p>
                
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-ocean-aqua">Full Name</label>
                      <input type="text" required placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-ocean-aqua outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-ocean-aqua">Phone Number</label>
                      <input type="tel" required placeholder="+91 98765 43210" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-ocean-aqua outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-ocean-aqua">Delivery Address</label>
                    <textarea required placeholder="House No, Street, Landmark, Coastal Area..." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 h-32 focus:border-ocean-aqua outline-none transition-all resize-none"></textarea>
                  </div>
                  <button type="submit" disabled={cart.length === 0} className="w-full py-4 bg-ocean-aqua text-black font-black rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-ocean-aqua/20 disabled:opacity-50 disabled:cursor-not-allowed">
                    {cart.length === 0 ? "CART IS EMPTY" : "CONTINUE TO PAYMENT"} <ChevronRight size={18} />
                  </button>
                </form>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-4xl font-black mb-2 uppercase tracking-tighter">Secure <span className="text-gradient">Payment</span></h2>
                <p className="text-slate-400 mb-8">Choose your preferred payment method.</p>
                
                <div className="space-y-4">
                  {['Credit/Debit Card', 'UPI / Google Pay', 'Cash on Fresh Delivery'].map((method) => (
                    <div key={method} className="glass p-6 rounded-2xl flex items-center justify-between cursor-pointer hover:border-ocean-aqua/50 transition-all group">
                      <div className="flex items-center gap-4">
                        <CreditCard className="text-ocean-aqua" />
                        <span className="font-bold">{method}</span>
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-white/10 group-hover:border-ocean-aqua transition-colors" />
                    </div>
                  ))}
                  
                  <div className="pt-8 flex flex-col gap-4">
                    <button onClick={() => setStep(3)} className="w-full py-4 bg-ocean-aqua text-black font-black rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all">
                      PLACE YOUR ORDER
                    </button>
                    <button onClick={() => setStep(1)} className="text-white/40 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                      Back to details
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-24 h-24 bg-ocean-aqua/20 border border-ocean-aqua rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <CheckCircle2 className="text-ocean-aqua w-12 h-12" />
                </div>
                <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">Order <span className="text-gradient">Caught!</span></h2>
                <p className="text-slate-400 max-w-sm mx-auto mb-10">Your order has been received. Our fishermen are sorting your catch right now. You'll receive a tracking link via SMS.</p>
                <div className="flex flex-col gap-4">
                   <button className="w-full py-4 glass rounded-2xl font-bold hover:bg-white/10 transition-colors">TRACK SHIPMENT</button>
                   <a href="/" className="text-ocean-aqua font-bold uppercase tracking-widest text-xs">Return to Home</a>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full lg:w-96">
          <div className="glass p-8 rounded-[40px] border-white/5 sticky top-32">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest border-b border-white/10 pb-4">Order Summary</h3>
            
            <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/10">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <p className="text-xs text-white/40 uppercase mb-2">{item.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-ocean-aqua font-bold">{item.price}</span>
                      <span className="text-[10px] text-white/20">QTY: {item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
              {cart.length === 0 && (
                <div className="text-center py-8 text-white/20 italic text-sm">
                  Your cart is empty
                </div>
              )}
            </div>

            <div className="space-y-4 pt-8 border-t border-white/10">
              <div className="flex justify-between text-sm text-white/40">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-white/40">
                <span>Delivery (Fresh Charge)</span>
                <span>₹{deliveryCharge.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xl font-black pt-4 border-t border-white/5">
                <span>TOTAL</span>
                <span className="text-ocean-aqua">₹{total.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-12 p-6 glass rounded-2xl border-white/5 flex items-center gap-4">
              <div className="bg-ocean-aqua/10 p-2 rounded-lg">
                 <ShoppingCart size={20} className="text-ocean-aqua" />
              </div>
              <p className="text-xs text-slate-500 leading-relaxed italic">"Freshness guaranteed within 90 minutes of harbor landing."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
