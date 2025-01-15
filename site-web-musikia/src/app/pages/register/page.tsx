"use client";
import '../../globals.css'
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const RegisterPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar/>
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-center text-[var(--h1-color)]">Inscription</h1>
          <form className="flex flex-col">
            <input type="text" placeholder="Nom d'utilisateur" className="border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
            <input type="email" placeholder="Email" className="border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
            <input type="password" placeholder="Mot de passe" className="border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
            <button type="submit" className="bg-[var(--btn-bg)] text-[var(--btn-text)] hover:bg-[var(--btn-hover)] py-2 px-4 rounded transition duration-300">
              S&apos;inscrire
            </button>
          </form>
          <p className="mt-4 text-center text-[var(--p-color)]">
            Vous avez déjà un compte ?{" "}
            <Link href="/pages/login" className="text-indigo-600 underline">Connectez-vous ici</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
