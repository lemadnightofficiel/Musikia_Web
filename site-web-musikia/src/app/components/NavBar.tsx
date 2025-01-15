"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { FaUser } from "react-icons/fa";

const navLinks = [
  { title: "Accueil", path: "/" },           
  { title: "Présentation", path: "/pages/intro" },
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
    <header className="z-50 bg-gray-700 shadow-lg">
      <nav className="container mx-auto px-4 py-4 md:py-6">
        <section className="flex flex-col md:flex-row items-center justify-between">
          <Link href="/" className="text-2xl md:text-3xl text-white font-bold hover:text-gray-300 transition mb-4 md:mb-0">
            LOGO
          </Link>
          <h1 className="hidden md:block text-3xl md:text-4xl text-[var(--h1-color)] font-bold mb-4 md:mb-0">Musikia</h1>
          <div className="hidden md:flex items-center space-x-16">
            {navLinks.map(({ title, path }) => (
              <Link key={path} href={path} className={`transition duration-300 text-lg ${pathname === path ? 'text-blue-400 font-bold' : 'text-gray-300 hover:text-white'}`}>
                {title}
              </Link>
            ))}
            <Link href="/pages/login" className="flex items-center text-gray-800 bg-white hover:bg-gray-200 px-4 py-2 rounded transition duration-300">
              <FaUser className="mr-2" />
              Compte
            </Link>
          </div>
          <button onClick={toggleNavbar} className="md:hidden w-10 h-10 flex items-center justify-center border border-gray-600 text-white hover:text-gray-300" aria-label={isNavbarOpen ? "Fermer le menu" : "Ouvrir le menu"}>
            {isNavbarOpen ? "✕" : "☰"}
          </button>
          <div className={`fixed top-0 right-0 w-full h-full bg-gray-800 transform transition-transform duration-300 ease-in-out ${isNavbarOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50 shadow-lg`}>
            <div className="flex flex-col h-full relative">
              <button onClick={toggleNavbar} className="absolute top-4 right-4 text-2xl text-white hover:text-gray-300" aria-label="Fermer le menu">
                ✕
              </button>
              <nav className="flex-grow overflow-y-auto pt-16">
                <ul className="py-4 space-y-4">
                  {navLinks.map(({ title, path }) => (
                    <li key={path}>
                      <Link href={path}>
                        <button onClick={() => handleLinkClick(path)} className={`block w-full py-3 px-4 text-left transition ${pathname === path ? 'bg-[#22D3EE] text-white font-bold' : 'text-gray-300 hover:bg-gray-700'}`}>
                          {title}
                        </button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
