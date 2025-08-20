import React from "react";
import { useParams, Link } from "react-router-dom";

// Data program (berdasarkan komponen Program)
const programs = [
  {
    id: 1,
    title: "Program Pengkaderan Mufassir",

    content:
      "Program intensif 2 tahun untuk mencetak mufassir (ahli tafsir) profesional dengan kurikulum terstruktur dan bimbingan ulama kompeten. Program ini mencakup studi mendalam tentang tafsir klasik dan kontemporer, metode pengajaran, serta aplikasi praktis dalam kehidupan sehari-hari...",
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7e4fc0b5-3ac6-431c-811b-cf5889573699.png",
    excerpt:
      "Program intensif 2 tahun untuk mencetak mufassir (ahli tafsir) profesional dengan kurikulum terstruktur...",
  },
  {
    id: 2,
    title: "Seminar Biologi Quran",

    content:
      "Eksplorasi hubungan sains dan Al-Quran dengan fokus pada fakta-fakta biologi modern yang sudah disebutkan dalam kitab suci. Seminar ini menghadirkan narasumber ahli dalam bidang biologi dan tafsir untuk memberikan wawasan yang mendalam dan relevan...",
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/11a9028f-8ad7-48bc-afae-d7c0e2c90c30.png",
    excerpt:
      "Eksplorasi hubungan sains dan Al-Quran dengan fokus pada fakta-fakta biologi modern...",
  },
  {
    id: 3,
    title: "Quranic Camp",

    content:
      "Program 3 hari 2 malam mengkaji Al-Quran di alam terbuka dengan metode pembelajaran yang menyenangkan dan interaktif. Peserta akan mengikuti kegiatan seperti diskusi kelompok, tadarus alam, dan pelatihan kepemimpinan berbasis nilai-nilai qurani...",
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/42b3eb3e-58ad-4dbd-9f58-fb2c8443a07a.png",
    excerpt:
      "Program 3 hari 2 malam mengkaji Al-Quran di alam terbuka dengan metode pembelajaran yang menyenangkan...",
  },
];

function ProgramDetail() {
  const { id } = useParams();
  const program = programs.find((item) => item.id === parseInt(id));

  if (!program) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-gray-800">
        Program tidak ditemukan
      </div>
    );
  }

  // Filter program terkait (tidak termasuk program saat ini)
  const relatedPrograms = programs.filter((item) => item.id !== parseInt(id));

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {program.title}
        </h1>
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-64 object-cover mb-6 rounded-lg"
        />
        <p className="text-green-600 font-medium mb-4">{program.price}</p>
        <div className="prose mb-12 text-gray-600">
          <p>{program.content}</p>
        </div>
        {/* Bagian Program Terkait */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Program Lainnya
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPrograms.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link to={`/program/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-green-600 font-medium mb-2">
                      {item.price}
                    </p>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="text-green-600 hover:text-green-800 font-medium flex items-center">
                      Selengkapnya{" "}
                      <i className="fas fa-chevron-right ml-1 text-sm"></i>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProgramDetail;
