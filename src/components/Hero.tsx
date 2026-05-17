/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown, Fish } from 'lucide-react';

import { Link } from 'react-router-dom';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/hero_seafood_beach_1778987055670.png" 
          alt="Ocean Background" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ocean-deep/50 via-transparent to-ocean-deep" />
      </motion.div>

      {/* Floating Animated Elements (Fish) */}
      <div className="absolute inset-0 z-5 pointer-events-none">
         {[...Array(6)].map((_, i) => (
           <motion.div
             key={i}
             initial={{ 
               x: Math.random() * 100 + "%", 
               y: Math.random() * 100 + "%",
               opacity: 0 
             }}
             animate={{ 
               x: ["-10%", "110%"],
               y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
               opacity: [0, 0.2, 0],
               scale: [0.5, 1, 0.5]
             }}
             transition={{ 
               duration: 15 + Math.random() * 10, 
               repeat: Infinity, 
               ease: "linear",
               delay: i * 2
             }}
             className="absolute"
           >
             <Fish className="text-ocean-aqua w-8 h-8 rotate-12" />
           </motion.div>
         ))}
      </div>

      {/* Animated Waves Overlay (Visual simulation) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30">
        <div className="absolute bottom-0 w-full h-64 bg-linear-to-t from-ocean-aqua/20 to-transparent animate-pulse" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 w-full max-w-7xl px-8 flex flex-col md:flex-row items-center gap-12"
      >
        <div className="flex-1 text-left">
           <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
           >
              <div className="mb-8">
                <div className="badge-gradient w-fit px-4 py-1 rounded-full text-[12px] font-bold uppercase tracking-widest">
                  Coastal Premium • Direct from Sea
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter mb-6">
                FRESH FROM<br/>
                <span className="text-gradient cyan-glow">OCEAN TO</span><br/>
                KITCHEN.
              </h1>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md font-light mb-10">
                Directly sourced from the traditional fishermen. Zero middle-men. Zero preservatives. 100% Sea-fresh.
              </p>

              <div className="flex gap-4 mt-8">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-ocean-deep bg-slate-700 flex items-center justify-center text-[10px] font-bold">JP</div>
                  <div className="w-10 h-10 rounded-full border-2 border-ocean-deep bg-cyan-900 flex items-center justify-center text-[10px] font-bold">MK</div>
                  <div className="w-10 h-10 rounded-full border-2 border-ocean-deep bg-blue-900 flex items-center justify-center text-[10px] font-bold">RA</div>
                </div>
                <div className="text-xs flex flex-col justify-center">
                  <span className="font-bold text-white-foam">4.9/5 Rating</span>
                  <span className="opacity-50">From 2k+ Customers</span>
                </div>
              </div>
           </motion.div>

           <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/marketplace" className="px-8 py-4 bg-ocean-aqua text-black text-sm font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-ocean-aqua/20">
                EXPLORE MARKETPLACE
              </Link>
              <Link to="/process" className="px-8 py-4 glass text-white-foam text-sm font-bold rounded-full hover:bg-white/10 transition-all border border-white/10">
                LEARN OUR PROCESS
              </Link>
           </div>
        </div>

        <div className="hidden lg:block flex-1 relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-radial from-ocean-aqua/10 via-transparent to-transparent opacity-50 blur-3xl" />
           <motion.div
             animate={{ y: [0, -20, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="relative z-10 glass card-gradient p-4 rounded-[40px] border-white/5"
           >
              <img 
                src="/images/fresh_crab_ice_1778987126193.png" 
                alt="Featured Catch" 
                className="w-full h-auto rounded-[30px] shadow-2xl"
              />
           </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <ArrowDown className="text-ocean-aqua w-8 h-8" />
      </motion.div>
    </section>
  );
}
