"use client";
import FileUpload from '@/app/components/FileUpload';
import '../../globals.css'
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import React, { useState, useEffect } from "react";
import { FaFileAudio, FaPlay, FaTrash, FaDownload, FaChevronDown, FaChevronUp } from "react-icons/fa";

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
    <section className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Notre IA</h1>
        <p className="text-lg text-center mb-8 text-gray-600">
          Téléchargez votre fichier MP3 et laissez notre IA le transcrire en partition pour vous.
        </p>
        
        {!selectedFile ? (
          <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <FileUpload />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">Fichier sélectionné</h2>
                <button 
                  onClick={() => removeFile()} 
                  className="text-red-500 hover:text-red-700 font-medium flex items-center gap-1"
                >
                  <FaTrash className="text-sm" /> Supprimer
                </button>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <p><strong>Nom:</strong> {selectedFile.name}</p>
                <p><strong>Durée:</strong> {selectedFile.duration}</p>
                <audio controls className="w-full mt-2">
                  <source src={selectedFile.url} type="audio/mp3" />
                </audio>
              </div>
              <button className="w-full flex items-center justify-center gap-2 mt-6 bg-green-500 text-white px-4 py-3 rounded shadow hover:bg-green-600 transition">
                <FaDownload /> Télécharger toutes les partitions
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
              <h2 className="text-xl font-bold mb-4">Choisissez un instrument</h2>
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
                      <p><strong>Partition pour:</strong> {instrument}</p>
                      <p><strong>Fichier:</strong> {selectedFile.name}</p>
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
        )}
      </main>
      <Footer />
    </section>
  );
};

export default IAPage;