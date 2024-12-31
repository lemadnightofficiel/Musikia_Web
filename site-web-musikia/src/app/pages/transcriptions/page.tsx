"use client";

import LoggedFooter from '@/app/components/LoggedFooter';
import LoggedNavbar from '@/app/components/LoggedNavbar';
import React from 'react';
import { FaGuitar, FaDownload } from 'react-icons/fa';

// Type pour les transcriptions
type Transcription = {
  id: string;
  title: string;
  artist: string;
  instrument: string;
  date: string;
};

// Données factices pour les transcriptions
const transcriptions: Transcription[] = [
  { id: '1', title: "Stairway to Heaven", artist: "Led Zeppelin", instrument: "Guitare", date: "2023-05-15" },
  { id: '2', title: "Wonderwall", artist: "Oasis", instrument: "Guitare", date: "2023-06-02" },
  { id: '3', title: "Hotel California", artist: "Eagles", instrument: "Guitare", date: "2023-06-10" },
  { id: '4', title: "Sweet Child O' Mine", artist: "Guns N' Roses", instrument: "Guitare", date: "2023-06-20" },
  { id: '5', title: "Smells Like Teen Spirit", artist: "Nirvana", instrument: "Guitare", date: "2023-07-01" },
];

const MyTranscriptions = () => {
  // Fonction factice pour le téléchargement
  const handleDownload = (id: string) => {
    console.log(`Téléchargement de la partition ${id}`);
    // Ici, vous implémenteriez la logique réelle de téléchargement
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <LoggedNavbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-indigo-600 text-3xl font-bold mb-6 text-center">Mes Transcriptions</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {transcriptions.map((transcription) => (
            <div key={transcription.id} className="border-b last:border-b-0 p-4 flex items-center justify-between hover:bg-gray-50 transition duration-150">
              <div className="flex items-center">
                <FaGuitar className="text-blue-500 mr-4" size={24} />
                <div>
                  <h2 className="text-indigo-600 text-lg font-semibold">{transcription.title}</h2>
                  <p className="text-gray-600">{transcription.artist}</p>
                  <p className="text-sm text-gray-500">Transcrit le {transcription.date}</p>
                </div>
              </div>
              <button
                onClick={() => handleDownload(transcription.id)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center transition duration-300"
              >
                <FaDownload className="mr-2" />
                Télécharger
              </button>
            </div>
          ))}
        </div>
      </main>
      <LoggedFooter />
    </div>
  );
};

export default MyTranscriptions;
