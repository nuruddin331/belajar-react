import React from "react";

function Profile() {
  return (
    <>
      <section id="profile" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Profile Quran Learning Center
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/kYtGt44I-H8?si=GxmCNWzPHC0lQNVH"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="md:col-span-7">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Visi & Misi
              </h3>
              <p className="text-gray-600 mb-6">
                Quran Learning Center didirikan pada tahun 2015 dengan visi
                menjadi pusat pendidikan Al-Quran terdepan yang mengintegrasikan
                ilmu tafsir klasik dengan pendekatan kontemporer untuk menjawab
                tantangan zaman.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4 flex-shrink-0 mt-1">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Visi Kami</h4>
                    <p className="text-gray-600">
                      "Menjadi pusat pendidikan Al-Quran terkemuka yang mencetak
                      generasi qurani yang menguasai ilmu tafsir dan mampu
                      mengaplikasikannya dalam kehidupan modern."
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4 flex-shrink-0 mt-1">
                    <i className="fas fa-tasks"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Misi Kami</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>
                        Menyelenggarakan pendidikan tafsir Al-Quran yang
                        komprehensif dan metodologis
                      </li>
                      <li>
                        Mengembangkan metode pembelajaran Al-Quran yang relevan
                        dengan kebutuhan zaman
                      </li>
                      <li>
                        Mencetak mufassir-mufassir profesional yang berakhlak
                        mulia
                      </li>
                      <li>
                        Memasyarakatkan pemahaman Al-Quran yang benar di
                        kalangan umat
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Pencapaian Kami
            </h3>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Santri Aktif</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600">Program Unggulan</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  25+
                </div>
                <div className="text-gray-600">Narasumber Ahli</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">8</div>
                <div className="text-gray-600">Tahun Berpengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
