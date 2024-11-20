"use client";
import React from "react";
import FileUpload from "../components/FileUpload";
import Navbar from "../components/NavBar";

const IAPage = () => {
  return (
    <section>
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Musikia</h1>
        <p className="text-lg text-center mb-4">
          Téléchargez votre fichier MP3 et laissez notre IA le transcrire en partition pour vous.
        </p>
        <FileUpload />
      </main>
    </section>
  );
};

export default IAPage;