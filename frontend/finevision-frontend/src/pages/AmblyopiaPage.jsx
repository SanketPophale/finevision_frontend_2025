import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import amblyopiaImg from "../assets/amblyopia.png";
import Navbar from "../components/Navbar";

// Footer Icons
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function AmblyopiaPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const goToVisionTherapy = () => {
  navigate("/");

  const checkElement = setInterval(() => {
    const section = document.querySelector('[name="vision-therapy"]');
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      clearInterval(checkElement);
    }
  }, 50);
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
    <title>Amblyopia Treatment in Pune | Lazy Eye Therapy | FineVision</title>

    <meta
      name="description"
      content="Expert Amblyopia (Lazy Eye) Treatment in Pune at FineVision Eye Care & Vision Therapy Centre. Improve eye teaming, focus, depth perception, and binocular vision with modern neuro-vision therapy."
    />

    <meta
      name="keywords"
      content="amblyopia treatment pune, lazy eye therapy pune, lazy eye specialist pune, amblyopia vision therapy pune, pediatric lazy eye treatment, finevision pune, binocular vision, eye therapy centre pune"
    />

    <link rel="canonical" href="https://thefinevision.com/amblyopia" />

    <meta property="og:title" content="Amblyopia (Lazy Eye) Treatment | FineVision Pune" />
    <meta property="og:description" content="Modern neuro-vision therapy to treat Amblyopia in children & adults. Improve eye coordination, focus, and depth perception." />
    <meta property="og:image" content="https://thefinevision.com/eye.png" />
    <meta property="og:url" content="https://thefinevision.com/amblyopia" />
    <meta property="og:type" content="article" />

    <meta name="twitter:card" content="summary_large_image" />
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
            src={amblyopiaImg}
            alt="Amblyopia therapy session"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/40 object-cover"
          />

          {/* Glow */}
          <Motion.div
            className="absolute inset-0 -z-10 blur-[100px] bg-gradient-to-r from-blue-500/20 to-purple-600/20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* ========================================================= */}
        {/* MAIN CONTENT WITH YOUR FULL INFORMATION */}
        {/* ========================================================= */}
        <div className="max-w-5xl w-full px-6 sm:px-10 md:px-12 pb-20 space-y-8 text-center md:text-left">
          
          {/* Title */}
          <Motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-4xl md:text-4xl font-extrabold text-white leading-snug text-center"
          >
            Understanding Amblyopia <br />
            <span className="text-[#F2C94C]">Conquering the “Lazy Eye”</span>
          </Motion.h1>

          {/* Main Paragraphs */}
          <div
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${
              theme === "light" ? "text-[#2A3B5A]" : "text-gray-300"
            } space-y-6`}
          >

            <p>
              <b>Amblyopia</b> occurs when the brain and eyes fail to work in harmony
              during critical early development—typically before age 7 or 8.
              The brain suppresses input from the weaker eye, causing it to “lazily”  
              underperform, even when the eye is structurally normal.
            </p>

            <p>
              Without intervention, amblyopia can persist into adulthood, leading to
              depth perception issues, eye strain, and even partial blindness in the 
              weaker eye. Thanks to <b>neuroplasticity</b>—the brain’s ability to rewire 
              itself—modern therapy can dramatically improve vision, especially in young patients.
            </p>

            {/* Section: Why Does One Eye Fall Behind */}
            <Motion.h2
              className="text-2xl font-semibold text-[#F2C94C] pt-6"
            >
              Why Does One Eye Fall Behind?
            </Motion.h2>

            <p>
              Amblyopia usually arises from imbalances like 
              <b> strabismus</b> (eye misalignment) or unequal refractive power between
              the eyes. The brain prioritizes one eye’s image to avoid double vision,
              effectively “turning off” the other. Over time, neural pathways for the
              weaker eye weaken further.
            </p>

            <p>
              Early detection is crucial—the brain’s visual cortex is most adaptable in 
              early childhood. Yet even adults can benefit from consistent, structured 
              <b> vision therapy</b> that retrains the brain to coordinate both eyes.
            </p>

            {/* Section: Common Signs */}
            <Motion.h2
              className="text-2xl font-semibold text-[#F2C94C] pt-6"
            >
              Common Signs to Watch For
            </Motion.h2>

            <ul className="list-disc list-inside space-y-2 pl-3">
              <li>Squinting or closing one eye frequently</li>
              <li>Tilting the head to use one eye more</li>
              <li>One eye drifting inward or outward</li>
              <li>Poor hand-eye coordination or depth perception</li>
              <li>Frequent headaches or eye fatigue</li>
            </ul>

            <p>
              Early therapy can make a lifetime of difference—enhancing visual comfort,
              focus, and confidence.
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
