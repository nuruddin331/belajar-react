import React from "react";
import { Link } from "react-router-dom";

function ProfileDetail() {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Tentang Quran Learning Center
        </h1>
        <img
          src="/assets/hero-img.webp"
          alt="Gedung Quran Learning Center dengan arsitektur masjid modern dan taman yang asri"
          className="w-full h-64 object-cover mb-6 rounded-lg"
        />
        <div className="prose mb-12 text-gray-600">
          <p>
            Quran Learning Center didirikan pada tahun 2015 dengan visi menjadi
            pusat pendidikan Al-Quran terdepan yang mengintegrasikan ilmu tafsir
            klasik dengan pendekatan kontemporer untuk menjawab tantangan zaman.
            Kami berkomitmen untuk mencetak generasi qurani yang tidak hanya
            menguasai Al-Quran, tetapi juga mampu mengaplikasikan nilai-nilainya
            dalam kehidupan sehari-hari.
          </p>
          <p>
            Sejak berdiri, kami telah meluluskan lebih dari 500 santri dari
            berbagai program unggulan, termasuk Program Pengkaderan Mufassir,
            Seminar Biologi Quran, dan Quranic Camp. Dengan dukungan lebih dari
            25 narasumber ahli, kami terus mengembangkan metode pembelajaran
            yang relevan dan inovatif.
          </p>
        </div>
        {/* Nilai Inti */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Nilai Inti Kami
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Integritas: Menjaga kejujuran dan akhlak mulia dalam setiap
              kegiatan.
            </li>
            <li>
              Inovasi: Mengembangkan pendekatan modern dalam pendidikan
              Al-Quran.
            </li>
            <li>
              Komunitas: Membangun hubungan yang erat dengan masyarakat sekitar.
            </li>
            <li>
              Keunggulan: Berusaha mencapai standar tertinggi dalam pendidikan
              dan pengajaran.
            </li>
          </ul>
        </div>
        {/* Tim Manajemen */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Tim Manajemen Kami
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9ce82bde-5b1d-45e4-a7a7-06602b8ce41e.png"
                  alt="Foto Profil Ust. Ahmad Zainuddin, M.Ag"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Ust. Ahmad Zainuddin, M.Ag
              </h3>
              <p className="text-gray-600">Direktur Utama</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7fcdb2dc-ebcb-4888-bf6e-cc26bb72b649.png"
                  alt="Foto Profil Dr. Nurul Hikmah, Lc., M.Hum"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Dr. Nurul Hikmah, Lc., M.Hum
              </h3>
              <p className="text-gray-600">Kepala Kurikulum</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/narasumber"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
          >
            Lihat Narasumber Kami
          </Link>
        </div>
      </article>
    </div>
  );
}

export default ProfileDetail;
