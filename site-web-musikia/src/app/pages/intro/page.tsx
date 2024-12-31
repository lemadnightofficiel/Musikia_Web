"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import React from "react";


const PresentationPage = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 text-center bg-white">
        <h1 className="text-4xl font-bold mb-6 text-indigo-600">Présentation de Musikia</h1>
        <p className="mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
          Transformez vos fichiers MP3 en partitions musicales précises.
        </p>
        <div className="mt-6 max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-4">
            Musikia utilise l'intelligence artificielle pour analyser vos fichiers audio et générer des partitions détaillées. Que vous soyez musicien, compositeur ou simplement passionné de musique, Musikia rend la transcription musicale accessible à tous.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Importez simplement vos fichiers MP3, et laissez notre technologie faire le travail. En quelques minutes, vous obtiendrez une partition que vous pourrez télécharger et utiliser dans vos projets musicaux.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-indigo-600">Fonctionnalités clés :</h2>
          <div className="flex justify-center">
            <ul className="list-disc list-inside text-left text-gray-600 space-y-2 max-w-md">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
                  <path d="M12 6a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 11-3 0v-3A1.5 1.5 0 0112 6zm0 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Conversion rapide et précise des fichiers audio.
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .587l3.668,7.568,8.332,1.21c.285.041.398.392.192.592l-6.017,5.855,1.419,8.285c-.049-.285-.249-.501-.496-.368L12,18.l097,3.l724c.-247.-133.-545.-083.-496.-368.l419.-8285.L0.l587c.-206.-201.-093.-551..192.-592.l332.-121.L12..587z"/>
                </svg>
                Interface utilisateur intuitive et facile à utiliser.
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .587l3.668,7.568,8.332,1.21c .285 .041 .398 .392 .192 .592l -6 .017 ,5 .855 ,1 .419 ,8 .285c .049 .285 - .249 .501 - .496 .368L12 ,18.l897 , -7 .097 ,3 .724c - .247 - .133 - .545 - .083 - .496 - .368l ,1 .419 -8 , -285L0 , .587c - .206 - .201 - .093 - .551 ..192 - .592l ,8 .332 -1 , -210L12 , .587z"/>
                </svg>
                Téléchargement instantané de vos partitions.
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .587l3.668,7.568,8.332,1.21c .285 .041 .398 .392 .192 .592l -6 .017 ,5 .855 ,1 .419 ,8 .285c .049 .285 - .249 .501 - .496 .368L12 ,18.l897 , -7 .097 ,3.l724c -247.-133.-545.-083.-496.-368.l419.-8285.L0.l587c -.206 -.201 -.093 -.551 ..192 -.592.l332 -.121.L12..587z"/>
                </svg>
                Support pour plusieurs formats audio à venir.
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32 mt-12">
          <div className="mx-auto grid max-w-7xl gap-x-20 gap-y-10 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-xl">
              <h2 className="text-indigo-600 text-3xl font-semibold tracking-tight sm:text-4xl">Notre équipe</h2>
              <p className="mt-6 text-lg text-gray-600">Description</p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              <li>
                <div className="flex items-center gap-x-6">
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-gray-900">Lorem Ipsum</h3>
                    <p className="text-sm font-semibold text-indigo-600">Lorem Ipsum</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6">
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-gray-900">Lorem Ipsum</h3>
                    <p className="text-sm font-semibold text-indigo-600">lorem Ipsum</p>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default PresentationPage;