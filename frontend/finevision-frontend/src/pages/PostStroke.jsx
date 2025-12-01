import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import postImg from "../assets/post3.png"
import { Helmet } from "react-helmet";

import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function PostStrokePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Go back to Vision Therapy section
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
  <title>Post-Stroke Vision Rehabilitation | Neuro-Vision Therapy in Pune | FineVision</title>

  <meta
    name="description"
    content="Post-Stroke Vision Rehabilitation in Pune at FineVision Eye Care. Expert neuro-vision therapy for double vision, field loss, eye movement issues, balance problems, and visual processing difficulties after stroke."
  />

  <meta
    name="keywords"
    content="post stroke vision therapy pune, stroke vision problems pune, neuro vision rehabilitation pune, hemianopia treatment pune, stroke double vision treatment, eye movement therapy after stroke, binocular vision therapy pune, traumatic brain injury therapy pune, neurological vision problems"
  />

  <link rel="canonical" href="https://thefinevision.com/post-stroke-vision-therapy" />

 
  <meta property="og:title" content="Post-Stroke Vision Therapy & Neuro-Rehabilitation | FineVision Pune" />
  <meta
    property="og:description"
    content="Recover visual function after stroke with specialised neuro-vision therapy. Treatment for eye coordination issues, balance problems, field defects, and reading difficulty."
  />
  <meta property="og:image" content="https://thefinevision.com/eye.png" />
  <meta
    property="og:url"
    content="https://thefinevision.com/post-stroke-vision-therapy"
  />
  <meta property="og:type" content="article" />


  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Post-Stroke Vision Therapy | Neuro-Rehabilitation in Pune" />
  <meta
    name="twitter:description"
    content="Improve visual skills after stroke with structured neuro-vision therapy. Helps with reading, movement, eye alignment, and visual balance issues."
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
            src={postImg}
            alt="Post Stroke Vision Rehabilitation"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/40 object-cover"
          />

          {/* Floating background glow */}
          <Motion.div
            className="absolute inset-0 -z-10 blur-[100px] bg-gradient-to-r from-blue-500/20 to-purple-600/20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="max-w-5xl w-full px-6 sm:px-10 md:px-12 pb-20 space-y-8 text-center md:text-left">

          {/* ===== PAGE TITLE ===== */}
          <Motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-snug text-center"
          >
         Post stroke Neuro-optometric rehabilitation <br />
            
          </Motion.h1>

          <div
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${
              theme === "light" ? "text-[#2A3B5A]" : "text-gray-300"
            } space-y-6`}
          >
            {/* INTRODUCTION */}
            <p>
              At <b>Finevision Eye Care & Vision Therapy Centre</b>, we support stroke survivors who experience visual challenges as part of recovery.  
              Our specialised post-stroke vision therapy helps restore lost visual function, retrain the brain, and improve daily independence with personalised, compassionate care.
            </p>

            {/* ===== Subheading ===== */}
            <Motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6"
            >
              What Is Post-Stroke Vision Impairment?
            </Motion.h2>

            <p>
              A stroke can impact the brain’s visual pathways, leading to challenges such as:
            </p>

            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li><b>Visual field loss</b> – missing parts of the visual world</li>
              <li><b>Double vision</b> due to eye misalignment</li>
              <li><b>Eye movement difficulty</b> – trouble reading or scanning</li>
              <li><b>Visual neglect</b> – brain ignores one side entirely</li>
              <li>Light sensitivity & difficulty judging depth</li>
              <li>Poor balance, confusion, slow reading</li>
            </ul>

            <p>
             The brain controls how we use our eyes — so stroke-related brain damage can disrupt even basic visual tasks.
            </p>

            {/* ===== Who Benefits ===== */}
            <Motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6"
            >
              Who Can Benefit From Post-Stroke Vision Therapy?
            </Motion.h2>

            <p>We help survivors who:</p>

            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Bump into objects on one side</li>
              <li>Have difficulty reading or using a phone</li>
              <li>Experience blurred or double vision</li>
              <li>Feel overwhelmed in busy environments</li>
              <li>Struggle with balance or coordination</li>
              <li>Feel frustrated or isolated due to vision changes</li>
            </ul>

            <p>
              We support both recent and long-term stroke survivors — even months or years after the stroke.
            </p>

            {/* ===== Therapy Plan ===== */}
            <Motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6"
            >
              Vision Therapy & Rehabilitation Plan
            </Motion.h2>

            <p>Our approach is fully personalised and evidence-based. Therapy may include:</p>

            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Eye movement retraining – scanning, fixation & shifting gaze</li>
              <li>Visual field stimulation exercises</li>
              <li>Binocular training to reduce double vision</li>
              <li>Spatial awareness & perceptual retraining</li>
              <li>Reading therapy for flow & comprehension</li>
              <li>Balance & visual–motor coordination tasks</li>
              <li>Home-based guided therapy tools</li>
              <li>Prism lenses or tints (if required)</li>
            </ul>

            <p>
              Duration typically ranges from <b>8–20 sessions</b> and is reviewed every 4–6 weeks.  
              We also collaborate with physiotherapists, neurologists, OTs, and caregivers.
            </p>

            {/* ===== Improvements ===== */}
            <Motion.h2
              className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6"
            >
              What Improvement Looks Like
            </Motion.h2>

            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>More stable, comfortable vision</li>
              <li>Better awareness of surroundings</li>
              <li>Reduced confusion & visual fatigue</li>
              <li>Improved reading & concentration</li>
              <li>Safer walking & better balance</li>
              <li>Greater confidence & independence</li>
            </ul>

            {/* ===== Caregiver Tips ===== */}
            <Motion.h2
              className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6"
            >
              Tips for Caregivers
            </Motion.h2>

            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Encourage consistent therapy practice</li>
              <li>Reduce visual clutter at home</li>
              <li>Approach from the affected side to build awareness</li>
              <li>Use high-contrast labels for switches & edges</li>
              <li>Use reading guides or rulers</li>
              <li>Be patient — meaningful progress takes time</li>
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
