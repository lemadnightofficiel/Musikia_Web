"use client";

import '../../globals.css';
import LoggedFooter from '@/app/components/LoggedFooter';
import LoggedNavbar from '@/app/components/LoggedNavbar';
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type UserInfo = {
  nom: string;
  email: string;
  motdepasse: string;
  instrument: string;
};

const PasswordField: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  toggleShowPassword: () => void;
}> = ({ value, onChange, showPassword, toggleShowPassword }) => {
  return (
    <div className="relative w-full">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        aria-label="Mot de passe"
      />
      <button type="button" onClick={toggleShowPassword} className="absolute right-3 top-2 text-gray-600 hover:text-blue-500 transition duration-200" aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}>
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </button>
    </div>
  );
};

const PasswordModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newPassword: string) => void;
}> = ({ isOpen, onClose, onSubmit }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      onSubmit(newPassword);
      onClose();
    } else {
      alert("Les mots de passe ne correspondent pas.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Modifier le Mot de Passe</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Nouveau Mot de Passe</label>
          <PasswordField value={newPassword} onChange={(e) => setNewPassword(e.target.value)} showPassword={showNewPassword} toggleShowPassword={() => setShowNewPassword(!showNewPassword)}/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Confirmer le Mot de Passe</label>
          <PasswordField value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} showPassword={showConfirmPassword} toggleShowPassword={() => setShowConfirmPassword(!showConfirmPassword)}/>
        </div>
        <div className="flex justify-end">
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Valider</button>
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Annuler</button>
        </div>
      </div>
    </div>
  );
};

const AccountInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    nom: 'John Doe',
    email: 'john.doe@example.com',
    motdepasse: 'eoedkoed777@',
    instrument: 'Guitare'
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingField, setEditingField] = useState<keyof UserInfo | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdatePassword = (newPassword: string) => {
    setUserInfo(prev => ({ ...prev, motdepasse: newPassword }));
    alert("Mot de passe mis à jour avec succès !");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <LoggedNavbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-[var(--h1-color)] text-3xl font-bold mb-6 text-center">Mes Informations</h1>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
            {Object.entries(userInfo).map(([key, value]) => (
              <div key={key} className="mb-4 border-b pb-4 last:border-b-0">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={key}>
                  {key === 'motdepasse' ? 'Mot de passe' : key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <div className="flex items-center justify-between">
                  {editingField === key ? (
                    key === 'instrument' ? (
                      <select name={key} value={value} onChange={handleChange} onBlur={() => setEditingField(null)} className={`border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300`}>
                        <option value="">Sélectionnez un instrument</option>
                        <option value="Guitare">Guitare</option>
                        <option value="Piano">Piano</option>
                        <option value="Batterie">Batterie</option>
                        <option value="Violon">Violon</option>
                      </select>
                    ) : (
                      <input type={key === 'motdepasse' ? "password" : "text"} name={key} value={value} onChange={handleChange} onBlur={() => setEditingField(null)} className={`border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300`}/>
                    )
                  ) : (
                    <>
                      {key === 'motdepasse' ? (
                        <span className="text-gray-800">••••••••••</span>
                      ) : (
                        <span className="text-gray-800">{value}</span>
                      )}
                      {key === 'motdepasse' ? (
                        <button onClick={() => setIsModalOpen(true)} className="bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)] ml-2 transition duration-200 p-2 rounded" aria-label={`Modifier ${key}`}>
                          <FaEdit />
                        </button>
                      ) : (
                        <button onClick={() => setEditingField(key as keyof UserInfo)} className="bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)] ml-2 transition duration-200 p-2 rounded" aria-label={`Modifier ${key}`}>
                          <FaEdit />
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <PasswordModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleUpdatePassword} />
      <LoggedFooter />
    </div>
  );
};

export default AccountInfo;
