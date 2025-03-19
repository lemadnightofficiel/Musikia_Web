"use client";

import '../../globals.css';
import React, { useState } from "react";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number; duration: string } | null>(null);

  const plans = [
    { name: "Unitaire", price: 4, duration: "Pour une musique", color: "green" },
    { name: "Mensuel", price: 15, duration: "1 mois", color: "indigo" },
    { name: "Trimestriel", price: 40, duration: "3 mois", color: "indigo" },
    { name: "Annuel", price: 160, duration: "12 mois", color: "indigo" }
  ];

  return (
    <section className="flex flex-col min-h-screen bg-gradient-to-b from-gray-200 to-gray-100">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Choisissez votre abonnement</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition-all duration-300">
              <h2 className={`text-xl font-bold mb-2 text-${plan.color}-700`}>{plan.name}</h2>
              <p className="text-sm mb-2 text-gray-600">{plan.duration}</p>
              <p className="text-md font-extrabold mb-3 text-gray-900">{plan.price}€</p>
              <button 
                onClick={() => setSelectedPlan(plan)}
                className={`bg-${plan.color}-600 text-white px-3 py-2 rounded-md hover:bg-${plan.color}-700 transition-all font-semibold w-full`}
              >
                Acheter
              </button>
            </div>
          ))}
        </div>
        {selectedPlan && (
          <p className="mt-6 text-lg font-semibold text-center text-gray-700">
            Vous avez choisi l&apos;abonnement <span className="text-indigo-600">{selectedPlan.name}</span>.
          </p>
        )}
      </main>
      <Footer />
    </section>
  );
};

export default SubscriptionPage;
