import React from "react";
import { useParams, Link } from "react-router-dom";

// Data berita (berdasarkan komponen Berita)
const news = [
  {
    id: 1,
    title: "Wisuda Angkatan Pertama Program Mufassir",
    date: "10 Juni 2023",
    content:
      "Quran Learning Center mewisuda 25 mufassir muda setelah menyelesaikan program intensif selama 2 tahun. Acara ini dihadiri oleh berbagai tokoh agama dan masyarakat setempat, menandai langkah penting dalam mencetak generasi qurani yang berkompeten...",
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a712187-18e0-45f2-b71e-936a02e16639.png",
    excerpt:
      "Quran Learning Center mewisuda 25 mufassir muda setelah menyelesaikan program intensif selama 2 tahun...",
  },
  {
    id: 2,
    title: "Bakti Sosial Ramadan 1444 H",
    date: "5 Mei 2023",
    content:
      "Quran Learning Center mengadakan bakti sosial dengan membagikan 500 paket sembako untuk masyarakat sekitar. Kegiatan ini melibatkan relawan dari berbagai kalangan dan bertujuan untuk mempererat hubungan dengan komunitas lokal...",
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aca6475e-76f3-48c9-b064-3fba31b2ce86.png",
    excerpt:
      "Quran Learning Center mengadakan bakti sosial dengan membagikan 500 paket sembako untuk masyarakat sekitar...",
  },
  {
    id: 3,
    title: "Program Baru: Tahfidz untuk Profesional",
    date: "15 Juli 2023",
    content:
      "Kini hadir program khusus bagi pekerja profesional yang ingin menghafal Quran dengan jadwal fleksibel. Program ini dirancang untuk memenuhi kebutuhan individu dengan waktu terbatas namun tetap ingin mendalami Al-Quran...",
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/news3.jpg",
    excerpt:
      "Kini hadir program khusus bagi pekerja profesional yang ingin menghafal Quran dengan jadwal fleksibel...",
  },
  {
    id: 4,
    title: "Kerjasama dengan Lembaga Pendidikan Qatar",
    date: "1 Agustus 2023",
    content:
      "Quran Learning Center menjalin kerjasama dengan Qatar Foundation untuk pertukaran guru dan metode pembelajaran. Kolaborasi ini bertujuan untuk meningkatkan kualitas pendidikan Al-Quran dengan pendekatan global...",
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/news4.jpg",
    excerpt:
      "Quran Learning Center menjalin kerjasama dengan Qatar Foundation untuk pertukaran guru dan metode pembelajaran...",
  },
  {
    id: 5,
    title: "Pesantren Kilat Musim Panas 2023",
    date: "20 Agustus 2023",
    content:
      "Program intensif selama liburan sekolah dengan berbagai kegiatan menarik untuk anak-anak dan remaja. Pesantren kilat ini menggabungkan pembelajaran Al-Quran dengan aktivitas outdoor yang mendidik...",
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/news5.jpg",
    excerpt:
      "Program intensif selama liburan sekolah dengan berbagai kegiatan menarik untuk anak-anak dan remaja...",
  },
  {
    id: 6,
    title: "Pelatihan Guru Tahfidz Bersertifikat",
    date: "5 September 2023",
    content:
      "Program pelatihan intensif selama 1 bulan untuk mencetak guru-guru tahfidz yang kompeten dan bersertifikat. Pelatihan ini mencakup metode pengajaran modern dan pendalaman ilmu Al-Quran...",
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/news6.jpg",
    excerpt:
      "Program pelatihan intensif selama 1 bulan untuk mencetak guru-guru tahfidz yang kompeten dan bersertifikat...",
  },
];

function BeritaDetail() {
  const { id } = useParams();
  const newsItem = news.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-gray-800">
        Berita tidak ditemukan
      </div>
    );
  }

  // Filter berita terkait (tidak termasuk berita saat ini)
  const relatedNews = news.filter((item) => item.id !== parseInt(id));

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {newsItem.title}
        </h1>
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-64 object-cover mb-6 rounded-lg"
        />
        <p className="text-gray-500 mb-6">{newsItem.date}</p>
        <div className="prose mb-12 text-gray-600">
          <p>{newsItem.content}</p>
        </div>
        {/* Bagian Berita Terkait */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Berita Lainnya
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedNews.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link to={`/berita/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-gray-500 text-sm">{item.date}</span>
                    <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="text-green-600 hover:text-green-800 font-medium flex items-center">
                      Baca Selengkapnya{" "}
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

export default BeritaDetail;
