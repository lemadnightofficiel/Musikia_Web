"use client";
import React, { useState, useRef } from "react";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
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
    event.currentTarget.classList.add('bg-gray-50');
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.classList.remove('bg-gray-50');
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.classList.remove('bg-gray-50');
    const droppedFile = event.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleDropzoneClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto mt-8">
      <div 
        className="mt-2 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-indigo-400 px-6 py-10 transition-colors duration-300 hover:border-indigo-500 relative cursor-pointer" 
        onDragOver={handleDragOver} 
        onDragLeave={handleDragLeave} 
        onDrop={handleDrop}
        onClick={handleDropzoneClick}
      >
        <div className="text-center">
          <svg className="mx-auto h-20 w-20 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v8m0 0l-4-4m4 4l4-4"></path>
            <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path>
            <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></path>
          </svg>
          
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Télécharger un fichier</h3>
          <p className="mt-2 text-gray-600">ou glisser-déposer</p>
          <p className="text-sm text-gray-500 mt-2">MP3 jusquà 10 MB</p>
          
        </div>
        
        <input id="file-upload" name="file-upload" type="file" className="sr-only" ref={fileInputRef} onChange={handleFileChange} accept="audio/mpeg,.mp3"/>
      </div>

      <div className="flex justify-center mt-4">
        <button 
          onClick={() => fileInputRef.current?.click()} 
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
        >
          Cliquer pour importer
        </button>
      </div>

      {file && !loading && (
        <div className="mt-6 flex justify-center">
          <button 
            onClick={handleSubmit} 
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
          >
            Transcrire
          </button>
        </div>
      )}

      {loading && (
        <div className="mt-6 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
          <p className="mt-2 text-gray-600">Chargement...</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;