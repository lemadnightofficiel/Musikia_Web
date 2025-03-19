"use client";

import '../../globals.css';
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { supabase } from '../../../../initSupabase';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation de l'email et du mot de passe
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || password.length === 0) {
      setError('Veuillez entrer une adresse e-mail valide et un mot de passe.');
      return;
    }

    // Tentative de connexion avec Supabase
    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      console.error('Erreur lors de la connexion:', loginError);
      if (loginError.message === 'Invalid login credentials') {
        setError('Identifiants invalides. Veuillez vérifier votre email et votre mot de passe.');
      } else {
        setError('Une erreur est survenue lors de la connexion. Veuillez réessayer.');
      }
    } else {
      console.log('Connexion réussie', data);
      alert('Connexion réussie !');
      router.push('/pages/home');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-4xl text-[var(--h1-color)] font-bold mb-6 text-center">Connexion</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                className="border border-gray-300 rounded p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-2.5"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <button
              type="submit"
              className="bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)] text-[var(--btn-text)] py-2 px-4 rounded transition duration-300"
            >
              Se connecter
            </button>
          </form>
          <p className="text-[var(--p-color)] mt-4 text-center">
            Pas encore inscrit ?{" "}
            <Link href="/pages/register" className="text-indigo-600 underline">
              Inscrivez-vous ici
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
