/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MarketplacePage from './pages/Marketplace';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import OrderPage from './pages/OrderPage';
import OrderNow from './components/OrderNow';
import Footer from './components/Footer';
import Cart from './components/Cart';
import UnderwaterBackground from './components/UnderwaterBackground';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import { CartProvider, useCart } from './context/CartContext';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <main className="min-h-screen relative overflow-x-hidden">
          <UnderwaterBackground />

          <Navbar />
          
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/order" element={<OrderPage />} />
            </Routes>
            
            <OrderNow />
            <Footer />
          </div>

          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          
          {/* Floating Action Button */}
          <CartFAB onOpen={() => setIsCartOpen(true)} />
        </main>
      </Router>
    </CartProvider>
  );
}

function CartFAB({ onOpen }: { onOpen: () => void }) {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <button 
      onClick={onOpen}
      className="fixed bottom-8 right-8 z-[60] bg-ocean-aqua text-ocean-deep p-4 rounded-2xl shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer group"
    >
      <div className="flex items-center gap-2">
         <div className="relative">
           <ShoppingCartIcon className="group-hover:rotate-12 transition-transform" />
           {totalItems > 0 && (
             <span className="absolute -top-2 -right-2 bg-white text-ocean-deep text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
               {totalItems}
             </span>
           )}
         </div>
         <span className="font-bold hidden md:block">VIEW CART</span>
      </div>
    </button>
  );
}

function ShoppingCartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="21" r="1"/>
      <circle cx="19" cy="21" r="1"/>
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>
  );
}

