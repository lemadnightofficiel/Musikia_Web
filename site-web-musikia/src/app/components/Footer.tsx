"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold text-gray-800">Musikia</h2>
            <p className="text-sm text-gray-600">Transformez vos fichiers audio en partitions musicales</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/pages/mentions-legales" className="text-sm text-gray-600 hover:text-gray-900">
              Mentions légales
            </Link>
            <Link href="/pages/confidentialite" className="text-sm text-gray-600 hover:text-gray-900">
              Politique de confidentialité
            </Link>
            <Link href="/pages/contact" className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
        <hr className="my-4 border-gray-300" />
        <p className="text-center text-xs text-gray-600"> {new Date().getFullYear()} Musikia. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
