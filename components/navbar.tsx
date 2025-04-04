"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const navItems = [
    { href: '/', label: language === 'en' ? 'Home' : 'होम' },
    { href: '/about', label: language === 'en' ? 'About Us' : 'हमारे बारे में' },
    { href: '/events', label: language === 'en' ? 'Events' : 'कार्यक्रम' },
    { href: '/members', label: language === 'en' ? 'Members' : 'सदस्य' },
    { href: '/blog', label: language === 'en' ? 'Blog' : 'ब्लॉग' },
    { href: '/gallery', label: language === 'en' ? 'Gallery' : 'गैलरी' },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                {language === 'en' ? 'Tatsam' : 'तत्सम'}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="ml-4"
            >
              {language === 'en' ? 'हिंदी' : 'English'}
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-foreground/60 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="ml-2 mt-2"
            >
              {language === 'en' ? 'हिंदी' : 'English'}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;