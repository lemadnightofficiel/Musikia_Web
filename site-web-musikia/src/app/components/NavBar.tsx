"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const navLinks = [
  { title: "Accueil", path: "/" },           
  { title: "Présentation", path: "/intro" },
  { title: "IA", path: "/ia" },              
  { title: "Blog", path: "/blog" },          
];

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const router = useRouter();

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);
  
  const handleLinkClick = (path: string) => {
    setIsNavbarOpen(false); 
    router.push(path);
  };

  return (
    <header className="z-50 bg-[#121212] border-b border-gray-700 shadow-lg">
      <nav className="container mx-auto px-4 py-4 md:py-6">
        <section className="flex items-center justify-between">
          <Link href="/" className="text-2xl md:text-3xl text-white font-bold hover:text-gray-300 transition">
            LOGO
          </Link>
          <h1 className="hidden md:block text-xl text-white">Musikia</h1>
          <button 
            onClick={toggleNavbar} 
            className="md:hidden w-10 h-10 flex items-center justify-center border border-gray-600 text-gray-200 hover:text-white" 
            aria-label={isNavbarOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isNavbarOpen ? "✕" : "☰"}
          </button>
          <section className={`md:flex ${isNavbarOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-2 md:mt-0">
              {navLinks.map(({ title, path }) => (
                <li key={path}>
                  <Link href={path}>
                    <button 
                      onClick={() => handleLinkClick(path)} 
                      className="block w-full py-4 px-6 text-left text-white hover:bg-gray-700 rounded transition duration-300 ease-in-out"
                    >
                      {title}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;