"use client";
import React from "react";
import Navbar from "../components/NavBar";

const PresentationPage = () => {
  return (
    <section>
      <Navbar></Navbar>
      <main className="container mx-auto px-4 py-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Présentation de notre IA Musicale</h1>
        <p className="text-lg text-center mb-4">
          Description à écrire
        </p>
        
        <section className="mt-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Fonctionnalités</h2>
          <ul>
            <li>Transcription automatique de fichiers audio mp3 en partitions.</li>
          </ul>
        </section>

        <section className="mt-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Notre Équipe</h2>
          <p>
            Description à écrire
          </p>
        </section>
      </main>
    </section>
  );
};

export default PresentationPage;