/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from '../components/Hero';
import Catches from '../components/Catches';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Truck, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Short Catch Highlights */}
      <Catches />
      
      {/* Quick Process Snippet */}
      <section className="py-24 px-8 bg-ocean-navy/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center">
            <Anchor className="text-ocean-aqua w-12 h-12 mb-6" />
            <h3 className="text-xl font-bold mb-4">Direct Sourcing</h3>
            <p className="text-slate-400 text-sm">No middlemen. We work directly with coastal fishing communities.</p>
          </div>
          <div className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center">
            <ShieldCheck className="text-ocean-aqua w-12 h-12 mb-6" />
            <h3 className="text-xl font-bold mb-4">Quality Lab Tested</h3>
            <p className="text-slate-400 text-sm">Every batch undergoes 24 rigorous freshness and hygiene tests.</p>
          </div>
          <div className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center">
            <Truck className="text-ocean-aqua w-12 h-12 mb-6" />
            <h3 className="text-xl font-bold mb-4">Arctic Logistics</h3>
            <p className="text-slate-400 text-sm">End-to-end cold chain maintains temperatures below 4°C.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to="/process" className="text-ocean-aqua font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:gap-4 transition-all">
            See our full process <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA to Marketplace */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto glass card-gradient p-12 md:p-20 rounded-[40px] flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
           <div className="flex-1">
             <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Ready to taste the <br/> <span className="text-gradient cyan-glow">Purest Catch?</span></h2>
             <p className="text-slate-400 max-w-md mb-10">From Bluefin Tuna to Jumbo Mud Crabs, explore our curated selection of today's hauls.</p>
             <div className="flex flex-wrap gap-4 justify-center md:justify-start">
               <Link to="/marketplace" className="px-10 py-4 bg-ocean-aqua text-black font-extrabold rounded-full hover:scale-105 active:scale-95 transition-all inline-block">
                 OPEN MARKETPLACE
               </Link>
               <Link to="/order" className="px-10 py-4 glass text-white font-extrabold rounded-full hover:bg-white/10 transition-all inline-block border border-white/10">
                 ORDER NOW
               </Link>
             </div>
           </div>
           <div className="flex-1 relative">
             <motion.img 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               src="/images/fresh_prawns_ice_1778987143465.png" 
               className="w-full max-w-sm mx-auto drop-shadow-[0_20px_50px_rgba(34,211,238,0.3)] rounded-3xl"
             />
           </div>
        </div>
      </section>
    </div>
  );
}
