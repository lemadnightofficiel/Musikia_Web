"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold text-center">Musikia</h2>
          <p className="mt-2 text-sm text-center">Transformez vos fichiers audio en partitions musicales.</p>
        </div>
        <hr className="my-6 border-gray-700" />
        <p className="text-center text-sm mt-4">© {new Date().getFullYear()} Musikia. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
