import React from "react";

function Jadwal() {
  return (
    <>
      <section id="jadwal" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Jadwal Program
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Jadwal lengkap program dan kegiatan Quran Learning Center
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Program
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Waktu
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tempat
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Pendaftaran Program Mufassir
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    1 - 31 Juli 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Online 24 jam</td>
                  <td className="px-6 py-4 whitespace-nowrap">Website</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                      Berlangsung
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Seminar Biologi Quran
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">15 Juli 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    09.00 - 12.00 WIB
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Aula Utama</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                      Akan Datang
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Quranic Camp Angkatan 2
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    28-30 Juli 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Full Day</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Villa Al-Hikmah
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                      Akan Datang
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Kelas Tahsin Dasar
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Setiap Sabtu</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    13.00 - 15.00 WIB
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Ruang 1</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                      Berlangsung
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 mr-4">
              <i className="fas fa-download mr-2"></i> Download Jadwal
            </button>
            <button className="bg-white hover:bg-gray-100 text-green-600 border border-green-600 px-6 py-3 rounded-md font-medium transition duration-300">
              <i className="far fa-calendar-alt mr-2"></i> Add to Calendar
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jadwal;
