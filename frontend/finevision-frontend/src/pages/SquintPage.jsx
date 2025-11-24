import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import squintImg from "../assets/squint.png";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function SquintPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Back to Vision Therapy
  const goToVisionTherapy = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.querySelector('[name="vision-therapy"]');
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 400);
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
  <title>Squint (Strabismus) Treatment in Pune | Non-Surgical Vision Therapy | FineVision</title>

  <meta
    name="description"
    content="Get effective Squint (Strabismus) Treatment in Pune at FineVision Eye Care. Non-surgical vision therapy to improve eye alignment, depth perception, and binocular vision for children and adults."
  />

  <meta
    name="keywords"
    content="squint treatment pune, strabismus therapy pune, non surgical squint treatment pune, lazy eye squint correction, eye turn treatment pune, pediatric squint specialist pune, adult strabismus therapy, finevision pune, binocular vision therapy, eye alignment exercises pune"
  />

  <link rel="canonical" href="https://thefinevision.com/squint-treatment" />

  
  <meta property="og:title" content="Squint (Strabismus) Treatment & Eye Alignment Therapy | FineVision Pune" />
  <meta
    property="og:description"
    content="Expert non-surgical vision therapy for Squint (Strabismus) in children & adults. Improve eye alignment, coordination, and depth perception."
  />
  <meta property="og:image" content="https://thefinevision.com/eye.png" />
  <meta property="og:url" content="https://thefinevision.com/squint-treatment" />
  <meta property="og:type" content="article" />


  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Squint (Strabismus) Treatment in Pune | FineVision" />
  <meta
    name="twitter:description"
    content="Non-surgical therapy for squint and eye alignment problems. Improve binocular vision and depth perception at FineVision Eye Care, Pune."
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
        {/* ===== HERO IMAGE ===== */}
        <div className="w-full relative overflow-hidden flex justify-center py-10 sm:py-14">
          <Motion.img
            src={squintImg}
            alt="Squint Vision Therapy"
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
            What is <span className="text-red-700">Squint</span> and Why Does It Matter?
          </Motion.h1>

          <div
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${
              theme === "light" ? "text-[#2A3B5A]" : "text-gray-300"
            } space-y-6`}
          >
            <p>
              <b>Squint</b>, medically called <b>strabismus</b>, occurs when both eyes do
              not align together while focusing on the same object. One eye may turn{" "}
              <b>inward (esotropia)</b>, <b>outward (exotropia)</b>,{" "}
              <b>upward (hypertropia)</b>, or <b>downward (hypotropia)</b>.
            </p>

            <p>
              The misalignment may be constant or intermittent, often developing in
              childhood but can appear at any age. Common contributing factors include:
            </p>

            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>
                <b>Genetic Links:</b> Higher risk if a parent or sibling has a squint.
              </li>
              <li>
                <b>Refractive Errors:</b> Uncorrected farsightedness (hyperopia) straining
                the eyes.
              </li>
              <li>
                <b>Neurological Causes:</b> Cerebral palsy, Down syndrome, or head trauma.
              </li>
              <li>
                <b>Muscle Imbalance:</b> Weakness or paralysis in ocular muscles.
              </li>
              <li>
                <b>Other Triggers:</b> Prematurity, infections, or prolonged digital use.
              </li>
            </ul>

            <p>
              Without timely correction, the brain may start ignoring signals from the
              misaligned eye — causing <b>amblyopia</b> (“lazy eye”) and loss of depth
              perception.
            </p>

            {/* ===== Indicators ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-4">
              Common Indicators of Squint
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Visible misalignment during near or distant focus</li>
              <li>Head tilting or turning to reduce double vision</li>
              <li>Closing one eye to focus better</li>
              <li>Poor 3D vision or depth judgment</li>
              <li>Children avoiding reading or bright light</li>
            </ul>

            <p>
              If these signs are observed, an immediate evaluation by an eye specialist is
              recommended.
            </p>

            {/* ===== Vision Therapy ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6">
              Vision Therapy – A Non-Surgical Path to Better Alignment
            </h2>
            <p>
              Vision therapy is an <b>optometrist-guided rehabilitation</b> method that
              uses exercises and visual tools to retrain eye coordination and brain-eye
              communication. Recognized by the{" "}
              <b>American Optometric Association (AOA)</b>, it helps in many mild to
              moderate squint cases.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>
                <b>Duration:</b> 30–45 min per session, 1–2× weekly for 3–12 months, with
                home drills.
              </li>
              <li>
                <b>Setup:</b> In-office exercises using prisms, filters, VR tools, and
                software programs.
              </li>
              <li>
                <b>Who Benefits:</b> Ideal for children 6–18 yrs, but adults with acquired
                squint also improve.
              </li>
            </ul>

            {/* ===== How It Works ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6">
              How Vision Therapy Works
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>
                <b>Eye Teaming:</b> Convergence/divergence drills like Brock string tasks.
              </li>
              <li>
                <b>Tracking:</b> Smooth pursuit and quick saccadic exercises.
              </li>
              <li>
                <b>Focusing:</b> Shifting attention between near/far objects.
              </li>
              <li>
                <b>Depth Perception:</b> Interactive stereopsis (3D) games.
              </li>
              <li>
                <b>Anti-Suppression:</b> Filters and patching to balance eye input.
              </li>
            </ul>
            <p>
              Sessions are structured like fun, game-based challenges to keep children
              engaged and motivated.
            </p>

            {/* ===== Success ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6">
              Success Rates
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>70–90% achieve measurable improvement in eye alignment.</li>
              <li>
                Avoids surgery in 50–75% of intermittent outward-turn squints.
              </li>
              <li>
                Improves reading speed, attention, and visual coordination.
              </li>
            </ul>

            {/* ===== Who Benefits ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6">
              Who Can Benefit from Vision Therapy?
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Individuals with intermittent or residual squint</li>
              <li>Those struggling with depth judgment or double vision</li>
              <li>Patients post-surgery needing retraining</li>
              <li>Readers with fatigue or poor concentration</li>
            </ul>

            {/* ===== Improvements ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6">
              What Improvement Looks Like
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Better alignment and comfort for reading/screen tasks</li>
              <li>Reduced eye strain and fatigue</li>
              <li>Enhanced 3D depth perception and focus stability</li>
              <li>Improved attention and coordination</li>
            </ul>

            {/* ===== Tips ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6">
              Tips for Parents & Teachers
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Notice frequent head tilting or eye rubbing</li>
              <li>Use pointers or reading windows for tracking</li>
              <li>Encourage outdoor and coordination activities</li>
              <li>Schedule vision exams early for timely therapy</li>
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
