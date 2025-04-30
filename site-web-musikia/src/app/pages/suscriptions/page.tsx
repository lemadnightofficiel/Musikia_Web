"use client";

import '../../globals.css';
import React, { useState } from "react";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { FaMusic, FaCrown, FaRegCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number; duration: string; } | null>(null);
  const [showModal, setShowModal] = useState(false);

  const plans = [
    { 
      name: "Unitaire", 
      price: 4, 
      duration: "Pour une musique", 
      color: "green",
      icon: <FaMusic className="text-3xl mx-auto mb-4 text-green-500" />,
      popular: false
    },
    { 
      name: "Mensuel", 
      price: 15, 
      duration: "1 mois", 
      color: "blue",
      icon: <FaRegCalendarAlt className="text-3xl mx-auto mb-4 text-blue-500" />,
      popular: true  // Changé de false à true
    },
    { 
      name: "Trimestriel", 
      price: 40, 
      duration: "3 mois", 
      color: "purple",
      icon: <FaRegCalendarAlt className="text-3xl mx-auto mb-4 text-purple-500" />,
      popular: false  // Changé de true à false
    },
    { 
      name: "Annuel", 
      price: 160, 
      duration: "12 mois", 
      color: "indigo",
      icon: <FaCrown className="text-3xl mx-auto mb-4 text-indigo-500" />,
      popular: false
    }
  ];

  const handlePlanSelection = (plan: { name: string; price: number; duration: string; color: string; icon: JSX.Element; popular: boolean }) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-50 via-white to-blue-50">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-16 mt-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            Choisissez votre abonnement
          </h1>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 border ${plan.popular ? 'border-blue-500' : 'border-gray-100'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg font-medium text-sm">
                  POPULAIRE
                </div>
              )}
              <div className="p-6">
                <div className="mb-4">
                  {plan.icon}
                  <h2 className={`text-2xl font-bold mb-1 text-${plan.color}-600`}>{plan.name}</h2>
                  <p className="text-sm mb-2 text-gray-500 font-medium">{plan.duration}</p>
                </div>

                <div className="mb-6 flex items-end">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}€</span>
                  {plan.name !== "Unitaire" && <span className="text-gray-500 ml-1 mb-1">/période</span>}
                </div>
                
                <button 
                  onClick={() => handlePlanSelection(plan)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : `bg-${plan.color}-100 hover:bg-${plan.color}-200 text-${plan.color}-700`
                  }`}
                >
                  Choisir ce plan
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {selectedPlan && showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold mb-4">Confirmation d&apos;abonnement</h3>
              <p className="mb-4">
                Vous avez choisi l&apos;abonnement <span className="font-semibold text-blue-600">{selectedPlan.name}</span> à {selectedPlan.price}€.
              </p>
            
              <div className="flex space-x-4">
                <button 
                  onClick={() => setShowModal(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-all duration-300 flex-1"
                >
                  Annuler
                </button>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 flex-1"
                >
                  Procéder au paiement
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </main>
      <Footer />
    </section>
  );
};

export default SubscriptionPage;