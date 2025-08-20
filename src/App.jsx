import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Program from "./components/Program";
import Artikel from "./components/Artikel";
import Berita from "./components/Berita";
import Jadwal from "./components/Jadwal";
import Narasumber from "./components/Narasumber";
import Contact from "./components/Contact";
import BeritaDetail from "./components/BeritaDetail";
import ProgramDetail from "./components/ProgramDetail";
import ProfileDetail from "./components/ProfileDetail";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToSection from "./utils/ScrollToSection";
import ArtikelDetailS from "./components/ArtkelDetails";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="hero">
                <Hero />
              </section>
              <section id="profile">
                <Profile />
              </section>
              <section id="program" className="mt-16">
                <Program />
              </section>
              <section id="artikel" className="mt-16">
                <Artikel />
              </section>
              <section id="berita" className="mt-16">
                <Berita />
              </section>
              <section id="jadwal" className="mt-16">
                <Jadwal />
              </section>
              <section id="narasumber" className="mt-16">
                <Narasumber />
              </section>
              <section id="kontak" className="mt-16">
                <Contact />
              </section>
              <ScrollToSection />
            </>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/program" element={<Program />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="/narasumber" element={<Narasumber />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/berita/:id" element={<BeritaDetail />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/artikel/:id" element={<ArtikelDetailS />} />
        <Route path="/profile-detail" element={<ProfileDetail />} />
        <Route path="/scroll-to-section" element={<ScrollToSection />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
