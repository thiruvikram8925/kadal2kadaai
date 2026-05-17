/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Anchor, ShieldCheck, Droplets, ThermometerSnowflake, PackageCheck, Truck } from 'lucide-react';

const steps = [
  {
    title: 'Fresh Catch',
    desc: 'Our local fisherman set sail at 4AM to bring you the finest catch directly from the deep blue.',
    icon: Anchor,
    image: '/images/process_fishing_boat_1778987072246.png',
  },
  {
    title: 'Quality Check',
    desc: 'Every single piece is inspected for freshness, texture, and oceanic health standards.',
    icon: ShieldCheck,
    image: '/images/process_quality_check_1778987088241.png',
  },
  {
    title: 'Hygienic Cleaning',
    desc: 'Washed with purified water and handled with 100% hygienic protocols in our stainless-steel facility.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Cold Storage',
    desc: 'Maintained at strict sub-zero temperatures to preserve that sea-to-plate authenticity.',
    icon: ThermometerSnowflake,
    image: '/images/cold_storage_fish_1778995081069.png',
  },
  {
    title: 'Safe Packaging',
    desc: 'Eco-friendly vacuum sealing ensures zero contamination and 100% locked-in freshness.',
    icon: PackageCheck,
    image: '/images/process_packaging_1778987106172.png',
  },
  {
    title: 'Doorstep Delivery',
    desc: 'Our express fleet ensures your catch reaches your kitchen within hours of leaving the sea.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop',
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ocean-aqua/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ocean-main/5 blur-[120px] rounded-full delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            The <span className="text-gradient">Freshness</span> Journey
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
            We've revolutionized seafood delivery. Discover how we bring the ocean premium quality directly to your doorstep with absolute transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-video">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ocean-deep/40 group-hover:bg-ocean-deep/20 transition-colors" />
                <div className="absolute top-4 left-4 glass p-3 rounded-xl">
                  <step.icon className="w-6 h-6 text-ocean-aqua" />
                </div>
                <div className="absolute bottom-4 left-4 text-xs font-black text-white/50 tracking-tighter">
                  STEP 0{idx + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-ocean-aqua transition-colors">{step.title}</h3>
              <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors uppercase text-[10px] tracking-widest font-bold mb-2">Process Verified</p>
              <p className="text-white/60 leading-relaxed font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Floating Trust Indicators */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-20">
           {['100% HYGIENIC', 'ZERO PRESERVATIVES', 'DAILY CATCH', 'SUSTAINABLE FISHING'].map((item) => (
             <div key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-ocean-aqua shadow-[0_0_10px_#00FFFF]" />
                <span className="text-xs font-bold tracking-[0.2em] text-white/80">{item}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
