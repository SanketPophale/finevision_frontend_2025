import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import cviImg from "../assets/visual11.png";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function CorticalVisual() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  <title>Cortical Visual Impairment (CVI) Therapy in Pune | FineVision Eye Care</title>

  <meta
    name="description"
    content="Specialized Cortical Visual Impairment (CVI) Vision Therapy in Pune at FineVision Eye Care. Improve visual attention, tracking, recognition, and brain–eye coordination for children with neurological visual challenges."
  />

  <meta
    name="keywords"
    content="CVI therapy pune, cortical visual impairment treatment, neurological visual impairment, CVI specialist Pune, brain based vision therapy, visual processing disorder pune, child CVI treatment, vision therapy for CVI, finevision pune"
  />

  <link rel="canonical" href="https://thefinevision.com/cortical-visual-impairment" />

  
  <meta property="og:title" content="Cortical Visual Impairment (CVI) Therapy | FineVision Pune" />
  <meta
    property="og:description"
    content="Professional therapy for Cortical Visual Impairment (CVI) to improve visual attention, tracking, and recognition using individualized neuro-vision programs."
  />
  <meta property="og:image" content="https://thefinevision.com/eye.png" />
  <meta property="og:url" content="https://thefinevision.com/cortical-visual-impairment" />
  <meta property="og:type" content="article" />

 
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="CVI (Cortical Visual Impairment) Therapy | FineVision Pune" />
  <meta
    name="twitter:description"
    content="Advanced therapy for Cortical Visual Impairment to support brain-eye coordination and meaningful visual development."
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
            src={cviImg}
            alt="Cortical Visual Impairment"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[45%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/40 object-cover"
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
            Cortical Visual Impairment (CVI)
          </Motion.h1>

          <p className="text-center italic text-base sm:text-lg text-gray-300">
            When the Eyes See, but the Brain Struggles to Interpret
          </p>

          <div
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${
              theme === "light" ? "text-[#2A3B5A]" : "text-gray-300"
            } space-y-6`}
          >
            <p>
              <b>Cortical Visual Impairment (CVI)</b>, also called{" "}
              <b>Cerebral Visual Impairment</b>, is a major cause of childhood visual
              impairment. Unlike typical eye disorders, CVI arises in the brain’s visual
              processing areas. The eyes may be healthy, but the brain struggles to
              interpret what they see — causing difficulty with recognition, tracking,
              and spatial awareness.
            </p>

            <p>
              CVI is not an eye disease but a <b>neurological condition</b>. With early
              detection and therapy, children can develop stronger visual understanding.
              CVI affects up to <b>30% of children under age 3</b> with vision loss,
              highlighting the need for awareness and intervention.
            </p>

            {/* ===== Causes ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left">
              Causes of CVI
            </h2>
            <p>
              CVI often stems from brain injury or oxygen deprivation affecting the
              visual cortex and related neural pathways:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>
                <b>Perinatal complications:</b> Lack of oxygen, prematurity, or low birth
                weight.
              </li>
              <li>
                <b>Infections:</b> Meningitis, encephalitis, or congenital infections like
                CMV.
              </li>
              <li>
                <b>Neurological disorders:</b> Cerebral palsy, hydrocephalus, epilepsy, or
                brain injury.
              </li>
              <li>
                <b>Genetic causes:</b> Rare syndromes like Down syndrome or metabolic
                conditions.
              </li>
            </ul>

            {/* ===== Symptoms ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left">
              Symptoms and Signs
            </h2>
            <p>
              Symptoms can vary daily and depend on the child’s fatigue or environment.
              CVI often causes fluctuating vision and difficulty recognizing objects.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Difficulty seeing fine details, even with glasses</li>
              <li>Prefers lights or edges over main objects</li>
              <li>Struggles with clutter or visual crowding</li>
              <li>May not recognize familiar faces or shapes easily</li>
              <li>Relies more on sound or touch than sight</li>
            </ul>

            {/* ===== Diagnosis ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left">
              Diagnosis of CVI
            </h2>
            <p>
              A comprehensive team-based evaluation helps differentiate CVI from other
              eye conditions:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Full eye exam and optic nerve evaluation</li>
              <li>Review of birth and medical history</li>
              <li>Brain imaging (MRI or CT) for visual cortex damage</li>
              <li>
                Functional vision testing using <b>CVI Range Assessment</b>
              </li>
              <li>
                Collaboration with occupational and physical therapists for functional
                assessment
              </li>
            </ul>

            {/* ===== Treatment ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left">
              Treatment & Management Strategies
            </h2>
            <p>
              Though CVI has no cure, structured intervention can harness{" "}
              <b>neuroplasticity</b> — the brain’s ability to rewire itself:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>
                <b>Vision Therapy:</b> Targeted sessions to build focus and tracking.
              </li>
              <li>
                <b>Environmental Adaptations:</b> Simplify surroundings, add color
                contrast, and control brightness.
              </li>
              <li>
                <b>Multidisciplinary Support:</b> Combine occupational, physical, and
                educational therapies.
              </li>
              <li>
                <b>Medical Support:</b> Manage epilepsy or related neurological issues.
              </li>
              <li>
                <b>Parent Involvement:</b> Encourage active exploration and name objects
                during play.
              </li>
            </ul>

            {/* ===== Hope Section ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-6 text-center md:text-left">
              Living with CVI: Hope & Growth
            </h2>
            <p>
              Children with CVI can thrive with the right approach. With consistent
              therapy, support, and understanding, many gain meaningful visual function
              and independence.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Improved object recognition and tracking</li>
              <li>Better attention and participation in daily life</li>
              <li>Enhanced confidence through visual exploration</li>
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
