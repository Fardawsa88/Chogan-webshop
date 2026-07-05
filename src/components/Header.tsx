import React, { useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cart';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const cartTotal = cartItems.length;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            🌸 Chogan
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-primary">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary">
              Contact
            </Link>
          </div>

          {/* Cart and Auth */}
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative text-gray-700 hover:text-primary"
            >
              🛒 Cart
              {cartTotal > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartTotal}
                </span>
              )}
            </Link>
            <button className="text-gray-700 hover:text-primary">🔐 Login</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/products" className="block text-gray-700 hover:text-primary py-2">
              Products
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-primary py-2">
              About
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-primary py-2">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
