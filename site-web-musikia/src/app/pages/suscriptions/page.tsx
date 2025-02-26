"use client";

import '../../globals.css';
import React, { useState } from "react";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number; duration: string } | null>(null);

  const plans = [
    { name: "Mensuel", price: 15, duration: "1 mois" },
    { name: "Trimestriel", price: 40, duration: "3 mois" },
    { name: "Annuel", price: 160, duration: "12 mois" }
  ];

  const purchaseMusic = () => {
    alert("Achat d'une musique pour 4€ effectué avec succès!");
  };

  return (
    <section className="flex flex-col min-h-screen bg-gradient-to-b from-gray-200 to-gray-100">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-8 text-gray-800">Choisissez votre abonnement</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-3 text-indigo-700">{plan.name}</h2>
                <p className="text-lg mb-4 text-gray-600">{plan.duration}</p>
                <p className="text-2xl font-extrabold mb-6 text-gray-900">{plan.price}€</p>
                <button 
                  onClick={() => setSelectedPlan(plan)}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all w-full font-semibold"
                >
                  S'abonner
                </button>
              </div>
            ))}
          </div>
          {selectedPlan && (
            <p className="mt-8 text-xl font-semibold text-gray-700">Vous avez choisi l'abonnement <span className="text-indigo-600">{selectedPlan.name}</span>.</p>
          )}
          <div className="mt-16">
            <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Pour une musique</h2>
            <p className="text-lg mb-6 text-gray-600">Prix unitaire : <span className="font-bold text-gray-900">4€</span></p>
            <button 
              onClick={purchaseMusic}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all font-semibold"
            >
              Acheter
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default SubscriptionPage;
