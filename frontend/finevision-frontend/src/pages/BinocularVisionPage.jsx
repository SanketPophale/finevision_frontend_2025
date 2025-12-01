import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import binocularImg from "../assets/doctor.png";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function BinocularVisionPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Back to Vision Therapy
  const goToVisionTherapy = () => {
    navigate("/#vision-therapy");

    setTimeout(() => {
      const section = document.querySelector('[name="vision-therapy"]');
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 500);
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
  <title>Binocular Vision Therapy in Pune | Eye Teaming & Focusing Treatment | FineVision</title>

  <meta
    name="description"
    content="Binocular Vision Therapy in Pune at FineVision Eye Care & Vision Therapy Centre — Treat eye teaming problems, double vision, focusing issues, reading difficulty, and poor depth perception in children & adults."
  />

  <meta
    name="keywords"
    content="binocular vision therapy pune, eye teaming problem, double vision treatment pune, convergence insufficiency therapy pune, focusing issues, tracking problems, visual discomfort, eye strain, child vision therapy pune, finevision pune"
  />

  <link rel="canonical" href="https://thefinevision.com/binocular-vision-therapy" />


  <meta property="og:title" content="Binocular Vision Therapy | FineVision Eye Care Pune" />
  <meta
    property="og:description"
    content="Improve eye teaming, depth perception, tracking, and reading performance with our advanced binocular vision therapy programs."
  />
  <meta property="og:image" content="https://thefinevision.com/eye.png" />
  <meta property="og:url" content="https://thefinevision.com/binocular-vision-therapy" />
  <meta property="og:type" content="article" />


  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Binocular Vision Therapy | FineVision Pune" />
  <meta
    name="twitter:description"
    content="Professional binocular vision therapy for kids & adults with eye teaming, focusing, and depth perception issues."
  />
  <meta name="twitter:image" content="https://thefinevision.com/eye.png" />
</Helmet>


      <div
        className={`pt-32 min-h-screen flex flex-col items-center ${
          theme === "light"
            ? "bg-[#FFFFFF] text-[#1F2E40]"
            : "bg-[#0a0f2c] text-white"
        }`}
      >
        {/* ===== BACK BUTTON ===== */}
        <div className="w-full max-w-5xl px-6 sm:px-10 md:px-12 pt-6">
         <Motion.button
         onClick={goToVisionTherapy}
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
        {/* ===== HERO IMAGE SECTION ===== */}
        <div className="w-full relative overflow-hidden flex justify-center py-10 sm:py-14">
          <Motion.img
            src={binocularImg}
            alt="Binocular Vision Training"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="w-[90%] sm:w-[70%] md:w-[55%] lg:w-[35%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/40 object-cover"
          />
          <Motion.div
            className="absolute inset-0 -z-10 blur-[100px] bg-gradient-to-r from-blue-500/20 to-purple-600/20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* ===== TEXT CONTENT ===== */}
        <div className="max-w-5xl w-full px-6 sm:px-10 md:px-12 pb-20 space-y-8 text-center md:text-left">
          <Motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-white text-center leading-snug"
          >
            Binocular Vision Training
          </Motion.h1>

          <div
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${
              theme === "light" ? "text-[#2A3B5A]" : "text-gray-300"
            } space-y-6`}
          >
            <p>
              <b>Binocular Vision Training</b>, also known as <b>Vision Therapy</b>, is a
              personalized, non-surgical program designed to improve how both eyes work
              together as a team. It strengthens coordination between the eyes and brain,
              enhancing clarity, comfort, and depth perception — ideal for those facing
              eye strain, blurred vision, or reading difficulty.
            </p>

            <Motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left"
            >
              Key Facts About Binocular Vision Training
            </Motion.h2>

            <ol className="list-decimal list-inside space-y-4 pl-3 text-left text-base sm:text-lg">
              <li>
                <b>What It Is:</b> A structured series of exercises that enhance focusing,
                tracking, and eye coordination — improving how your brain processes what
                you see, not just clarity.
              </li>
              <li>
                <b>Who Needs It:</b> Ideal for people with eye strain, blurred or double
                vision, depth issues, or reading fatigue. Also beneficial post-concussion
                and for children with tracking or teaming challenges.
              </li>
              <li>
                <b>How It Works:</b> After an assessment, a custom plan includes visual
                drills, digital simulations, 3D activities, and coordination games to
                retrain communication between eyes and brain.
              </li>
              <li>
                <b>Duration:</b> Typically 8–24 weeks, depending on individual needs and
                home practice. Noticeable improvement often appears early.
              </li>
              <li>
                <b>Benefits:</b> Improved focus, comfort, reading fluency, visual
                stability, sports performance, and confidence.
              </li>
              <li>
                <b>Why FineVision:</b> Led by{" "}
                <b>Optometrist Mrs. Nivedita Dabir</b>, our programs use advanced
                computer-based tools and hands-on training in a comfortable environment.
              </li>
            </ol>
          </div>
        </div>
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
