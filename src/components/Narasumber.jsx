import React from "react";

function Narasumber() {
  return (
    <>
      <section id="narasumber" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Narasumber
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Tim pengajar profesional dan ahli di bidangnya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9ce82bde-5b1d-45e4-a7a7-06602b8ce41e.png"
                  alt="Foto Profil Ust. Ahmad Zainuddin, M.Ag, pakar tafsir dengan sorban putih dan senyum ramah"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Ust. Ahmad Zainuddin, M.Ag
              </h3>
              <p className="text-gray-600">Pakar Tafsir Al-Quran</p>
              <div className="flex justify-center space-x-2 mt-3">
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-600">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7fcdb2dc-ebcb-4888-bf6e-cc26bb72b649.png"
                  alt="Foto Profil Dr. Nurul Hikmah, Lc., M.Hum, perempuan berjilbab dengan kacamata membaca kitab"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Dr. Nurul Hikmah, Lc., M.Hum
              </h3>
              <p className="text-gray-600">Ahli Ulumul Quran</p>
              <div className="flex justify-center space-x-2 mt-3">
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-600">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/402b5089-5136-4062-9257-83f25e994c96.png"
                  alt="Foto Profil Prof. Dr. H. Faisal Basri, M.A, pria paruh baya berpeci dengan kacamata bingkai hitam"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Prof. Dr. H. Faisal Basri, M.A
              </h3>
              <p className="text-gray-600">Pakar Tafsir Kontemporer</p>
              <div className="flex justify-center space-x-2 mt-3">
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-600">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3f44cf10-586e-4cef-bda7-95d2eddd69d8.png"
                  alt="Foto Profil Dr. Ratna Sari, S.Si., M.Sc, ilmuwan muslimah berjilbab dengan background lab sains"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Dr. Ratna Sari, S.Si., M.Sc
              </h3>
              <p className="text-gray-600">Ahli Sains Quran</p>
              <div className="flex justify-center space-x-2 mt-3">
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-600">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
            >
              Lihat Semua Narasumber
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Narasumber;
