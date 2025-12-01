import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

import { FaInstagram, FaFacebook } from "react-icons/fa";

// 🖼️ Sports images for slider
import sports1 from "../assets/sports1.png";
import sports2 from "../assets/sports2.png";
import sports3 from "../assets/sports3.png";
import sports4 from "../assets/sports4.png";
import sports5 from "../assets/sports5.png";

export default function SportsVision() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [sports1, sports2, sports3, sports4, sports5];

  // Auto rotate images every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Back to Vision Therapy
  const goBackToSection = () => {
    navigate("/#sports-vision");

    setTimeout(() => {
      const section = document.querySelector('[name="sports-vision"]');
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "light") document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} navigate={navigate} />

      <Helmet>
  <title>Sports Vision Training in Pune | Athlete Reaction, Focus & Visual Skills | FineVision</title>

  <meta
    name="description"
    content="FineVision Sports Vision Training in Pune helps athletes improve reaction time, dynamic visual acuity, depth judgement, coordination, and game performance. Ideal for cricket, badminton, football, tennis, volleyball, and competitive sports."
  />

  <meta
    name="keywords"
    content="sports vision training pune, athlete reaction training pune, vision training for cricket, badminton vision training pune, eye hand coordination training, dynamic visual acuity, reaction time training pune, sports performance vision pune, finevision pune, sports vision exercises"
  />

  <link rel="canonical" href="https://thefinevision.com/sports-vision" />

  {/* Open Graph (Facebook, WhatsApp) */}
  <meta property="og:title" content="Sports Vision Training | Improve Reaction, Focus & Coordination" />
  <meta
    property="og:description"
    content="Boost your sports performance with professional Sports Vision programs at FineVision Pune. Improve reaction time, tracking, focus and speed for cricket, football, tennis, badminton & more."
  />
  <meta property="og:image" content="https://thefinevision.com/eye.png" />
  <meta property="og:url" content="https://thefinevision.com/sports-vision" />
  <meta property="og:type" content="article" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sports Vision Training in Pune | FineVision" />
  <meta
    name="twitter:description"
    content="Enhance your athletic performance with dedicated vision training — reaction speed, tracking, dynamic acuity & focus."
  />
  <meta name="twitter:image" content="https://thefinevision.com/eye.png" />
</Helmet>


      <div
        className={`pt-32 min-h-screen flex flex-col items-center ${
          theme === "light"
            ? "bg-[#FFFFFF] text-[#1F2E40]"
            : "bg-[#0a0f2c]  text-white"
        }`}
      >

                {/* ===== BACK BUTTON ===== */}
<div className="w-full max-w-5xl px-6 sm:px-10 md:px-12 pt-6">
  <Motion.button
    onClick={goBackToSection}
    whileHover={{ x: -3 }}
    whileTap={{ scale: 0.97 }}
    className={`text-lg font-bold transition-colors ${
      theme === "light"
        ? "text-gray-600 hover:text-gray-800"
        : "text-gray-300 hover:text-white"
    }`}
  >
    ← Go Back
  </Motion.button>
</div>
        {/* ===== HERO SECTION ===== */}
        <section className="relative flex flex-col items-center justify-center text-center px-6 py-16 sm:py-20">
          <Motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-15 text-white leading-tight">
              Sports Vision Training
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              Sharpen Your Game — Train the Eyes Like You Train the Body. Whether you play
              cricket, badminton, football, tennis, or any other sport, your visual system
              determines how well you perform. At{" "}
              <b className="text-purple-400">Finevision Eye Care & Vision Therapy Centre</b>,
              we help athletes of all levels boost accuracy, focus, and reaction time.
            </p>
          </Motion.div>
        </section>

        {/* ===== IMAGE SLIDER + INTRO ===== */}
        <section className="max-w-6xl mx-auto px-6 py-10 md:py-16 flex flex-col-reverse md:flex-row items-center gap-10 relative">
          {/* ✅ Text Content — now appears below images on mobile */}
          <div className="md:w-1/2 text-center md:text-left space-y-5 text-gray-300 leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F2C94C]">
              Train Your Vision for Peak Performance
            </h2>
            <p className="text-base sm:text-lg md:text-xl">
              Sports Vision is not just about having 6/6 eyesight — it’s about how fast and
              accurately your eyes and brain communicate during play.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-base sm:text-lg md:text-xl font-medium text-left">
              <li>React faster to moving targets</li>
              <li>Judge distance and speed precisely</li>
              <li>Maintain focus under glare and stress</li>
              <li>Make split-second, game-changing decisions</li>
            </ul>
            <p className="text-base sm:text-lg md:text-xl">
              Our optometrist-led program enhances eye–brain coordination, reaction
              control, and focus flexibility — the visual skills that define champions.
            </p>
          </div>

          {/* ✅ Image Slider (fixed for mobile) */}
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            {images.map((img, index) => (
              <Motion.img
                key={index}
                src={img}
                alt={`Sports Vision ${index}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{
                  opacity: index === currentImage ? 1 : 0,
                  scale: index === currentImage ? 1 : 1.05,
                }}
                transition={{ duration: 0.8 }}
                className={`${
                  index === currentImage ? "relative" : "hidden"
                } w-[90%] sm:w-[80%] md:w-[85%] lg:w-[75%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/30 object-cover`}
              />
            ))}
          </div>
        </section>

        {/* ===== MAIN CONTENT ===== */}
        <section className="max-w-6xl mx-auto px-6 sm:px-10 md:px-12 py-12 space-y-10 text-gray-300">
          {/* Who Can Benefit */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-6 sm:p-8 bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#F2C94C]">
              Who Can Benefit from Sports Vision?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl">
              <li>Cricket players improving timing and reaction</li>
              <li>Footballers boosting spatial awareness</li>
              <li>Tennis and badminton players enhancing focus</li>
              <li>Volleyball and hockey players improving coordination</li>
              <li>Archers, swimmers, gymnasts, and e-sports athletes</li>
            </ul>
          </Motion.div>

          {/* Key Skills */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-6 sm:p-8 bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#F2C94C]">
              Key Visual Skills We Train
            </h3>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl">
              <li>Dynamic Visual Acuity</li>
              <li>Eye–Hand Coordination</li>
              <li>Reaction Time & Processing Speed</li>
              <li>Depth Perception & Focus Flexibility</li>
              <li>Tracking & Peripheral Awareness</li>
              <li>Contrast Sensitivity under variable lighting</li>
            </ul>
          </Motion.div>

          {/* Program Details */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-6 sm:p-8 bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#F2C94C]">
              What to Expect in a Sports Vision Program
            </h3>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl">
              <li>Comprehensive assessment</li>
              <li>Personalized in-clinic and home-based drills</li>
              <li>Sport-specific visual exercises</li>
              <li>Performance tracking and feedback reports</li>
              <li>Program duration: typically 6–12 weeks</li>
            </ul>
          </Motion.div>
        </section>
      </div>

      <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-6 right-6 z-50 bg-[#4d9feb] text-white text-3xl font-bold
                         w-14 h-14 flex items-center justify-center rounded-full
                         shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:bg-[#6fb5ff] hover:scale-110 
                         hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              ^
            </button>


            {/* ========================================================= */}
            {/* FOOTER */}
            {/* ========================================================= */}
            <footer
              className={`w-full border-t overflow-hidden ${
                theme === "light"
                  ? "bg-[#f9fafc] text-[#1F2E40] border-gray-300"
                  : "bg-[#0b1332] text-white border-white/10"
              }`}
            >
              {/* Top */}
              <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                {/* Left Info */}
                <div className="text-center md:text-left space-y-2">
                  <h3
                    className={`text-2xl font-bold tracking-wide ${
                      theme === "light" ? "text-[#1F2E40]" : "text-[#F2C94C]"
                    }`}
                  >
                    FineVision Eye Care & Vision Therapy Center
                  </h3>
                  <p className="text-sm opacity-80 max-w-md">
                    Enhancing vision, empowering lives — with personalized eye care and
                    advanced therapy.
                  </p>
                </div>
      
                {/* Social */}
                <div className="flex items-center gap-6 text-2xl">
                  <a
                    href="https://www.instagram.com/finevision_clinic?utm_source=qr&igsh=a2Z6b3pnNGxteGdz"
                    target="_blank"
                    className="hover:text-[#E4405F] transition"
                  >
                    <FaInstagram />
                  </a>
      
                  <a
                    href="https://www.facebook.com/share/1ButdPKkw3/"
                    target="_blank"
                    className="hover:text-[#1877F2] transition"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
      
              {/* Bottom */}
              <div className={`border-t ${theme === "light" ? "border-gray-300" : "border-white/10"}`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
                  <p>
                    © {new Date().getFullYear()} FineVision Eye Care & Vision Therapy Center. All rights reserved.
                  </p>
                  <div className="flex items-center gap-6 mt-2 md:mt-0">
                    <a href="#" className="hover:text-[#4d9feb] transition">Privacy Policy</a>
                    <a href="#" className="hover:text-[#4d9feb] transition">Terms & Conditions</a>
                  </div>
                </div>
              </div>
            </footer>
    </>
  );
}
