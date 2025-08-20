import React from "react";

function Footer() {
  return (
    <>
      <footer class="text-white">
        <div class="container mx-auto px-4 py-12">
          <div class="grid md:grid-cols-4 gap-8">
            <div>
              <div class="flex items-center mb-4">
                <img
                  src="/assets/proyek/Logo Rumah Quran Dhiyaul Haq.webp"
                  alt="Logo kecil Quran Learning Center dengan tulisan arab"
                  class="w-10 h-10 mr-2"
                />
                <h3 class="text-xl font-bold">Quran Learning Center</h3>
              </div>
              <p class="text-green-100 mb-4">
                Pusat Pendidikan dan Pengkajian Al-Quran Profesional untuk
                Membentuk Generasi Qurani.
              </p>
              <div class="flex space-x-4">
                <a
                  href="https://www.facebook.com/yourpage"
                  class="text-green-100 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  class="text-green-100 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/no__or677"
                  class="text-green-100 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/yourchannel"
                  class="text-green-100 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-bold mb-4">Tautan Cepat</h3>
              <ul class="space-y-2">
                <li>
                  <a href="#program" class="text-green-100 hover:text-white">
                    Program
                  </a>
                </li>
                <li>
                  <a href="#jadwal" class="text-green-100 hover:text-white">
                    Jadwal
                  </a>
                </li>
                <li>
                  <a href="#artikel" class="text-green-100 hover:text-white">
                    Artikel
                  </a>
                </li>
                <li>
                  <a href="#berita" class="text-green-100 hover:text-white">
                    Berita Acara
                  </a>
                </li>
                <li>
                  <a href="#narasumber" class="text-green-100 hover:text-white">
                    Narasumber
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mb-4">Kontak</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <i class="fas fa-map-marker-alt mt-1 mr-2 text-green-200"></i>
                  <span class="text-green-100">
                    Jl. Pendidikan No. 123, Jakarta Selatan
                  </span>
                </li>
                <li class="flex items-center">
                  <i class="fas fa-phone-alt mr-2 text-green-200"></i>
                  <span class="text-green-100">(021) 1234567</span>
                </li>
                <li class="flex items-center">
                  <i class="fas fa-envelope mr-2 text-green-200"></i>
                  <span class="text-green-100">
                    info@quranlearningcenter.id
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mb-4">Newsletter</h3>
              <p class="text-green-100 mb-4">
                Dapatkan update terbaru dari Quran Learning Center langsung ke
                email Anda.
              </p>
              <form>
                <div class="flex">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    class="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
                  />
                  <button
                    type="submit"
                    class="bg-green-800 hover:bg-green-900 px-4 py-2 rounded-r-md"
                  >
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
            <p>© 2023 Quran Learning Center. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
