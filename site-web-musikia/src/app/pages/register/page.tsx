"use client";

import '../../globals.css';
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [instrument, setInstrument] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

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

    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(password)) {
      alert("Le mot de passe doit contenir au moins une majuscule, un chiffre et un caractère spécial.");
       return;
     }
 
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    console.log("Form submitted:", { email, instrument, password });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md relative">
          <h1 className="text-4xl font-bold mb-6 text-center text-[var(--h1-color)]">Inscription</h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <select value={instrument} onChange={(e) => setInstrument(e.target.value)} className="border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
              <option value="" disabled>Choisissez votre instrument</option>
              <option value="Guitare">Guitare</option>
              <option value="Piano">Piano</option>
              <option value="Batterie">Batterie</option>
              <option value="Violon">Violon</option>
            </select>
            <input type="email" placeholder="Email" className="border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"  value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <div className="relative mb-4">
              <input type={showPassword ? "text" : "password"} placeholder="Mot de passe" className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500" required value={password} onChange={handlePasswordChange}/>
              <button type="button" className="absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <FaEye />
                ) : (
                  <FaEyeSlash />
                )}
              </button>
            </div>
            <div className="relative mb-4">
              <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirmer le mot de passe" className={`border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 ${passwordMatch ? 'border-gray-300' : 'border-red-500'}`} required value={confirmPassword} onChange={handleConfirmPasswordChange}/>
              { !passwordMatch && (
                <p className="text-red-500 text-sm">Les mots de passe ne correspondent pas.</p>
              )}
              <button type="button" className="absolute right-3 top-3" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? (
                  <FaEye />
                ) : (
                  <FaEyeSlash />
                )}
              </button>
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
