"use client";
import FileUpload from "@/app/components/FileUpload";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import React from "react";


const IAPage = () => {
  return (
    <section className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6 bg-white text-gray-900">
        <h1 className="text-4xl font-bold mb-6 text-center">Notre IA</h1>
        <p className="text-lg text-center mb-4">
          Téléchargez votre fichier MP3 et laissez notre IA le transcrire en partition pour vous.
        </p>
        <FileUpload />
      </main>
      <Footer />
    </section>
  );
};

export default IAPage;