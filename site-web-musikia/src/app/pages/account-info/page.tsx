"use client";

import LoggedFooter from '@/app/components/LoggedFooter';
import LoggedNavbar from '@/app/components/LoggedNavbar';
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

// Type pour les informations de l'utilisateur
type UserInfo = {
  nom: string;
  email: string;
  instrument: string;
};

const AccountInfo = () => {
  // État pour stocker les informations de l'utilisateur
  const [userInfo, setUserInfo] = useState<UserInfo>({
    nom: 'John Doe',
    email: 'john.doe@example.com',
    instrument: 'Guitare'
  });

  // État pour gérer quel champ est en cours d'édition
  const [editing, setEditing] = useState<keyof UserInfo | null>(null);

  // Fonction pour gérer le changement des champs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  // Fonction pour commencer l'édition d'un champ
  const startEditing = (field: keyof UserInfo) => {
    setEditing(field);
  };

  // Fonction pour terminer l'édition d'un champ
  const stopEditing = () => {
    setEditing(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <LoggedNavbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-indigo-600 text-3xl font-bold mb-6 text-center">Mes Informations</h1>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
            {Object.entries(userInfo).map(([key, value]) => (
              <div key={key} className="mb-4 border-b pb-4 last:border-b-0">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <div className="flex items-center justify-between">
                  {editing === key ? (
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
                      id={key}
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleChange}
                      onBlur={stopEditing}
                      autoFocus
                    />
                  ) : (
                    <>
                      <span className="text-gray-800">{value}</span>
                      <button
                        onClick={() => startEditing(key as keyof UserInfo)}
                        className="ml-2 text-blue-500 hover:text-blue-700 transition duration-200"
                      >
                        <FaEdit />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <LoggedFooter />
    </div>
  );
};

export default AccountInfo;
