"use client";
import FileUpload from '@/app/components/FileUpload';
import '../../globals.css'
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import React, { useState, useEffect } from "react";
import { FaTrash, FaDownload, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface SelectedFile {
  name: string;
  duration: string;
  url: string;
}

const IAPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<SelectedFile | null>(null);
  const [openInstrument, setOpenInstrument] = useState<string | null>(null);
  const instruments: string[] = ["Piano", "Voix", "Guitare (accompagnement)","Guitare (solo)", "Basse", "Batterie", "Kazou"];
  
  const processFile = (file: File) => {
    const objectUrl = URL.createObjectURL(file);
    const audio = new Audio(objectUrl);
    audio.onloadedmetadata = () => {
      setSelectedFile({
        name: file.name,
        duration: formatTime(audio.duration),
        url: objectUrl
      });
    };
  };

  useEffect(() => {
    const handleFileChange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        processFile(input.files[0]);
      }
    };

    document.addEventListener('change', (e) => {
      if ((e.target as HTMLElement).tagName === 'INPUT' && 
          (e.target as HTMLInputElement).type === 'file') {
        handleFileChange(e);
      }
    });

    return () => {
      document.removeEventListener('change', handleFileChange);
    };
  }, []);

  const removeFile = () => {
    setSelectedFile(null);
    
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input) => {
      (input as HTMLInputElement).value = '';
    });
  };

  const toggleInstrument = (instrument: string) => {
    setOpenInstrument((prev) => (prev === instrument ? null : instrument));
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <section className="flex flex-col min-h-screen bg-gray-50 text-black-900">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-8 pt-24">
        <h1 className="text-4xl mt-4 mb-6 text-center text-black">Notre transcripteur par IA</h1>
        <p className="text-lg text-center mb-8 text-black">
          Transcrivez votre Musique en seulement quelques minutes avec l&apos;IA Musikia. Il suffit de télécharger votre musique au format MP3 et l&apos;IA se charger du reste!
        </p>
        {!selectedFile ? (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-black">Convertissez votre musique en partition</h3>
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
              <FileUpload />
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div >
                <img src="/images/intro/image_intro_3.png" alt="Illustration de conversion musicale" className="w-full rounded-xl" />
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-gray-800">Comment ça marche ?</h3>
                <p className="text-lg text-gray-600">Notre IA se découpe en 4 parties :</p>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>IA récupère la musique que vous souhaitez transcrire.</li>
                  <li>La musique est découpée en différentes pistes audio. Une piste audio est dédiée par instrument.</li>
                  <li>Grâce à son immense base de données, l&apos;IA repère chaque changement de son et lui attribue une note/accord.</li>
                  <li>L&apos;IA écrit ses résultats sous forme de partition. Une partition est générée pour chaque instrument présent dans la musique.</li>
                </ol>
                <p className="text-lg text-gray-600">Si vous souhaitez en savoir plus, vous pouvez consulter nos articles sur le fonctionnement de Musikia.</p>
                <div className="mt-4">
                  <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300">
                    Voir nos réseaux
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
                <div className="mb-4 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-black">Fichier sélectionné</h2>
                  <button 
                    onClick={() => removeFile()} 
                    className="text-red-500 hover:text-red-700 font-medium flex items-center gap-1"
                  >
                    <FaTrash className="text-sm" /> Supprimer
                  </button>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                  <p className="text-black"><strong>Nom:</strong> {selectedFile.name}</p>
                  <p className="text-black"><strong>Durée:</strong> {selectedFile.duration}</p>
                  <audio controls className="w-full mt-2">
                    <source src={selectedFile.url} type="audio/mp3" />
                  </audio>
                </div>
                <button className="w-full flex items-center justify-center gap-2 mt-6 bg-green-500 text-white px-4 py-3 rounded shadow hover:bg-green-600 transition">
                  <FaDownload /> Télécharger toutes les partitions
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
                <h2 className="text-xl font-bold mb-4 text-black">Choisissez un instrument</h2>
                {instruments.map((instrument) => (
                  <div key={instrument} className="mb-4 border-b pb-2">
                    <button
                      className="flex justify-between items-center w-full text-left text-lg font-semibold p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                      onClick={() => toggleInstrument(instrument)}
                    >
                      {instrument}
                      {openInstrument === instrument ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {openInstrument === instrument && (
                      <div className="mt-2 p-4 bg-gray-100 rounded-lg shadow-md transition-all duration-300 ease-in-out">
                        <p className="text-black"><strong>Partition pour:</strong> {instrument}</p>
                        <p className="text-black"><strong>Fichier:</strong> {selectedFile.name}</p>
                        <audio controls className="w-full mt-2">
                          <source src={selectedFile.url} type="audio/mp3" />
                        </audio>
                        <button className="flex items-center gap-2 mt-4 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition">
                          <FaDownload /> Télécharger la partition
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <img src="/images/intro/image_intro_3.png" alt="Illustration de conversion musicale" className="w-full rounded-xl" />
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-gray-800">Comment ça marche ?</h3>
                <p className="text-lg text-gray-600">Notre IA se découpe en 4 parties :</p>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>IA récupère la musique que vous souhaitez transcrire.</li>
                  <li>La musique est découpée en différentes pistes audio. Une piste audio est dédiée par instrument.</li>
                  <li>Grâce à son immense base de données, l&apos;IA repère chaque changement de son et lui attribue une note/accord.</li>
                  <li>L&apos;IA écrit ses résultats sous forme de partition. Une partition est générée pour chaque instrument présent dans la musique.</li>
                </ol>
                <p className="text-lg text-gray-600">Si vous souhaitez en savoir plus, vous pouvez consulter nos articles sur le fonctionnement de Musikia.</p>
                <div className="mt-4">
                  <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300">
                    Voir nos réseaux
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </section>
  );
};

export default IAPage;