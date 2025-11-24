import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import autismImg from "../assets/austim.png";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Autism() {
  const navigate = useNavigate();

  // ✅ Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Navigate back to Vision Therapy section
const goToVisionTherapy = () => {
  navigate("/#vision-therapy");
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
  <title>Autism & ADHD Vision Therapy in Pune | FineVision Eye Care</title>

  <meta
    name="description"
    content="Specialized Vision Therapy for Autism & ADHD in Pune. Improve eye contact, tracking, focus, reading, attention, and visual processing challenges at FineVision Eye Care & Vision Therapy Centre."
  />

  <meta
    name="keywords"
    content="autism vision therapy pune, ADHD vision therapy pune, autism eye contact issues, visual processing autism, sensory vision therapy pune, pediatric therapy pune, special needs vision therapy, finevision pune"
  />

  <link rel="canonical" href="https://thefinevision.com/autism-adhd" />

  {/* Open Graph */}
  <meta property="og:title" content="Autism & ADHD Vision Therapy | FineVision Pune" />
  <meta
    property="og:description"
    content="Gentle, sensory-friendly Neuro-Vision Therapy for Autism & ADHD. Support for eye contact, attention, learning, and visual comfort."
  />
  <meta property="og:image" content="https://thefinevision.com/eye.png" />
  <meta property="og:url" content="https://thefinevision.com/autism-adhd" />
  <meta property="og:type" content="article" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Autism & ADHD Vision Therapy | FineVision" />
  <meta
    name="twitter:description"
    content="Specialized Vision Therapy for Autism & ADHD in Pune. Improve tracking, eye contact, reading, and sensory visual comfort."
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
            src={autismImg}
            alt="Vision Therapy for Autism & ADHD"
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

        {/* ===== MAIN CONTENT ===== */}
        <div className="max-w-5xl w-full px-6 sm:px-10 md:px-12 pb-20 space-y-8 text-center md:text-left">
          {/* ===== HEADING ===== */}
          <Motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center leading-snug"
          >
            Autism & ADHD
          </Motion.h1>

          <p className="text-center italic text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-15">
            Helping the Eyes and Brain Work Together for Calmer, Clearer Visual Experiences
          </p>

          {/* ===== TEXT CONTENT ===== */}
          <div
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${
              theme === "light" ? "text-[#2A3B5A]" : "text-gray-300"
            } space-y-6`}
          >
            <p>
              For many children on the autism spectrum, the world can feel visually
              overwhelming. Bright lights, fast movements, crowded classrooms, and even
              everyday tasks like reading or catching a ball can be challenging—not just
              due to behavior or attention, but because of how the brain processes visual
              information.
            </p>

            {/* ===== SECTION 1 ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-4 text-center md:text-left">
              1. Why Vision Matters in Autism & ADHD
            </h2>
            <p>
              Many children with Autism Spectrum Disorder (ASD) have healthy-looking eyes,
              but vision is more than just 6/6 clarity. It’s about how the brain
              interprets what the eyes see, including:
            </p>

            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>
                <b>Social cues:</b> Problems with vision can make it harder to interpret
                expressions, body language, and nonverbal cues.
              </li>
              <li>
                <b>Eye contact:</b> Eye teaming difficulties can make sustained eye
                contact uncomfortable.
              </li>
              <li>
                <b>Coordination:</b> Poor visual-spatial judgment complicates movement and
                interactions.
              </li>
            </ul>

            <p>
              In <b>ADHD</b>, vision issues like poor tracking and focusing can worsen
              attention problems.
            </p>

            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>
                <b>Focus and attention:</b> Vision problems can make concentrating harder.
              </li>
              <li>
                <b>Reading and learning:</b> Poor eye movement control can cause skipped
                words or loss of place while reading.
              </li>
            </ul>

            {/* ===== SECTION 2 ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-4 text-center md:text-left">
              2. Common Visual Signs in Autism
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Poor eye contact</li>
              <li>Looks sideways at objects instead of directly</li>
              <li>Avoids bright light</li>
              <li>Appears clumsy or bumps into objects</li>
              <li>Enjoys spinning or moving objects repeatedly</li>
              <li>Gets tired or frustrated with close-up tasks</li>
            </ul>
            <p>These are not “bad behaviors” — they’re signs of visual stress.</p>

            {/* ===== SECTION 3 ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-4 text-center md:text-left">
              3. How Vision Therapy Can Help
            </h2>
            <p>
              Vision therapy is a structured program that trains the brain and eyes to
              work together better. At <b>Finevision</b>, we create sensory-sensitive,
              individualized programs.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-[#4d9feb]">
              Step 1: Functional Vision Assessment
            </h3>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Play-based tests for eye teaming, focusing, and tracking</li>
              <li>Observation of sensory responses (light, sound, motion)</li>
              <li>Parent and teacher input included</li>
              <li>Duration: typically 60–75 minutes</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold text-[#4d9feb]">
              Step 2: Personalised Therapy Plan
            </h3>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Short 20–30 minute sessions</li>
              <li>Uses lights, puzzles, and toys for sensory comfort</li>
              <li>Adapted to the child’s tolerance and pace</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold text-[#4d9feb]">
              Step 3: Home & School Support
            </h3>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Simple 5–10 min home exercises</li>
              <li>Visual schedules and reading windows</li>
              <li>Collaboration with teachers</li>
            </ul>

            {/* ===== SECTION 4 ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-4 text-center md:text-left">
              4. What Improvements Can Look Like
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Better eye contact</li>
              <li>Improved tracking while reading</li>
              <li>Enhanced coordination and balance</li>
              <li>Reduced visual distress in bright areas</li>
              <li>Improved posture and attention in class</li>
            </ul>

            <p>
              These improvements often support progress in speech, occupational, and
              behavioral therapies.
            </p>

            {/* ===== SECTION 5 ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-4 text-center md:text-left">
              5. Our Promise: Gentle, Family-Centered Care
            </h2>
            <p>
              We create a sensory-safe environment — soft lights, quiet rooms, and flexible
              pacing — ensuring comfort and steady progress for every child.
            </p>

            {/* ===== SECTION 6 ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-4 text-center md:text-left">
              6. Vision Therapy Works Best When:
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-3 text-left">
              <li>Started early — though older children benefit too</li>
              <li>Paired with professional collaboration</li>
              <li>Reinforced consistently at home and school</li>
            </ul>

            {/* ===== SECTION 7 ===== */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F2C94C] pt-4 text-center md:text-left">
              7. Ready to Explore If Vision Therapy Can Help?
            </h2>
            <p>
              We offer dedicated <b>Autism & ADHD Vision Screenings</b> at Finevision to
              help families identify and support visual needs early.
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
