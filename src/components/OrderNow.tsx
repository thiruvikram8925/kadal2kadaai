/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OrderNow() {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial from-ocean-aqua/10 via-transparent to-transparent opacity-50" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 glass card-gradient p-12 md:p-24 rounded-[40px] text-center border-white/5 border-t-white/20">
         <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           className="flex justify-center mb-8"
         >
           <div className="w-20 h-20 rounded-full bg-ocean-aqua/20 border border-ocean-aqua flex items-center justify-center animate-pulse">
              <Anchor className="text-ocean-aqua w-10 h-10" />
           </div>
         </motion.div>

         <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tighter">
           READY FOR THE <br/><span className="text-gradient cyan-glow">FRESH CATCH?</span>
         </h2>

         <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto font-light leading-relaxed">
           Join thousands of families getting their premium seafood delivered directly from the ocean. No middleman, no preservatives, just pure coastal quality.
         </p>

         <div className="flex flex-col items-center gap-6">
            <Link to="/order" className="px-12 py-6 bg-ocean-aqua text-black text-2xl font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-ocean-aqua/40 text-center">
               ORDER TODAY'S HAUL
            </Link>
            <div className="flex items-center gap-4 text-white/30 text-xs font-bold uppercase tracking-[0.2em]">
               <span>FAST DELIVERY</span>
               <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
               <span>100% HYGIENIC</span>
               <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
               <span>FRESHNESS GUARANTEED</span>
            </div>
         </div>
      </div>
    </section>
  );
}
