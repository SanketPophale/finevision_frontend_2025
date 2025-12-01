import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import visualImg from "../assets/visual.jpg";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function VisionTherapy() {
  const navigate = useNavigate();

  const goBackToSection = () => {
    navigate("/#vision-therapy");

    setTimeout(() => {
      const section = document.querySelector('[name="vision-therapy"]');
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500);
  };

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "light") document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} navigate={navigate} />

      <Helmet>
  <title>Vision Therapy in Pune | Functional & Neuro Vision Training | FineVision</title>

  <meta
    name="description"
    content="FineVision Eye Care & Vision Therapy Centre in Pune offers evidence-based neuro-vision therapy for children & adults. Improve eye teaming, focusing, tracking, reading skills, learning issues, and post-stroke vision with expert functional vision training."
  />

  <meta
    name="keywords"
    content="vision therapy pune, neuro vision therapy pune, binocular vision training, functional vision therapy pune, developmental vision care, learning visual issues pune, pediatric vision therapy, post stroke vision therapy, eye tracking therapy, convergence insufficiency pune, eye teaming exercises pune, finevision pune"
  />

  <link rel="canonical" href="https://thefinevision.com/vision-therapy" />

  
  <meta property="og:title" content="Vision Therapy | Improve Eye Teaming, Tracking & Reading Skills | FineVision Pune" />
  <meta
    property="og:description"
    content="Specialised functional and neuro-vision therapy for children & adults: eye teaming, tracking, focusing, learning issues, stroke recovery, binocular vision, and digital eye strain."
  />
  <meta property="og:image" content="https://thefinevision.com/eye.png" />
  <meta property="og:url" content="https://thefinevision.com/vision-therapy" />
  <meta property="og:type" content="article" />

 
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Vision Therapy in Pune | Neuro & Functional Vision Training" />
  <meta
    name="twitter:description"
    content="Expert Vision Therapy for all ages—improve visual comfort, reading performance, coordination, and brain-eye connection."
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
    className="max-w-5xl mx-auto space-y-8"
  >

    {/* MAIN HEADING */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4d9feb] leading-tight">
      Enhancing Vision with Precision
    </h1>

    {/* PARAGRAPH BLOCK 1 */}
    <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
      At <b className="text-[#F2C94C]">Finevision Eye Care & Vision Therapy Centre</b>, we go beyond standard
      eye examinations. We specialise in 
      <b> functional and developmental vision care</b> — helping children, students,
      professionals, and seniors improve how their <b>eyes and brain work together</b>.
    </p>

    {/* PARAGRAPH BLOCK 2 */}
    <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
      Our evidence-based programs include <b>neuro-vision rehabilitation</b> and therapy 
      for individuals with learning-related visual issues, poor coordination, reading
      difficulties, and post-stroke visual challenges.
    </p>

    {/* SMALL SEPARATOR TEXT */}
    <p className="text-lg sm:text-xl md:text-2xl text-[#F2C94C] font-semibold mt-6">
      We proudly serve families across Pune and surrounding regions.
    </p>

    {/* BULLET POINTS */}
    <ul className="list-disc list-inside text-left max-w-2xl mx-auto mt-6 space-y-3 text-gray-400 text-base sm:text-lg md:text-xl">
      <li>Personalised vision therapy plans with home support kits</li>
      <li>Child-friendly, sensory-aware therapy environment</li>
      <li>Progress tracking for parents, teachers, and coaches</li>
      <li>Multilingual care — English | हिंदी | मराठी</li>
    </ul>

    {/* PARAGRAPH BLOCK 3 */}
    <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto pt-4">
      Our mission is not only to treat visual problems, but to 
      <b> enhance vision with precision</b>. We collaborate with parents, educators,
      and healthcare professionals to build awareness about the importance of 
      <b> functional vision </b> in learning, performance, and daily life.
    </p>

    {/* FINAL TAGLINE */}
    <p className="text-xl sm:text-2xl md:text-2xl text-[#4d9feb] font-bold mt-4">
      Let’s build better vision — together.
    </p>

  </Motion.div>
</section>


        {/* ===== IMAGE & INTRO ===== */}
        <section className="max-w-6xl mx-auto px-6 sm:px-10 md:px-12 py-10 sm:py-16 flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
          <Motion.img
            src={visualImg}
            alt="Vision Therapy"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.03 }}
            className="w-[90%] sm:w-[75%] md:w-1/2 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/30 object-cover"
          />
          <div className="md:w-1/2 space-y-5 leading-relaxed text-base sm:text-lg md:text-xl text-gray-400">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F2C94C]">
              Vision Therapy
            </h2>
            <p>
              Vision Therapy is a <b>neuro-optometric training</b> program that improves how
              the brain and eyes coordinate. It is a proven, non-surgical method to treat
              lazy eye, crossed eyes, convergence insufficiency, and learning-related visual
              difficulties.
            </p>
            <p>
              It helps individuals of all ages achieve clearer, faster, and more comfortable
              vision for reading, writing, learning, and everyday life.
            </p>
          </div>
        </section>

        {/* ===== MAIN CONTENT ===== */}
        <section className="max-w-6xl mx-auto px-6 sm:px-10 md:px-12 py-12 space-y-10 text-gray-400">
          {/* What Is Vision Therapy */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-6 sm:p-8 bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#F2C94C]">
              What Is Vision Therapy — And How Can It Help?
            </h3>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Vision Therapy (VT) is an optometrist-supervised program of structured exercises
              that train the eyes and brain to work together more effectively. It addresses
              visual problems that glasses or surgery cannot fix.
              <br />
              <br />
              True vision goes beyond “seeing clearly.” It’s about how efficiently the brain
              interprets visual information. VT enhances <b>eye movement, focusing, teaming,</b>
              and <b>processing skills</b> through systematic, brain-based training.
              <br />
              <br />
              It benefits both children and adults who may “see well” on a chart but still
              struggle with <b>reading, attention, screen fatigue, sports,</b> or{" "}
              <b>post-injury recovery.</b>
            </p>
          </Motion.div>

          {/* Who Is It For */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-6 sm:p-8 bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#F2C94C]">
              Who Is Vision Therapy For?
            </h3>
            <h4 className="font-semibold text-[#4d9feb] mt-2">Children with:</h4>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left text-base sm:text-lg md:text-xl">
              <li>Amblyopia (Lazy Eye)</li>
              <li>Strabismus (Eye Turn)</li>
              <li>Reading or Learning Difficulties</li>
              <li>Tracking and Focus Issues</li>
              <li>Autism or ADHD-related vision problems</li>
            </ul>

            <h4 className="font-semibold text-[#4d9feb] mt-6">Adults with:</h4>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left text-base sm:text-lg md:text-xl">
              <li>Digital Eye Strain (Computer Vision Syndrome)</li>
              <li>Post-Stroke or Brain Injury Vision Challenges</li>
              <li>Stress-Related Visual Discomfort</li>
              <li>Poor Sports Performance</li>
            </ul>
          </Motion.div>

          {/* What It Improves */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-6 sm:p-8 bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#F2C94C]">
              What Can Vision Therapy Improve?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl">
              <li>Eye teaming and depth perception</li>
              <li>Focusing ability and near-far clarity</li>
              <li>Eye tracking and reading fluency</li>
              <li>Visual processing and attention</li>
              <li>Hand-eye coordination and sports performance</li>
            </ul>
          </Motion.div>

          {/* How It Works */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-6 sm:p-8 bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#F2C94C]">
              How Does It Work?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl">
              <li>In-clinic sessions 1–2 times per week</li>
              <li>Home-based visual drills (10–15 min/day)</li>
              <li>Tools: prisms, lenses, balance boards, and software exercises</li>
              <li>Progress tracking and measurable visual gains</li>
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
