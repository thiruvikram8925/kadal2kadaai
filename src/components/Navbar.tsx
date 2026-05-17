/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Process', href: '/process' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-8",
      "bg-transparent backdrop-blur-md",
      isScrolled ? "h-14 py-1" : "h-16 py-2"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/src/assets/images/kadal_logo_main_1778988430264.png" alt="Kadal to Kadaai Logo" className="h-10 md:h-12 w-auto transition-all duration-500" />
          <span className="text-xl md:text-2xl font-stylish italic font-bold tracking-tight text-black">
            Kadal to Kadaai
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href}
              className={({ isActive }) => cn(
                "text-[12px] uppercase tracking-[0.2em] font-display font-bold transition-all relative group",
                isActive 
                  ? "text-ocean-aqua" 
                  : "text-black hover:opacity-70"
              )}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link to="/order" className="hidden md:block px-6 py-2 bg-ocean-aqua text-black text-xs font-bold rounded-full hover:bg-black hover:text-ocean-aqua shadow-lg shadow-ocean-aqua/20 transition-all transform hover:scale-105">
            ORDER NOW
          </Link>

          <button 
            className="md:hidden p-2 text-black transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-ocean-navy/95 backdrop-blur-xl p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => cn(
                  "text-lg font-display font-medium uppercase tracking-widest transition-colors",
                  isActive ? "text-ocean-aqua" : "text-black"
                )}
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/order" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 bg-ocean-aqua text-black text-center font-bold rounded">
              ORDER NOW
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
