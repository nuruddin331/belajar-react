import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/assets/proyek/Logo Rumah Quran Dhiyaul Haq.jpg"
              alt="Logo Quran Learning Center berupa kitab Al-Quran dengan hiasan kaligrafi emas"
              className="w-12 h-12"
            />
            <Link to="/#hero" className="text-xl font-bold text-green-700">
              Quran Learning Center
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link to="/#profile" className="text-gray-700 hover:text-green-600">
              Profile
            </Link>
            <Link to="/#program" className="text-gray-700 hover:text-green-600">
              Program
            </Link>
            <Link to="/#artikel" className="text-gray-700 hover:text-green-600">
              Artikel
            </Link>
            <Link to="/#berita" className="text-gray-700 hover:text-green-600">
              Berita
            </Link>
            <Link to="/#jadwal" className="text-gray-700 hover:text-green-600">
              Jadwal
            </Link>
            <Link
              to="/#narasumber"
              className="text-gray-700 hover:text-green-600"
            >
              Narasumber
            </Link>
            <Link to="/#kontak" className="text-gray-700 hover:text-green-600">
              Kontak
            </Link>
          </div>

          <button id="mobile-menu-button" className="md:hidden text-gray-700">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        <div id="mobile-menu" className="hidden md:hidden bg-white pb-4">
          <div className="flex flex-col space-y-3 px-4">
            <Link
              to="/#program"
              className="text-gray-700 hover:text-green-600 py-2"
            >
              Program
            </Link>
            <Link
              to="/#artikel"
              className="text-gray-700 hover:text-green-600 py-2"
            >
              Artikel
            </Link>
            <Link
              to="/#berita"
              className="text-gray-700 hover:text-green-600 py-2"
            >
              Berita
            </Link>
            <Link
              to="/#jadwal"
              className="text-gray-700 hover:text-green-600 py-2"
            >
              Jadwal
            </Link>
            <Link
              to="/#narasumber"
              className="text-gray-700 hover:text-green-600 py-2"
            >
              Narasumber
            </Link>
            <Link
              to="/#kontak"
              className="text-gray-700 hover:text-green-600 py-2"
            >
              Kontak
            </Link>
            <Link
              to="/#profile"
              className="text-gray-700 hover:text-green-600 py-2"
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
