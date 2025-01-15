"use client";
import '../../globals.css'
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import React from "react";

const PresentationPage = () => {
  return (
    <section className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow w-full px-4 py-12 text-center bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[var(--h1-color)] text-4xl font-bold mb-6 text-center">Présentation de Musikia</h1>
          <p className="text-[var(--p-color)] mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
            Transformez vos fichiers MP3 en partitions musicales précises.
          </p>
          <div className="mt-6 max-w-3xl mx-auto">
            <p className="text-[var(--p-color)] text-lg mb-4">
              Musikia utilise l&apos;intelligence artificielle pour analyser vos fichiers audio et générer des partitions détaillées. Que vous soyez musicien, compositeur ou simplement passionné de musique, Musikia rend la transcription musicale accessible à tous.
            </p>
            <p className="text-[var(--p-color)] text-lg mb-4">
              Importez simplement vos fichiers MP3, et laissez notre technologie faire le travail. En quelques minutes, vous obtiendrez une partition que vous pourrez télécharger et utiliser dans vos projets musicaux.
            </p>
            <h2 className="text-[var(--h2-color)] text-2xl font-bold mt-8 mb-4">Fonctionnalités clés :</h2>
            <div className="flex justify-center">
              <ul className="list-disc list-inside text-left text-[var(--p-color)] space-y-2 max-w-md">
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
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/> 
                  </svg> Support pour plusieurs formats audio à venir. 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default PresentationPage;
