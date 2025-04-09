"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { FaUser, FaSignOutAlt } from "react-icons/fa";

const navLinks = [
  { title: "Accueil", path: "/" },           
  { title: "IA", path: "/pages/ia" },              
  { title: "Abonnements", path: "/pages/suscriptions" },
];

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  
  useEffect(() => {
    
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);
  
  const handleLinkClick = (path: string) => {
    setIsNavbarOpen(false); 
    router.push(path);
  };

  const handleLogout = () => {
    
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    
    router.push('/');
  };

  
  const handleLogin = () => {
    router.push('/pages/login');
  };

  return (
    <header className="z-50 bg-gray-700 shadow-lg fixed top-0 left-0 right-0">
      <nav className="container mx-auto px-4 py-4 md:py-6">
        <section className="flex flex-col md:flex-row items-center justify-between">
          <Link href="/" className="text-2xl md:text-3xl text-white font-bold hover:text-gray-300 transition-all duration-300 transform hover:scale-105 mb-4 md:mb-0">
            LOGO
          </Link>
          <h1 className="hidden md:block text-3xl md:text-4xl text-[var(--h1-color)] font-bold mb-4 md:mb-0 transition-all duration-300 hover:text-blue-400">Musikia</h1>
          <div className="hidden md:flex items-center space-x-16">
            {navLinks.map(({ title, path }) => (
              <Link key={path} href={path} className={`transition-all duration-300 text-lg transform hover:scale-110 ${pathname === path ? 'text-blue-400 font-bold' : 'text-gray-300 hover:text-white'}`}>
                {title}
              </Link>
            ))}
            {isAuthenticated ? (
              <button 
                onClick={handleLogout} 
                className="flex items-center text-gray-800 bg-white hover:bg-gray-200 px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <FaSignOutAlt className="mr-2" />
                Se déconnecter
              </button>
            ) : (
              <button 
                onClick={handleLogin} 
                className="flex items-center text-gray-800 bg-white hover:bg-gray-200 px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <FaUser className="mr-2" />
                Se connecter
              </button>
            )}
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
                  <li>
                    {isAuthenticated ? (
                      <button 
                        onClick={handleLogout} 
                        className="block w-full py-3 px-4 text-left transition text-gray-300 hover:bg-gray-700"
                      >
                        <FaSignOutAlt className="inline mr-2" />
                        Se déconnecter
                      </button>
                    ) : (
                      <Link href="/pages/login">
                        <button 
                          onClick={() => handleLinkClick('/pages/login')} 
                          className="block w-full py-3 px-4 text-left transition text-gray-300 hover:bg-gray-700"
                        >
                          <FaUser className="inline mr-2" />
                          Se connecter
                        </button>
                      </Link>
                    )}
                  </li>
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
