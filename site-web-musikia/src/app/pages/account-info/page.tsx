"use client";

import { useEffect, useState } from 'react';
import { supabase } from '../../../../initSupabase';
import { useRouter } from 'next/navigation';
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const ProfilePage = () => {
  const router = useRouter();
  interface UserData {
    uuid: string;
    email: string;
    instrument: string;
  }

  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      // Récupérer l'utilisateur connecté
      const { data: user, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
        router.push('/pages/login');
        return;
      }

      try {
        // Récupérer les données de l'utilisateur depuis la table 'users'
        const { data, error } = await supabase
          .from('users')
          .select('uuid, email, instrument') // Sélectionner les champs à afficher
          .eq('uuid', user.user.id) // Filtrer par l'ID de l'utilisateur connecté
          .single(); // On attend une seule entrée, car l'UUID est unique

        if (error) {
          throw error;
        }

        setUserData(data);
      } catch (err) {
        setError('Erreur lors de la récupération des données.');
        console.error(err);
      }
    };

    fetchUserData();
  }, [router]);

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <p className="text-red-500 text-center">{error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <p className="text-center">Chargement des données...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-4xl text-[var(--h1-color)] font-bold mb-6 text-center">Mon Profil</h1>
          <div className="mb-4">
            <p className="font-semibold">Email :</p>
            <p>{userData.email}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Instrument :</p>
            <p>{userData.instrument}</p>
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() => router.push('/pages/edit-profile')}
              className="bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)] text-[var(--btn-text)] py-2 px-4 rounded transition duration-300"
            >
              Modifier le profil
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
