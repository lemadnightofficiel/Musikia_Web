"use client";
import '../../globals.css'
import FileUpload from "@/app/components/FileUpload";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import React from "react";
import Image from "next/image";

const IAPage = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6 bg-white pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Notre transcripteur par IA</h1>
          
          <p className="text-lg text-gray-600 text-center mb-12">
            Transcrivez votre Musique en seulement quelques minutes avec l&apos;IA Musikia. Il suffit de télécharger votre musique au format MP3 et l&apos;IA se charge du reste!
          </p>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Convertisser votre musique en partition</h2>
            <FileUpload />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 mt-20 mb-16">
            <div className="md:w-1/2">
              <Image 
                src="/images/intro/image_intro_3.png" 
                alt="Illustration de l'IA Musikia" 
                width={500} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comment ça marche ?</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">Notre IA se découpe en 4 parties :</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-3">
                  <li className="pl-2">L&apos;IA récupère la musique que vous souhaitez transcrire.</li>
                  <li className="pl-2">La musique est découpée en différentes pistes audio. Une piste audio est générée par instrument.</li>
                  <li className="pl-2">Grâce à son immense base de données, l&apos;IA repère chaque changement de son et lui attribue une note/accord.</li>
                  <li className="pl-2">L&apos;IA écrit ses résultats sous forme de partition. Une partition est générée pour chaque instrument présent dans la musique.</li>
                </ol>
                <p className="text-gray-600 mt-4">
                  Si vous souhaitez en savoir plus, vous pouvez consulter nos articles sur le fonctionnement de Musikia.
                </p>
                <div className="mt-4">
                  <a href="#" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 hover:scale-105 transition-all duration-300">
                    Voir nos réseaux
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default IAPage;