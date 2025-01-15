"use client";

import '../../globals.css'
import LoggedFooter from '@/app/components/LoggedFooter';
import LoggedNavbar from '@/app/components/LoggedNavbar';
import React from 'react';
import { FaGuitar, FaDownload } from 'react-icons/fa';

type Transcription = {
  id: string;
  title: string;
  artist: string;
  instrument: string;
  date: string;
};

const transcriptions: Transcription[] = [
  { id: '1', title: "Stairway to Heaven", artist: "Led Zeppelin", instrument: "Guitare", date: "2023-05-15" },
  { id: '2', title: "Wonderwall", artist: "Oasis", instrument: "Guitare", date: "2023-06-02" },
  { id: '3', title: "Hotel California", artist: "Eagles", instrument: "Guitare", date: "2023-06-10" },
  { id: '4', title: "Sweet Child O' Mine", artist: "Guns N' Roses", instrument: "Guitare", date: "2023-06-20" },
  { id: '5', title: "Smells Like Teen Spirit", artist: "Nirvana", instrument: "Guitare", date: "2023-07-01" },
];

const MyTranscriptions = () => {
  const handleDownload = (id: string) => {
    console.log(`Téléchargement de la partition ${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <LoggedNavbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-[var(--h1-color)] text-3xl font-bold mb-6 text-center">Mes Transcriptions</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {transcriptions.map((transcription) => (
            <div key={transcription.id} className="border-b last:border-b-0 p-4 flex items-center justify-between hover:bg-gray-50 transition duration-150">
              <div className="flex items-center">
                <FaGuitar className="text-blue-500 mr-4" size={24} />
                <div>
                  <h2 className="text-[var(--h2-color)] text-lg font-semibold">{transcription.title}</h2>
                  <p className="text-[var(--p-color)]">{transcription.artist}</p>
                  <p className="text-sm text-[var(--p-color)]">Transcrit le {transcription.date}</p>
                </div>
              </div>
              <button onClick={() => handleDownload(transcription.id)} className="bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)] text-[var(--btn-text)] font-bold py-2 px-4 rounded flex items-center transition duration-300">
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
