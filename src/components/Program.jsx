import React from "react";

function Program() {
  return (
    <>
      <section id="program" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Program Unggulan Kami
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="program-card bg-white rounded-lg shadow-lg overflow-hidden transition duration-500">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7e4fc0b5-3ac6-431c-811b-cf5889573699.png"
                alt="Sekelompok santri sedang belajar tafsir Al-Quran di ruang kelas dengan pencahayaan hangat"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Program Pengkaderan Mufassir
                </h3>
                <p className="text-gray-600 mb-4">
                  Program intensif 2 tahun untuk mencetak mufassir (ahli tafsir)
                  profesional dengan kurikulum terstruktur dan bimbingan ulama
                  kompeten.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-medium">FREE</span>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-800 font-medium flex items-center"
                  >
                    Selengkapnya{" "}
                    <i className="fas fa-chevron-right ml-1 text-sm"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="program-card bg-white rounded-lg shadow-lg overflow-hidden transition duration-500">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/11a9028f-8ad7-48bc-afae-d7c0e2c90c30.png"
                alt="Seminar ilmiah dengan pembicara di panggung dan LCD presentasi tentang tema biologi dalam Al-Quran"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Seminar Biologi Quran
                </h3>
                <p className="text-gray-600 mb-4">
                  Eksplorasi hubungan sains dan Al-Quran dengan fokus pada
                  fakta-fakta biologi modern yang sudah disebutkan dalam kitab
                  suci.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-medium">FREE</span>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-800 font-medium flex items-center"
                  >
                    Selengkapnya{" "}
                    <i className="fas fa-chevron-right ml-1 text-sm"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="program-card bg-white rounded-lg shadow-lg overflow-hidden transition duration-500">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/42b3eb3e-58ad-4dbd-9f58-fb2c8443a07a.png"
                alt="Kegiatan outdoor bersama di alam dengan peserta duduk melingkar mempelajari Al-Quran di bawah pepohonan"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Quranic Camp
                </h3>
                <p className="text-gray-600 mb-4">
                  Program 3 hari 2 malam mengkaji Al-Quran di alam terbuka
                  dengan metode pembelajaran yang menyenangkan dan interaktif.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-medium">FREE</span>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-800 font-medium flex items-center"
                  >
                    Selengkapnya{" "}
                    <i className="fas fa-chevron-right ml-1 text-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Program;
