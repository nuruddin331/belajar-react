import React from "react";
import { Link } from "react-router-dom";

function Berita() {
  return (
    <>
      <section id="berita" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Berita Acara
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Update terbaru tentang kegiatan dan event Quran Learning Center
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Existing News 1 */}
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a712187-18e0-45f2-b71e-936a02e16639.png"
                alt="Acara wisuda santri Program Mufassir dengan pakaian toga dan peci"
                className="w-full md:w-48 h-auto object-cover rounded"
              />
              <div className="flex-1">
                <span className="text-gray-500 text-sm">10 Juni 2023</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                  Wisuda Angkatan Pertama Program Mufassir
                </h3>
                <p className="text-gray-600 mb-4">
                  Quran Learning Center mewisuda 25 mufassir muda setelah
                  menyelesaikan program intensif selama 2 tahun...
                </p>
                <Link
                  to="/berita/wisuda-angkatan-pertama"
                  className="text-green-600 hover:text-green-800 font-medium flex items-center"
                >
                  Baca Selengkapnya{" "}
                  <i className="fas fa-chevron-right ml-1 text-sm"></i>
                </Link>
              </div>
            </div>

            {/* Existing News 2 */}
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aca6475e-76f3-48c9-b064-3fba31b2ce86.png"
                alt="Kegiatan bakti sosial dengan relawan membagikan paket sembako"
                className="w-full md:w-48 h-auto object-cover rounded"
              />
              <div className="flex-1">
                <span className="text-gray-500 text-sm">5 Mei 2023</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                  Bakti Sosial Ramadan 1444 H
                </h3>
                <p className="text-gray-600 mb-4">
                  Quran Learning Center mengadakan bakti sosial dengan
                  membagikan 500 paket sembako untuk masyarakat sekitar...
                </p>
                <Link
                  to="/berita/bakti-sosial-ramadan"
                  className="text-green-600 hover:text-green-800 font-medium flex items-center"
                >
                  Baca Selengkapnya{" "}
                  <i className="fas fa-chevron-right ml-1 text-sm"></i>
                </Link>
              </div>
            </div>

            {/* New News 1 */}
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/news3.jpg"
                alt="Peluncuran program baru Tahfidz untuk profesional"
                className="w-full md:w-48 h-auto object-cover rounded"
              />
              <div className="flex-1">
                <span className="text-gray-500 text-sm">15 Juli 2023</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                  Program Baru: Tahfidz untuk Profesional
                </h3>
                <p className="text-gray-600 mb-4">
                  Kini hadir program khusus bagi pekerja profesional yang ingin
                  menghafal Quran dengan jadwal fleksibel...
                </p>
                <Link
                  to="/berita/program-tahfidz-profesional"
                  className="text-green-600 hover:text-green-800 font-medium flex items-center"
                >
                  Baca Selengkapnya{" "}
                  <i className="fas fa-chevron-right ml-1 text-sm"></i>
                </Link>
              </div>
            </div>

            {/* New News 2 */}
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/news4.jpg"
                alt="Kerjasama dengan lembaga pendidikan internasional"
                className="w-full md:w-48 h-auto object-cover rounded"
              />
              <div className="flex-1">
                <span className="text-gray-500 text-sm">1 Agustus 2023</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                  Kerjasama dengan Lembaga Pendidikan Qatar
                </h3>
                <p className="text-gray-600 mb-4">
                  Quran Learning Center menjalin kerjasama dengan Qatar
                  Foundation untuk pertukaran guru dan metode pembelajaran...
                </p>
                <Link
                  to="/berita/kerjasama-qatar"
                  className="text-green-600 hover:text-green-800 font-medium flex items-center"
                >
                  Baca Selengkapnya{" "}
                  <i className="fas fa-chevron-right ml-1 text-sm"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/berita/1"
              className="inline-block border border-green-600 hover:bg-green-600 hover:text-white text-green-600 px-6 py-3 rounded-md font-medium transition duration-300"
            >
              Arsip Berita Lainnya
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Berita;
