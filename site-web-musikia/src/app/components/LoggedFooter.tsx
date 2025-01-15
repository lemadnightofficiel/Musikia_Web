"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-base font-semibold text-center">Musikia</h2>
          <p className="mt-1 text-xs text-center">Transformez vos fichiers audio en partitions musicales.</p>
        </div>
        <hr className="my-2 border-gray-700" />
        <p className="text-center text-xs mt-2">© {new Date().getFullYear()} Musikia. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
