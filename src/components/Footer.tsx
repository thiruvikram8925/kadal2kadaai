/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Waves, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-[#00050d] pt-24 pb-12 overflow-hidden">
      {/* Animated Wave Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,1001.9,74.52l198.1,5.1V120H0V95.06C59.31,81.42,126.39,94.22,193.59,85.23,255.43,77,294.06,61.47,321.39,56.44Z" fill="var(--color-ocean-deep)"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img src="/images/kadal_logo_main_1778988430264.png" alt="Kadal to Kadaai Logo" className="w-32 h-32 object-contain" />
            </Link>
            <p className="text-white/40 leading-relaxed mb-6">
              Premium Sea-to-Kitchen delivery service. We bring the freshest catch from the deep blue directly to your doorstep with love and hygiene.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-ocean-aqua hover:text-ocean-deep transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-ocean-aqua hover:text-ocean-deep transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-ocean-aqua hover:text-ocean-deep transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/marketplace" className="text-white/40 hover:text-ocean-aqua transition-colors text-sm">Today's Catch</Link></li>
              <li><Link to="/process" className="text-white/40 hover:text-ocean-aqua transition-colors text-sm">Freshness Process</Link></li>
              <li><Link to="/marketplace" className="text-white/40 hover:text-ocean-aqua transition-colors text-sm">Subscription Plan</Link></li>
              <li><Link to="/about" className="text-white/40 hover:text-ocean-aqua transition-colors text-sm">About Us</Link></li>
              <li><Link to="/about" className="text-white/40 hover:text-ocean-aqua transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <Phone size={16} className="text-ocean-aqua" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <Mail size={16} className="text-ocean-aqua" />
                <span>fresh@kadalkadaai.com</span>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <MapPin size={16} className="text-ocean-aqua" />
                <span>Harbor Road, Coastal Estate, Chennai, TN</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/40 text-sm mb-4">Get notified about the early morning specialty catches.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter email..." 
                className="w-full py-3 px-4 glass rounded-lg text-sm focus:outline-hidden focus:border-ocean-aqua transition-colors"
              />
              <button className="absolute right-2 top-1.5 bottom-1.5 px-4 bg-ocean-aqua text-ocean-deep font-bold rounded text-xs">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-xs font-mono">
            © 2024 KADAL TO KADAAI MARKETPLACE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-black tracking-widest text-white/20 uppercase">
             <a href="#" className="hover:text-ocean-aqua transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-ocean-aqua transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
