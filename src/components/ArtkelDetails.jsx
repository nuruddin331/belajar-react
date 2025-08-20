import React from "react";
import { useParams, Link } from "react-router-dom";

// Data untuk semua artikel
const allArticles = [
  {
    id: 1,
    title: "Artikel Mingguan",
    mainImage: "/assets/programlaunching.jpeg",
    content: [
      "Kopi Ndeso Premium adalah kopi pilihan terbaik yang diproduksi dengan standar kualitas tinggi. Setiap biji kopi dipilih secara selektif dari perkebunan terbaik di Indonesia untuk memberikan cita rasa yang autentik dan berkualitas premium.",
      "Dengan proses pengolahan yang modern namun tetap mempertahankan kearifan lokal, Kopi Ndeso Premium menghadirkan pengalaman minum kopi yang tak terlupakan. Setiap tegukan memberikan sensasi rasa yang kaya dan aroma yang menggugah selera.",
      "Nikmati kelezatan kopi premium yang telah dipercaya oleh ribuan pecinta kopi di seluruh Indonesia. Kopi Ndeso Premium - pilihan terbaik untuk memulai hari Anda dengan semangat.",
    ],
    sections: [
      {
        title: "Bahan kopi berkualitas",
        image: "/assets/programlaunching.jpeg",
        content: [
          "Kami menggunakan biji kopi pilihan terbaik yang berasal dari perkebunan kopi berkualitas tinggi. Setiap biji kopi melalui proses seleksi ketat untuk memastikan kualitas dan cita rasa yang konsisten.",
          "Dengan standar kualitas internasional, biji kopi kami dipetik pada waktu yang tepat dan diolah dengan teknologi modern untuk menghasilkan kopi dengan aroma dan rasa yang sempurna.",
        ],
      },
      {
        title: "Dikemas dengan baik",
        image: "/assets/programlaunching.jpeg",
        content: [
          "Kemasan yang berkualitas tinggi menjadi prioritas utama kami untuk menjaga kesegaran dan kualitas kopi. Setiap produk dikemas dengan teknologi vacuum seal yang canggih.",
          "Dengan kemasan yang ramah lingkungan dan tahan lama, kopi Anda akan tetap segar dan nikmat hingga disajikan. Kemasan yang praktis juga memudahkan penyimpanan di rumah.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Sejarah Kopi Nusantara",
    date: "12 Maret 2024",
    mainImage: "assets/coffee_cup_1.jpeg",
    content: [
      "Kopi pertama kali dibawa ke Indonesia oleh Belanda pada abad ke-17. Jenis kopi pertama yang ditanam adalah Arabika, yang dibawa dari Yaman.",
      "Perkebunan kopi pertama di Indonesia didirikan di Jawa Timur pada tahun 1696. Karena kesuburan tanah dan iklim yang mendukung, kopi Jawa segera menjadi terkenal di Eropa.",
      "Pada abad ke-19, hampir seluruh dataran tinggi di Jawa, Sumatra, dan Sulawesi telah ditanami kopi. Kopi Indonesia menjadi salah satu komoditas ekspor utama Hindia Belanda.",
    ],
    sections: [
      {
        title: "Perkembangan Kopi di Era Modern",
        image: "assets/coffee_beans_background.jpeg",
        content: [
          "Setelah kemerdekaan, industri kopi Indonesia terus berkembang. Berbagai varietas baru diperkenalkan, termasuk Robusta yang lebih tahan penyakit.",
          "Pada tahun 1970-an, pemerintah mendorong petani kopi untuk membentuk koperasi dan meningkatkan kualitas produksi. Hal ini membuat kopi Indonesia semakin diakui di pasar internasional.",
        ],
      },
      {
        title: "Kopi Indonesia di Kancah Global",
        image: "assets/branch_1.jpg",
        content: [
          "Saat ini, Indonesia adalah produsen kopi terbesar keempat di dunia. Kopi-kopi spesial seperti Kopi Luwak, Toraja, Mandheling, dan Java Arabica sangat dihargai oleh para penikmat kopi internasional.",
          "Kopi Indonesia dikenal karena karakteristik rasa yang kuat, full body, dan aroma yang khas. Cita rasa tanah vulkanik memberikan sentuhan unik yang tidak ditemukan di kopi dari daerah lain.",
        ],
      },
    ],
  },
  // Tambahkan artikel lainnya di sini
];

// Data untuk rekomendasi artikel
const recommendedArticles = [
  {
    id: 3,
    title: "Tips menyeduh kopi",
    date: "12 Maret 2024",
    image: "/assets/programlaunching.jpeg",
  },
  {
    id: 4,
    title: "Manfaat kopi untuk kesehatan",
    date: "10 Maret 2024",
    image: "/assets/programlaunching.jpeg",
  },
  {
    id: 5,
    title: "Kopi terbaik Indonesia",
    date: "8 Maret 2024",
    image: "/assets/programlaunching.jpeg",
  },
  {
    id: 6,
    title: "Budaya minum kopi",
    date: "5 Maret 2024",
    image: "/assets/programlaunching.jpeg",
  },
];

// Data untuk artikel populer
const popularArticles = [
  {
    id: 7,
    title: "Latte Art",
    views: "1,234",
    image: "/assets/programlaunching.jpeg",
  },
  {
    id: 8,
    title: "Espresso Perfect",
    views: "987",
    image: "/assets/programlaunching.jpeg",
  },
  {
    id: 9,
    title: "French Press",
    views: "756",
    image: "/assets/programlaunching.jpeg",
  },
];

function ArtikelDetailS() {
  // Ambil parameter id dari URL
  const { id } = useParams();

  // Cari artikel berdasarkan id
  const artikel = allArticles.find((art) => art.id === parseInt(id));

  // Jika artikel tidak ditemukan
  if (!artikel) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Artikel Tidak Ditemukan
        </h2>
        <Link to="/artikel" className="text-blue-600 hover:underline">
          Kembali ke Daftar Artikel
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {artikel.title}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <img
                src={artikel.mainImage}
                alt={artikel.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                {artikel.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            {artikel.sections.map((section, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden mb-8"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    {section.content.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-gray-600 mb-4 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-100 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </article>
            ))}

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Kirim komentar
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Anda
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan email Anda"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Komentar
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tulis komentar Anda..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Kirim
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Rekomendasi artikel
              </h3>
              <div className="space-y-4">
                {recommendedArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/artikel/${article.id}`}
                    className="block hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <div className="flex space-x-3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-1">
                          {article.title}
                        </h4>
                        <p className="text-xs text-gray-500">{article.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Artikel populer
              </h3>
              <div className="space-y-4">
                {popularArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/artikel/${article.id}`}
                    className="block hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <div className="flex space-x-3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-1">
                          {article.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {article.views} views
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg p-6 text-white mb-6">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2">Kunjungi</h3>
                <p className="text-sm mb-4">
                  youtube kami di link di bawah ini :
                </p>
                <button className="bg-white text-orange-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  <a
                    href="https://www.youtube.com/@quranlearningcenter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kunjungi YouTube
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtikelDetailS;
