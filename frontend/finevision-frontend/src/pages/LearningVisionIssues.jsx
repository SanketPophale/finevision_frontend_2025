import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import learningImg from "../assets/learning.jpg";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function LearningVisionIssues() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Back to Vision Therapy section
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
  <title>Learning-Related Visual Issues | Reading & Learning Problems Treatment | FineVision Pune</title>

  <meta
    name="description"
    content="Expert evaluation & treatment for Learning-Related Visual Issues in Pune. Improve reading speed, comprehension, focus, handwriting, tracking, and visual processing with Vision Therapy at FineVision Eye Care."
  />

  <meta
    name="keywords"
    content="learning related visual problems pune, visual processing disorder pune, reading difficulty treatment pune, child learning issues pune, slow reader child pune, eye tracking problem child pune, visual perception therapy pune, vision therapy pune, school performance vision issues"
  />

  <link rel="canonical" href="https://thefinevision.com/learning-visual-issues" />


  <meta property="og:title" content="Learning-Related Visual Issues | Vision Therapy for Reading & Learning | FineVision Pune" />
  <meta
    property="og:description"
    content="Vision Therapy for children with reading difficulty, slow comprehension, eye tracking issues, letter reversals, and poor school performance. Improve visual efficiency and learning skills."
  />
  <meta property="og:image" content="https://thefinevision.com/eye.png" />
  <meta property="og:url" content="https://thefinevision.com/learning-visual-issues" />
  <meta property="og:type" content="article" />


  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Learning & Reading Difficulties | Visual Processing Treatment | FineVision Pune" />
  <meta
    name="twitter:description"
    content="Comprehensive treatment for visual learning issues: tracking problems, comprehension issues, letter reversals, focus problems, and visual memory challenges."
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
            src={learningImg}
            alt="Learning Related Vision Issues"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[35%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/40 object-cover"
          />
          <Motion.div
            className="absolute inset-0 -z-10 blur-[100px] bg-gradient-to-r from-blue-500/20 to-purple-600/20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* ===== CONTENT SECTION ===== */}
        <div className="max-w-5xl w-full px-6 sm:px-10 md:px-12 pb-20 space-y-8 text-center md:text-left">
          <Motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center leading-snug"
          >
           Learning-Related Vision Issues
          </Motion.h1>

          <p className="text-center italic text-base sm:text-lg text-gray-300">
            When Seeing Clearly Isn’t Enough — How Vision Affects Learning
          </p>

          <div
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${
              theme === "light" ? "text-[#2A3B5A]" : "text-gray-300"
            } space-y-6`}
          >
            <p>
              Learning-related vision problems, or <b>visual efficiency</b> and{" "}
              <b>binocular vision disorders</b>, occur when the eyes and brain fail to
              coordinate properly for near work such as reading, writing, or focusing.
              These affect nearly <b>1 in 5 school-aged children</b> and can mimic or
              intensify learning difficulties like dyslexia or ADHD — even when eyesight
              (6/6) appears normal.
            </p>

            <p>
              The issue lies not in seeing clearly, but in how effectively the brain{" "}
              <b>processes, tracks, and integrates</b> visual input. This can cause fatigue,
              frustration, and declining academic performance.
            </p>

            {/* ===== Common Types ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left">
              Common Types Include
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>
                <b>Convergence Insufficiency:</b> Eyes drift outward during close work,
                causing blur or double vision.
              </li>
              <li>
                <b>Poor Eye Tracking (Saccades):</b> Difficulty moving eyes smoothly across
                a page or shifting from board to notebook.
              </li>
              <li>
                <b>Accommodation Problems:</b> Trouble refocusing between near and far
                distances.
              </li>
              <li>
                <b>Visual Processing Deficits:</b> Reversing letters, misreading similar
                words, or slow visual comprehension.
              </li>
            </ul>

            <p>
              These challenges make reading and writing energy-intensive tasks, diverting
              focus from comprehension. Early detection prevents frustration and poor
              academic confidence.
            </p>

            {/* ===== Signs ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left">
              Signs, Symptoms & Impact on Learning
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>
                <b>Physical Signs:</b> Eye rubbing, headaches, tilting head, or skipping
                lines while reading.
              </li>
              <li>
                <b>Behavioral Clues:</b> Avoids reading, poor concentration, restless during
                homework.
              </li>
              <li>
                <b>Performance Indicators:</b> Slow reading, copying errors, or poor
                comprehension.
              </li>
            </ul>

            <p>
              A child may read aloud fluently but struggle to understand due to visual
              fatigue. Teachers often see inconsistent progress; parents notice avoidance
              or frustration.
            </p>

            {/* ===== Diagnosis ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left">
              Diagnosis: A Comprehensive Approach
            </h2>
            <p>
              Diagnosis goes far beyond a standard eye chart. A{" "}
              <b>developmental optometrist</b> evaluates:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Eye alignment and teamwork (binocular vision)</li>
              <li>Focusing flexibility and stamina</li>
              <li>Tracking accuracy and visual-motor coordination</li>
            </ul>
            <p>
              Tests may include <b>near-point convergence</b>, <b>cover testing</b>, and the{" "}
              <b>Developmental Eye Movement (DEM)</b> assessment.
            </p>

            {/* ===== Treatment ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left">
              Treatment Options
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>
                <b>Vision Therapy:</b> Structured exercises improving coordination and
                focus; 30–45 min sessions, 1–2× weekly for 3–6 months.
              </li>
              <li>
                <b>Corrective Lenses:</b> Prism or specialized glasses for visual comfort.
              </li>
              <li>
                <b>Supportive Aids:</b> Colored overlays and ergonomic adjustments.
              </li>
            </ul>
            <p>
              Vision therapy offers <b>80–90% success rates</b> for visual learning
              improvement. Surgical options (like for strabismus) are rare and secondary.
            </p>

            {/* ===== Tips for Parents ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left">
              Tips for Parents & Educators
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Schedule developmental eye exams by age 6 or sooner if symptoms appear.</li>
              <li>Ensure adequate lighting, large text, and screen breaks.</li>
              <li>Collaborate among parents, teachers, and eye-care professionals.</li>
            </ul>

            <p>
              Addressing these hidden visual barriers can unlock a child’s full learning
              potential — turning struggle into success.
            </p>
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
