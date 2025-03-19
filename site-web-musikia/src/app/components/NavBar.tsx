"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter, usePathname } from 'next/navigation';

const navLinks = [
  { title: "Accueil", path: "/" },           
  { title: "IA", path: "/pages/ia" },              
  { title: "Blog", path: "/pages/blog" },
];

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);
  
  const handleLinkClick = (path: string) => {
    setIsNavbarOpen(false); 
    router.push(path);
  };

  return (
    <header className="z-50 bg-[var(--navbar-bg)] shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center">
              <div className="bg-blue-700 text-white font-bold py-2 px-4">
                Logo
              </div>
            </Link>
            <div className="hidden md:block text-center text-xl font-semibold text-gray-700">
              Musikia
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ title, path }) => (
              <Link key={path} href={path} className={`text-sm ${pathname === path ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}>
                {title}
              </Link>
            ))}
            <Link href="/pages/login" className="bg-[var(--btn-primary-bg)] text-white font-medium py-1 px-4 rounded">
              Profils
            </Link>
          </div>
          
          <button onClick={toggleNavbar} className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700" aria-label={isNavbarOpen ? "Fermer le menu" : "Ouvrir le menu"}>
            {isNavbarOpen ? "✕" : "☰"}
          </button>
          
          {/* Menu mobile */}
          <div className={`fixed top-0 right-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out ${isNavbarOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50 shadow-lg`}>
            <div className="flex flex-col h-full relative">
              <button onClick={toggleNavbar} className="absolute top-4 right-4 text-2xl text-gray-700" aria-label="Fermer le menu">
                ✕
              </button>
              <nav className="flex-grow overflow-y-auto pt-16">
                <ul className="py-4 space-y-4">
                  {navLinks.map(({ title, path }) => (
                    <li key={path}>
                      <Link href={path}>
                        <button onClick={() => handleLinkClick(path)} className={`block w-full py-3 px-4 text-left transition ${pathname === path ? 'text-[var(--btn-primary-bg)] font-bold' : 'text-gray-600 hover:text-gray-900'}`}>
                          {title}
                        </button>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/pages/login">
                      <button onClick={() => handleLinkClick('/pages/login')} className="block w-full py-3 px-4 text-left text-gray-600 hover:text-gray-900">
                        Profils
                      </button>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
