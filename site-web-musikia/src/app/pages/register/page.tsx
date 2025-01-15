"use client";
import '../../globals.css';
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const RegisterPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    // Ajoutez ici la logique pour soumettre le formulaire
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md relative">
          <h1 className="text-4xl font-bold mb-6 text-center text-[var(--h1-color)]">Inscription</h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nom d'utilisateur" className="border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="email" placeholder="Email" className="border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            <div className="relative mb-4">
              <input type={showPassword ? "text" : "password"} placeholder="Mot de passe" className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500" required value={password} onChange={handlePasswordChange} />
              <button type="button" className="absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
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
            <div className="relative mb-4">
              <input type={showPassword ? "text" : "password"} placeholder="Confirmer le mot de passe" className={`border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 ${passwordMatch ? 'border-gray-300' : 'border-red-500'}`} required value={confirmPassword} onChange={handleConfirmPasswordChange} />
              {!passwordMatch && (
                <p className="text-red-500 text-sm">Les mots de passe ne correspondent pas.</p>
              )}
            </div>
            <button type="submit" className="bg-[var(--btn-bg)] text-[var(--btn-text)] hover:bg-[var(--btn-hover)] py-2 px-4 rounded transition duration-300">
              S&apos;inscrire
            </button>
          </form>
          <p className="mt-4 text-center text-[var(--p-color)]">
            Vous avez déjà un compte ?{" "}
            <Link href="/pages/login" className="text-indigo-600 underline">Connectez-vous</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
   );
};

export default RegisterPage;
