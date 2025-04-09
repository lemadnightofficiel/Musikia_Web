"use client";
import '../../globals.css'
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import React, { useState } from "react";
import { FaFileAudio, FaTrash, FaDownload, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface SelectedFile {
  name: string;
  duration: string;
  url: string;
}

const IAPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<SelectedFile | null>(null);
  const [openInstrument, setOpenInstrument] = useState<string | null>(null);
  const instruments: string[] = ["Piano", "Voix", "Guitare (accompagnement)","Guitare (solo)", "Basse", "Batterie", "Kazou"];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      const audio = new Audio(objectUrl);
      audio.onloadedmetadata = () => {
        setSelectedFile({ name: file.name, duration: formatTime(audio.duration), url: objectUrl });
      };
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
            <h2 className="text-xl font-bold mb-4">Sélectionnez un fichier</h2>
            <div className="border border-dashed border-gray-400 p-6 text-center rounded-lg cursor-pointer hover:bg-gray-100 transition">
              <label>
                <input type="file" accept=".mp3" className="hidden" onChange={handleFileChange} />
                <FaFileAudio className="text-5xl mx-auto text-gray-500" />
                <p className="text-gray-700 mt-2">Glissez ou sélectionnez un fichier MP3</p>
              </label>
            </div>
            {selectedFile && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                <p><strong>Nom:</strong> {selectedFile.name}</p>
                <p><strong>Durée:</strong> {selectedFile.duration}</p>
                <audio controls className="w-full mt-2">
                  <source src={selectedFile.url} type="audio/mp3" />
                </audio>
                <div className="flex gap-4 mt-4">
                  <button onClick={removeFile} className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition">
                    <FaTrash /> Enlever
                  </button>
                  <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition">
                    <FaDownload /> Tout télécharger
                  </button>
                </div>
              </div>
            )}
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
                    {selectedFile ? (
                      <>
                        <p><strong>Fichier:</strong> {selectedFile.name}</p>
                        <audio controls className="w-full mt-2">
                          <source src={selectedFile.url} type="audio/mp3" />
                        </audio>
                        <button className="flex items-center gap-2 mt-4 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition">
                          <FaDownload /> Télécharger
                        </button>
                      </>
                    ) : (
                      <p className="text-red-500">Aucun fichier sélectionné</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default IAPage;
