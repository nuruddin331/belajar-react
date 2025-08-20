import { Link } from "react-router-dom";

function Artikel() {
  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="artikel" className="py-16 bg-gray-50">
      {" "}
      {/* Perbaiki classNameName menjadi className */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Artikel Pekanan
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/400d0ca3-29e2-4085-8729-d75ec0ebbb47.png"
              alt="Ilustrasi tafsir surat Al-Fatihah dengan dekorasi kaligrafi emas di latar belakang"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-gray-500 text-sm">5 Juli 2023</span>
              <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                Keajaiban Tafsir Surat Al-Fatihah
              </h3>
              <p className="text-gray-600 mb-4">
                Mengupas tafsir mendalam surat pembuka Al-Quran dan relevansinya
                dengan kehidupan modern saat ini...
              </p>
              <Link
                to="/artikel/1" // Ganti a href dengan Link
                className="text-green-600 hover:text-green-800 font-medium flex items-center"
                onClick={scrollToTop} // Tambahkan ini
              >
                Baca Selengkapnya{" "}
                <i className="fas fa-chevron-right ml-1 text-sm"></i>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/400d0ca3-29e2-4085-8729-d75ec0ebbb47.png"
              alt="Ilustrasi tafsir surat Al-Fatihah dengan dekorasi kaligrafi emas di latar belakang"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-gray-500 text-sm">5 Juli 2023</span>
              <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                Keajaiban Tafsir Surat Al-Fatihah
              </h3>
              <p className="text-gray-600 mb-4">
                Mengupas tafsir mendalam surat pembuka Al-Quran dan relevansinya
                dengan kehidupan modern saat ini...
              </p>
              <Link
                to="/artikel/1" // Ganti a href dengan Link
                className="text-green-600 hover:text-green-800 font-medium flex items-center"
                onClick={scrollToTop} // Tambahkan ini
              >
                Baca Selengkapnya{" "}
                <i className="fas fa-chevron-right ml-1 text-sm"></i>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/400d0ca3-29e2-4085-8729-d75ec0ebbb47.png"
              alt="Ilustrasi tafsir surat Al-Fatihah dengan dekorasi kaligrafi emas di latar belakang"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-gray-500 text-sm">5 Juli 2023</span>
              <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                Keajaiban Tafsir Surat Al-Fatihah
              </h3>
              <p className="text-gray-600 mb-4">
                Mengupas tafsir mendalam surat pembuka Al-Quran dan relevansinya
                dengan kehidupan modern saat ini...
              </p>
              <Link
                to="/artikel/1" // Ganti a href dengan Link
                className="text-green-600 hover:text-green-800 font-medium flex items-center"
                onClick={scrollToTop} // Tambahkan ini
              >
                Baca Selengkapnya{" "}
                <i className="fas fa-chevron-right ml-1 text-sm"></i>
              </Link>
            </div>
          </div>

          {/* Ulangi untuk artikel lainnya, ganti a href dengan Link dan tambahkan onClick */}
        </div>
      </div>
      <div className="text-center mt-8 ">
        <Link
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
          to="/artikel/1" // Perbaiki typo: /ertikel menjadi /artikel
          onClick={scrollToTop} // Ini yang utama untuk tombol besar
        >
          Lihat Semua Artikel
        </Link>
      </div>
    </section>
  );
}

export default Artikel;
