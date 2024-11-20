"use client";
import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [transcription, setTranscription] = useState<string | null>(null);
  const [partitionUrl, setPartitionUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === "audio/mp3") {
        setFile(selectedFile);
      } else {
        alert("Veuillez sélectionner un fichier MP3.");
        setFile(null);
      }
    }
  };

  const handleSubmit = async () => {
    if (!file) return;

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 5000));

    setTranscription("Transcription simulée du fichier audio.");
    setPartitionUrl("/path/to/partition");

    setLoading(false);
  };

  return (
    <section className="flex flex-col items-center">
      <label htmlFor="file-upload" className="mb-2">Insérez votre fichier MP3 :</label>
      <input id="file-upload" type="file" accept="audio/mp3,audio/mp3" onChange={handleFileChange} className="border border-gray-300 rounded p-2 mb-4 w-full max-w-md"/>
      <button onClick={handleSubmit} disabled={loading || !file} className={`bg-blue-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
        {loading ? "Transcription en cours..." : "Envoyer / Transcrire"}
      </button>

      {loading && (
        <p className="mt-4 text-gray-500">Chargement...</p>
      )}

      {transcription && (
        <section className="mt-6 bg-gray-100 p-4 rounded shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold">Transcription :</h2>
          <p>{transcription}</p>
          {partitionUrl && (
            <a href={partitionUrl} download className="mt-2 inline-block bg-green-500 text-white py-2 px-4 rounded">Télécharger la partition</a>
          )}
        </section>
      )}
    </section>
  );
};

export default FileUpload;