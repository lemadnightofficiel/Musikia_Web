"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email) && password.length > 0) {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('../pages/home');
    } else {
      setError('Veuillez entrer une adresse e-mail valide et un mot de passe');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">Connexion</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email" 
              className="border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe" 
                className="border border-gray-300 rounded p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button"
                className="absolute right-3 top-2.5"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                )}
              </button>
            </div>
            <button 
              type="submit" 
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition duration-300"
            >
              Se connecter
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Pas encore inscrit ?{" "}
            <Link href="/register" className="text-indigo-600 underline">Inscrivez-vous ici</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
