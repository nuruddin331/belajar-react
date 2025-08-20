import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="hero-section flex items-center justify-center text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="arabic-text mb-4">
            وَقَالَ الَّذِينَ كَفَرُوا لَا تَسْمَعُوا لِهَٰذَا الْقُرْآنِ
            وَالْغَوْا فِيهِ لَعَلَّكُمْ تَغْلِبُونَ
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Quran Learning Center
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Pusat Pendidikan dan Pengkajian Al-Quran Profesional
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/program/1"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
            >
              Lihat Program
            </Link>

            <a
              href="#daftar"
              className="bg-white hover:bg-gray-100 text-green-700 px-6 py-3 rounded-md font-medium transition duration-300"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
