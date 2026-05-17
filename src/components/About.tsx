/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Map, Users, Heart, Anchor } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-linear-to-b from-ocean-deep to-[#000a1a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="rounded-3xl overflow-hidden aspect-square relative group"
              >
                <img src="/images/process_fishing_boat_1778987072246.png" alt="Fish Catching" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <span className="text-[10px] font-bold text-ocean-aqua uppercase tracking-widest bg-black/60 px-2 py-1 rounded">Ocean Capture</span>
                </div>
              </motion.div>
              <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.1 }}
                className="rounded-3xl overflow-hidden aspect-[3/4] -mt-12 relative group"
              >
                <img src="/images/coastal_fish_market_1778987733574.png" alt="Fish Market" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <span className="text-[10px] font-bold text-ocean-aqua uppercase tracking-widest bg-black/60 px-2 py-1 rounded">Traditional Market</span>
                </div>
              </motion.div>
              <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.2 }}
                className="rounded-3xl overflow-hidden aspect-[4/3] -mt-8 relative group"
              >
                <img src="/images/seafood_factory_line_1778987751867.png" alt="Fish Factory" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <span className="text-[10px] font-bold text-ocean-aqua uppercase tracking-widest bg-black/60 px-2 py-1 rounded">Hygienic Facility</span>
                </div>
              </motion.div>
              <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.3 }}
                className="rounded-3xl overflow-hidden aspect-square relative group"
              >
                <img src="/images/fresh_crab_ice_1778987126193.png" alt="Fresh Catch" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <span className="text-[10px] font-bold text-ocean-aqua uppercase tracking-widest bg-black/60 px-2 py-1 rounded">Premium Selection</span>
                </div>
              </motion.div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass p-8 rounded-full flex flex-col items-center justify-center animate-bounce duration-[3000ms]">
               <Anchor className="w-8 h-8 text-ocean-aqua mb-2" />
               <span className="text-[10px] font-black text-center tracking-widest leading-tight">SINCE<br/>2024</span>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <span className="text-ocean-aqua uppercase tracking-[0.3em] text-sm font-bold block mb-4">Our Ecosystem</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.95] tracking-tighter">Sea, Market <br/><span className="text-gradient cyan-glow">& Factory.</span></h2>
            
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
              Kadal to Kadaai follows a complete vertical integration. We own the journey from the moment the net leaves the ocean, through the vibrant local auctions, into our high-tech processing facility, and finally to your kitchen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
               <div className="flex gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                    <Users className="w-6 h-6 text-ocean-aqua" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-white-foam">Artisanal Sourcing</h4>
                    <p className="text-sm text-slate-500">Supporting traditional coastal fishing with fair trade practices.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                    <Map className="w-6 h-6 text-ocean-aqua" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-white-foam">Hygienic Chain</h4>
                    <p className="text-sm text-slate-500">Industry-leading ISO certified seafood processing factory.</p>
                  </div>
               </div>
            </div>

            <button className="flex items-center gap-3 py-4 px-8 glass rounded-2xl group transition-all hover:bg-white/10">
               <Heart className="w-5 h-5 text-red-400 group-hover:scale-125 transition-transform" />
               <span className="font-bold">READ OUR FULL STORY</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
