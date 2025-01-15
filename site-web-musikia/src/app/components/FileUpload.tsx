"use client";
import React, { useState, useRef } from "react";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [transcription, setTranscription] = useState<string | null>(null);
  const [partitionUrl, setPartitionUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    handleFile(selectedFile);
  };

  const handleFile = (selectedFile: File | undefined) => {
    if (selectedFile) {
      if (selectedFile.type === "audio/mpeg" || selectedFile.name.endsWith('.mp3')) {
        setFile(selectedFile);
      } else {
        alert("Veuillez sélectionner un fichier MP3.");
        setFile(null);
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.classList.add('bg-gray-100');
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.classList.remove('bg-gray-100');
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.classList.remove('bg-gray-100');
    const droppedFile = event.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleSubmit = async () => {
    if (!file) return;

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 5000));

    setTranscription("Transcription terminée !");
    setPartitionUrl("/path/to/partition");

    setLoading(false);
  };

  return (
    <div className="col-span-full max-w-2xl mx-auto mt-8">
      <h2 className="text-[var(--h2-color)] text-2xl font-bold text-center mb-6">Convertissez votre fichier MP3 en partition</h2>
      <div className="mt-2 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-indigo-300 px-6 py-10 transition-colors duration-300 hover:border-indigo-400" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
        <div className="text-center">
          {file ? (
            <svg className="mx-auto h-16 w-16 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ) : (
            <svg className="mx-auto h-16 w-16 text-indigo-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
          )}
          <div className="mt-4 flex flex-col items-center text-sm leading-6 text-gray-600">
            <label htmlFor="file-upload"className="relative cursor-pointer rounded-md bg-white px-3 py-2 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
              <span>{file ? "Changer de fichier" : "Télécharger un fichier"}</span>
              <input id="file-upload" name="file-upload" type="file" className="sr-only" ref={fileInputRef} onChange={handleFileChange} accept="audio/mpeg,.mp3"/>
            </label>
            {!file && <p className="mt-2">ou glisser-déposer</p>}
          </div>
          {file ? (
            <p className="text-sm text-indigo-600 mt-2">Fichier sélectionné : {file.name}</p>
          ) : (
            <p className="text-xs leading-5 text-gray-500 mt-2">MP3 jusqu&apos;à 10MB</p>
          )}
        </div>
      </div>

      {file && (
        <div className="mt-6 flex justify-center">
          <button onClick={handleSubmit} disabled={loading} className={`px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-colors duration-300 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}>
            {loading ? "Transcription en cours..." : "Transcrire"}
          </button>
        </div>
      )}

      {loading && (
        <div className="mt-6 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
          <p className="mt-2 text-gray-600">Chargement...</p>
        </div>
      )}

      {transcription && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-[var(--h2-color)] text-xl font-semibold text-center mb-4">Transcription</h2>
          <p className="text-[var(--p-color)] text-center text-gray-700 mb-6">{transcription}</p>
          {partitionUrl && (
            <div className="text-center">
              <a href={partitionUrl} download className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-colors duration-300">
                Télécharger la partition
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;