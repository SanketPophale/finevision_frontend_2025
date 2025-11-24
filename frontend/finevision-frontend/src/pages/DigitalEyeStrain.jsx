import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import digitalImg from "../assets/digital2.jpg";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function DigitalEyeStrain() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToVisionTherapy = () => {
    navigate("/");
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
  <title>Digital Eye Strain Treatment in Pune | Computer Vision Syndrome | FineVision</title>

  <meta
    name="description"
    content="Professional Digital Eye Strain & Computer Vision Syndrome (CVS) treatment in Pune. Reduce headaches, dry eyes, blurred vision, screen fatigue, light sensitivity & focusing issues with advanced eye care at FineVision."
  />

  <meta
    name="keywords"
    content="digital eye strain pune, computer vision syndrome treatment, screen fatigue treatment pune, dry eye treatment pune, eye strain specialist pune, blurred vision screen time, blue light eye strain, digital eye strain clinic pune, finevision pune"
  />

  <link rel="canonical" href="https://thefinevision.com/digital-eye-strain" />


  <meta property="og:title" content="Digital Eye Strain Treatment | FineVision Eye Care Pune" />
  <meta
    property="og:description"
    content="Expert treatment for Digital Eye Strain and Computer Vision Syndrome. Reduce headaches, dryness, blurry vision, and focusing problems caused by prolonged mobile and laptop use."
  />
  <meta property="og:image" content="https://thefinevision.com/eye.png" />
  <meta property="og:url" content="https://thefinevision.com/digital-eye-strain" />
  <meta property="og:type" content="article" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Digital Eye Strain & Computer Vision Syndrome | FineVision Pune" />
  <meta
    name="twitter:description"
    content="Reduce screen fatigue, headaches, dryness & blurred vision with specialized Digital Eye Strain therapy at FineVision Eye Care."
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
        {/* ===== HERO IMAGE ===== */}
        <div className="w-full relative overflow-hidden flex justify-center py-10 sm:py-14">
          <Motion.img
            src={digitalImg}
            alt="Digital Eye Strain Therapy"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/40 object-cover"
          />
          <Motion.div
            className="absolute inset-0 -z-10 blur-[100px] bg-gradient-to-r from-blue-500/20 to-purple-600/20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* ===== CONTENT ===== */}
        <div className="max-w-5xl w-full px-6 sm:px-10 md:px-12 pb-20 space-y-8 text-center md:text-left">
          <Motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center leading-snug"
          >
            Digital Eye Strain & Vision Therapy
          </Motion.h1>

          <p className="text-center italic text-base sm:text-lg text-gray-300">
            When Screens Tire the Eyes — Relief Through Therapy & Better Habits
          </p>

          <div
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${
              theme === "light" ? "text-[#2A3B5A]" : "text-gray-300"
            } space-y-6`}
          >
            <p>
              In today’s digital world, <b>Digital Eye Strain</b> (or{" "}
              <b>Computer Vision Syndrome</b>) affects millions who spend hours daily in
              front of screens. At <b>Finevision Eye Care & Vision Therapy Centre</b>, we
              provide personalized <b>vision therapy</b> and ergonomic strategies to ease
              discomfort and protect long-term visual health.
            </p>

            {/* ===== What Is ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left">
              What Is Digital Eye Strain?
            </h2>
            <p>
              It’s a group of visual and physical symptoms caused by extended screen use
              or close work:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Dry, burning, or irritated eyes</li>
              <li>Blurred or fluctuating vision</li>
              <li>Headache and brow or temple pressure</li>
              <li>Difficulty refocusing from near to far</li>
              <li>Neck, shoulder, or back pain from posture</li>
              <li>Light sensitivity or eye fatigue</li>
            </ul>

            {/* ===== Who Experiences ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left">
              Who Experiences It?
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Students attending online classes</li>
              <li>Professionals working long computer hours</li>
              <li>Gamers, designers, and content creators</li>
              <li>Anyone using screens in dim or improper lighting</li>
            </ul>

            {/* ===== Assessment ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left">
              How We Assess Digital Eye Strain
            </h2>
            <p>
              A 30-minute session covers all aspects of your visual comfort:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Screen time habits, posture, and lighting evaluation</li>
              <li>Testing focus flexibility and eye coordination</li>
              <li>Dry-eye and eyelid health check</li>
              <li>Review of ergonomics — distance, glare, angle</li>
            </ul>
            <p>
              <b>Tip:</b> Bring your glasses and photos of your workstation for tailored
              advice.
            </p>

            {/* ===== Treatment ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left">
              Treatment & Management Plan
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Customized vision therapy drills for focus and coordination</li>
              <li>Posture and lighting correction for reduced strain</li>
              <li>Special anti-glare or computer lenses (if needed)</li>
              <li>Home-based relaxation and convergence exercises</li>
              <li>Hydration, blinking, and dry-eye relief strategies</li>
            </ul>
            <p>
              <b>Duration:</b> Noticeable relief in 6–12 weeks; full improvement in about
              3–4 months depending on severity.
            </p>

            {/* ===== Improvement ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left">
              What Improvement Looks Like
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Reduced dryness, redness, and burning</li>
              <li>Clearer and more stable vision</li>
              <li>Decreased headaches and neck strain</li>
              <li>Comfortable screen use for longer durations</li>
            </ul>
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
