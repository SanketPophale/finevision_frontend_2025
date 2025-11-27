import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";
import logo from "../assets/log11.png";
import doctorImg from "../assets/about456.png";
import therapyImg from "../assets/therapy.png";
import EyeCareCarousel from "../components/EyeCareCarousel";
import sports2 from "../assets/sports2.png";
import FAQSection from "../components/FAQSection";
import ExpandableAbout from "../components/AboutExpand";
import { blogsData } from "../data/blogData";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import ReviewS from "./ReviewPage";
import { Helmet } from "react-helmet";



export default function Home() {
  // -------------------- THEME SETUP -------------------- //
  const [theme] = useState(() => localStorage.getItem("theme") || "dark");
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "light") {
    
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [showScrollTop, setShowScrollTop] = useState(false);
   
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowScrollTop(true);
    } else {  
      setShowScrollTop(false);
  }
};

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  // -------------------- CONTACT FORM -------------------- //
const [form, setForm] = useState({
  name: "",
  age: "",
  email: "",
  phone: "",
  service: "",
  gender: "",
  symptoms: "",
});

const [loading, setLoading] = useState(false);
const [alert, setAlert] = useState("");

// ✅ WhatsApp Sender With Full Validation + Trim Fix
const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);
  setAlert("");

  // --- Clean values (trim to avoid whitespace issues) ---
  const name = form.name.trim();
  const age = form.age.trim();
  const email = form.email.trim();
  const phone = form.phone.trim();
  const service = form.service.trim();
  const gender = form.gender.trim();
  const symptoms = form.symptoms.trim();

  // --- Validation for ALL 7 FIELDS ---
  if (!name || !age || !email || !phone || !service || !gender || !symptoms) {
    setAlert("⚠️ Please fill in all fields before sending.");
    setLoading(false);
    return;
  }

  try {
    // Your WhatsApp number (without "+")
    const phoneNumber = "917820869736";

    // WhatsApp message body
    const text = `Hello! I want to book an appointment.

 Full Name: ${name}
 Age: ${age}
 Email: ${email}
 Phone: ${phone}
 Service Required: ${service}
 Gender: ${gender}

 Primary Symptoms / Reason:
${symptoms}
`;

    // Encode the text
    const encodedMessage = encodeURIComponent(text);

    // WhatsApp URL
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Success message
    setAlert("✅ Redirecting you to WhatsApp...");
    
    // Clear form
    setForm({
      name: "",
      age: "",
      email: "",
      phone: "",
      service: "",
      gender: "",
      symptoms: "",
    });

  } catch (error) {
    console.error("❌ WhatsApp redirect error:", error);
    setAlert("❌ Failed to open WhatsApp. Please try again later.");
  }

  setLoading(false);
};

    return (
    <div
      className={`min-h-screen scroll-smooth overflow-x-hidden transition-colors duration-700 ${
        "bg-[#0a0f2c] text-white"
      }`}
    >
       {/* ⭐ SEO HELMET FOR HOME PAGE ⭐ */}
    <Helmet>
      <title>FineVision Eye Care & Vision Therapy Centre | Pune</title>

      <meta
        name="description"
        content="FineVision Eye Care & Vision Therapy Centre in Pune offers Vision Therapy, Sports Vision, Eye Care, Post-Stroke Rehab, Digital Eye Strain Treatment, Learning Vision Issues, and more. Book your appointment today."
      />

      <meta
        name="keywords"
        content="vision therapy pune, sports vision pune, eye care pune, finevision pune, lazy eye treatment, amblyopia pune, binocular vision therapy, squint therapy, pediatric eye care pune"
      />

      <link rel="canonical" href="https://thefinevision.com/" />

      <meta property="og:title" content="FineVision Eye Care & Vision Therapy Centre" />
      <meta
        property="og:description"
        content="Personalized eye care and vision therapy services for all ages. Improve focus, eye teaming, reading skills, and sports performance."
      />
      <meta property="og:image" content="https://thefinevision.com/eye.png" />
      <meta property="og:url" content="https://thefinevision.com/" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    
{/* ======== HEADER ======== */}
<header
  className={`w-full fixed top-0 left-0 z-50 shadow-md transition-all duration-500 ${
    theme === "light"
      ? "bg-white text-[#1F2E40]"
      : "bg-[#0a0f2c]  text-white"
  }`}
>
  <div className="max-w-[1500px] mx-auto flex items-center justify-between px-10 py-5">
    
    {/* ======== LEFT SECTION (Logo + Title) ======== */}
    <div
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => {
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 300);
      }}
    >
      <img
        src={logo}
        alt="Fine Vision Logo"
        className="h-12 w-12 md:h-14 md:w-14 object-contain rounded-full border border-[#4d9feb] bg-[#fef9e7] shadow-[0_0_10px_rgba(77,159,235,0.4)]"
      />

      <div className="leading-tight pl-2">
        <h1
          className={`text-2xl md:text-3xl font-extrabold tracking-widest ${
            theme === "light" ? "text-[#1F2E40]" : "text-[#4d9feb]"
          }`}
        >
          FINE
          <span className={theme === "light" ? "text-blue-400" : "text-white"}>
            VISION
          </span>
        </h1>
        <p className="text-xs md:text-sm italic opacity-80">
          Eye Care & Vision Therapy Center
        </p>
      </div>
    </div>

    {/* ======== RIGHT SECTION (Menu Links) ======== */}
    <div className="hidden xl:flex items-center gap-10 text-base font-bold">
      {[
        { name: "Home", path: "home" },
        { name: "About", path: "about" },
        { name: "Vision Therapy", path: "vision-therapy" },
        { name: "Sports Vision", path: "sports-vision" },
        { name: "Eye Care", path: "eyecare" },
        { name: "Blogs", path: "blogs" },
        { name: "FAQs", path: "faq" },
        { name: "Reviews", path: "reviews" },
        { name: "Contact Us", path: "contact" },
      ].map((link, i) => (
        <ScrollLink
          key={i}
          to={link.path}
          smooth={true}
          duration={700}
          offset={-70}
          className={`cursor-pointer hover:scale-110 transition-all duration-300 ${
            theme === "light"
              ? "text-[#1F2E40] hover:text-[#F2C94C]"
              : "text-gray-300 hover:text-[#4d9feb]"
          }`}
        >
          {link.name}
        </ScrollLink>
      ))}
    </div>

    {/* ======== HAMBURGER (Mobile) ======== */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="xl:hidden text-3xl ml-20 focus:outline-none transition-transform duration-300"
    >
      {menuOpen ? "✕" : "☰"}
    </button>
  </div>

  {/* ======== MOBILE MENU ======== */}
  {menuOpen && (
    <div className="xl:hidden bg-[#0a0f2c] text-white flex flex-col items-center gap-5 py-6 text-lg font-semibold transition-all duration-500">
      {[
        { name: "Home", path: "home" },
        { name: "About", path: "about" },
        { name: "Vision Therapy", path: "vision-therapy" },
        { name: "Sports Vision", path: "sports-vision" },
        { name: "Eye Care", path: "eyecare" },
        { name: "Blogs", path: "blogs" },
        { name: "FAQs", path: "faq" },
        { name: "Reviews", path: "reviews" },
        { name: "Contact Us", path: "contact" },
      ].map((link, i) => (
        <ScrollLink
          key={i}
          to={link.path}
          smooth={true}
          duration={700}
          offset={-60}
          className="hover:text-[#4d9feb] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          {link.name}
        </ScrollLink>
      ))}
    </div>
  )}
</header>

{/* ======== HERO SECTION (Responsive) ======== */}
<Element name="home" id="home">
  <section
    className={`relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 sm:px-10 py-16 overflow-hidden ${
      theme === "light"
        ? "bg-[#fff] text-[#1F2E40]"
        : "bg-[#0a0f2c]  text-white"
    }`}
  >
    {/* ===== Background Image ===== */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/eye1.png')" }}
    ></div>

    {/* ===== Overlay ===== */}
    <div
      className={`absolute inset-0 ${
        theme === "light" ? "bg-white/70" : "bg-black/60"
      }`}
    ></div>

    {/* ===== Left (Text Content) ===== */}
    <Motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center items-start text-left space-y-6 md:space-y-8 text-center lg:text-left"
    >
      <p
        className={`text-xl sm:text-2xl font-semibold italic pt-10 sm:pt-12 md:pt-14
                    mt-[env(safe-area-inset-top)] ${
          theme === "light" ? "text-[#3d614b]" : "text-[#a4b8ff]"
        }`}
      >
       Enhancing Vision with Precision
      </p>

      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight ${
          theme === "light"
            ? "text-[#1F2E40]"
            : "text-white drop-shadow-[0_0_12px_rgba(120,180,255,0.4)]"
        }`}
      >
        <span className="text-[#4d9feb]">F I N E</span>{" "}
        <span className="text-white">V I S I O N</span>
      </h1>

      <p
        className={`text-base sm:text-lg md:text-xl font-medium max-w-xl mx-auto lg:mx-0 ${
          theme === "light" ? "text-[#30523B]" : "text-gray-200"
        }`}
      >
        Personalized eye care and advanced vision therapy designed to
        strengthen how your eyes and brain work together.
      </p>



{/* ===== Buttons ===== */}
<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 justify-center lg:justify-start">
  <ScrollLink
    to="contact"       // 🔥 ID of the contact section
    smooth={true}
    duration={700}
    offset={-80}       // adjust so it does not hide behind navbar
    className={`px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg transition-all text-base sm:text-lg cursor-pointer ${
      theme === "light"
        ? "bg-[#F2C94C] text-[#1F2E40] hover:bg-[#1F2E40] hover:text-white"
        : "bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white hover:opacity-90"
    }`}
  >
    Book Appointment
  </ScrollLink>


        <ScrollLink
          to="vision-therapy"
          smooth={true}
          duration={700}
          offset={-50}
          className={`px-8 py-3 sm:py-4 rounded-xl border text-base sm:text-lg font-semibold transition-all cursor-pointer ${
            theme === "light"
              ? "border-[#1F2E40] text-[#1F2E40] hover:bg-[#1F2E40] hover:text-white"
              : "border-[#4d9feb] text-white hover:bg-[#4d9feb]/20"
          }`}
        >
          Learn More
        </ScrollLink>
        </div>
    </Motion.div>

    {/* ===== Right (Image) ===== */}
    <Motion.div
      initial={{ opacity: 0, x: 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0"
    >
      <Motion.img
        src="/eye.png"
        alt="Vision Hero"
        className="w-[90%] max-w-[500px] sm:max-w-[550px] md:max-w-[600px] rounded-3xl shadow-2xl object-contain"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />
    </Motion.div>
  </section>
</Element>

{/* ======== ABOUT SECTION (Premium Layout v4 Updated) ======== */}
<Element name="about" id="about">
  <section
    className={`min-h-screen py-20 ${
      theme === "light"
        ? "bg-[#FFFFFF] text-[#1F2E40]"
        : "bg-[#0a0f2c]  text-white"
    }`}
  >
    <div className="max-w-6xl mx-auto px-8">
      
      {/* === Section Title === */}
      <Motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1
          className={`text-6xl font-extrabold mb-5 ${
            theme === "light" ? "text-[#1F2E40]" : "text-white"
          }`}
        >
          About
        </h1>
        <p className="max-w-2xl mx-auto text-2xl opacity-80 leading-relaxed font-serif">
          Enhancing visual comfort, clarity, and performance through personalized eye care.
        </p>
      </Motion.div>

      {/* ======= IMAGE LEFT — TEXT RIGHT ======= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT FIXED IMAGE */}
        <Motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={doctorImg}
            alt="Mrs. Nivedita Dabir"
            className="w-[300px] h-[380px] md:w-[360px] md:h-[420px] object-cover rounded-3xl 
            shadow-[0_0_45px_rgba(77,159,235,0.35)] border border-white/30"
          />
        </Motion.div>

        {/* RIGHT BASIC DETAILS */}
        <Motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          <h2
            className={`text-4xl font-bold ${
              theme === "light" ? "text-[#1F2E40]" : "text-[#F2C94C]"
            }`}
          >
            Mrs. Nivedita Dabir
          </h2>

          <p className="font-semibold opacity-80 text-xl">
            Developmental Optometrist & Vision Therapist
          </p>

          <p className="text-lg leading-relaxed text-gray-200/90 tracking-wide">
            With over a decade of experience, Mrs. Dabir specializes in 
            <span className="text-[#F2C94C] font-medium"> binocular vision</span>, 
            <span className="text-[#F2C94C] font-medium"> pediatric eye care</span>, and 
            <span className="text-[#F2C94C] font-medium"> sports vision enhancement</span>.
            She has helped hundreds of patients overcome eye strain, poor focus, lazy eye, 
            and functional vision challenges.
          </p>
        </Motion.div>

      </div>

      {/* ⭐ FULL-WIDTH EXPANDABLE CONTENT ⭐ */}
      <div className="mt-12">
        <ExpandableAbout />
      </div>

    </div>
  </section>
</Element>

{/* ======== VISION THERAPY SECTION (Rearranged Like Sports Vision) ======== */}
<Element name="vision-therapy" id="vision-therapy">
  <section
    className={`min-h-screen flex flex-col items-center px-6 sm:px-10 lg:px-20 py-20 relative overflow-hidden ${
      theme === "light"
        ? "bg-[#FFFFFF] text-[#1F2E40]"
        : "bg-[#0a0f2c] text-white"
    }`}
  >

    {/* ===== MAIN HEADING — Always Centered ===== */}
    <Motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 ${
        theme === "light" ? "text-[#1F2E40]" : "text-white"
      }`}
    >
      Vision Therapy
    </Motion.h2>

    {/* ===== 2-COLUMN LAYOUT ===== */}
    <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* ========= LEFT SIDE IMAGE (Bigger like Sports) ========= */}
      <Motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="flex justify-center"
      >
        <img
          src={therapyImg}
          alt="Vision Therapy"
          className="rounded-3xl w-full max-w-[700px]
          shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          border border-[#4d9feb]/40 object-cover
          hover:scale-105 transition-transform duration-700 ease-out"
        />
      </Motion.div>

      {/* ========= RIGHT SIDE CONTENT ========= */}
      <Motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="space-y-8 text-center lg:text-left"
      >

        {/* ===== SUBTITLE TEXT ===== */}
        <p
          className="
            text-base sm:text-lg md:text-xl leading-relaxed font-serif
            tracking-wide max-w-2xl
            mx-auto lg:mx-0
            bg-gradient-to-r from-[#4d9feb] via-[#a1c4fd] to-[#f2c94c]
            bg-clip-text text-transparent font-medium
          "
        >
          Vision Therapy enhances how your eyes and brain work together.
          It improves focusing, eye coordination, and visual processing —
          vital for reading, learning, and sports performance.
        </p>

        {/* ========= CARDS GRID ========= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl lg:max-w-2xl">

          {[
            {
              title: "Binocular Vision Training",
              subtitle:
                "Transform daily struggles into effortless eye-teaming.",
              path: "/vision-therapy/binocular",
            },
            {
              title: "Lazy Eye",
              subtitle:
                "Revitalize hidden potential with proven therapy.",
              path: "/vision-therapy/amblyopia",
            },
            {
              title: "Squint",
              subtitle: "Correct squint with non-surgical methods.",
              path: "/vision-therapy/squint",
            },
            {
              title: "Autism & ADHD",
              subtitle:
                "Enhance focus & reduce sensory overload.",
              path: "/vision-therapy/austim",
            },
            {
              title: "Digital Eyestrain",
              subtitle:
                "Eliminate screen-induced headaches & fatigue.",
              path: "/vision-therapy/digitaleyestrain",
            },
            {
              title: "Learning Issues",
              subtitle:
                "Improve reading & academic performance.",
              path: "/vision-therapy/learning",
            },
            {
              title: "Cortical Visual Impairment",
              subtitle: "Strengthen brain-based visual functions.",
              path: "/vision-therapy/visual",
            },
            {
              title: "Post Stroke",
              subtitle: "Regain visual independence after stroke.",
              path: "/vision-therapy/post",
            },
          ].map((card, i) => (
            <Motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              onClick={() => navigate(card.path)}
              className={`rounded-xl px-5 py-4 sm:py-6 text-center 
                font-semibold text-sm sm:text-base md:text-lg shadow-lg 
                transition-all duration-300 cursor-pointer
                ${
                  theme === "light"
                    ? "bg-[#f5f6fa] border border-[#E0E0E0] text-[#1F2E40] hover:bg-[#F2C94C] hover:text-[#1F2E40]"
                    : "bg-[#0f1e45] border border-[#4d9feb]/30 text-white hover:bg-gradient-to-r from-[#6f42c1] to-[#4d9feb]"
                }`}
            >
              <div>{card.title}</div>
              <div
                className={`text-xs sm:text-sm mt-1 font-normal ${
                  theme === "light" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                {card.subtitle}
              </div>
            </Motion.div>
          ))}
        </div>

        {/* ========= BUTTON ========= */}
        <div className="pt-4 flex justify-center lg:justify-start">
          <Link
            to="/vision-therapy"
            className={`inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full 
              text-base sm:text-lg font-semibold shadow-xl transition-all duration-300
              ${
                theme === "light"
                  ? "bg-[#1F2E40] text-white hover:bg-[#F2C94C] hover:text-[#1F2E40]"
                  : "bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white hover:opacity-90"
              }`}
          >
            Know More →
          </Link>
        </div>

      </Motion.div>

    </div>
  </section>
</Element>

{/* ======== SPORTS VISION SECTION (Updated as Requested) ======== */}
<Element name="sports-vision" id="sports-vision">
  <section
    className={`min-h-screen w-full flex flex-col items-center px-6 sm:px-10 lg:px-20 py-20 relative overflow-hidden ${
      theme === "light"
        ? "bg-[#FFFFFF] text-[#1F2E40]"
        : "bg-[#0a0f2c] text-white"
    }`}
  >
    {/* ===== MAIN HEADING — Always Centered ===== */}
    <Motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 ${
        theme === "light" ? "text-[#1F2E40]" : "text-white"
      }`}
    >
      Sports Vision
    </Motion.h2>

    {/* ===== 2-COLUMN LAYOUT ===== */}
    <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* ===== LEFT SIDE IMAGE — Bigger Size ===== */}
      <Motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="flex justify-center"
      >
        <img
          src={sports2}
          alt="Sports Vision Training"
          className="rounded-3xl w-full max-w-[700px] 
          shadow-[0_20px_60px_rgba(0,0,0,0.4)] 
          border border-[#4d9feb]/40 object-cover 
          hover:scale-105 transition-transform duration-700 ease-out"
        />
      </Motion.div>

      {/* ===== RIGHT SIDE TEXT ===== */}
      <Motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="space-y-6 text-center lg:text-left"
      >
        {/* ===== TITLE One Line ===== */}
        <h3
          className={`text-2xl sm:text-xl md:text-4xl font-bold whitespace-normal lg:whitespace-nowrap ${
            theme === "light" ? "text-[#1F2E40]" : "text-[#F2C94C]"
          }`}
        >
          Train Eyes Like You Train the Body
        </h3>

        {/* ===== PARAGRAPH GRAY COLOR ===== */}
        <p
          className={`text-base sm:text-lg md:text-xl leading-relaxed tracking-wide ${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          }`}
        >
          Whether you play cricket, badminton, football, tennis, or any other
          competitive sport, your eyes play a vital role in how fast, accurately,
          and confidently you perform.

          <br /><br />

          Visual performance is more than clear eyesight — it decides how well you
          judge distances, react to speed, and stay focused.

          <br /><br />

          <span className="text-[#4d9feb] font-semibold">
            Sports Vision Training
          </span>{" "}
          improves eye-hand coordination, reaction time, and visual speed —
          sharpening your performance and decision-making.

          <br /><br />

          Strengthening the connection between your eyes and brain transforms
          good performance into exceptional results.
        </p>

        {/* ===== BUTTON - CENTERED ALWAYS ===== */}
        <div className="pt-4 flex justify-center lg:justify-center">
          <Link
            to="/sports-vision/sportsvision"
            className={`inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl transition-all duration-300 ${
              theme === "light"
                ? "bg-[#F2C94C] text-[#1F2E40] hover:bg-[#f1d25f]"
                : "bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white hover:opacity-90"
            }`}
          >
            Know More →
          </Link>
        </div>
      </Motion.div>

    </div>
  </section>
</Element>

{/* ======== EYE CARE SECTION (Centered & Responsive Carousel) ======== */}
<Element name="eyecare" id="eyecare">
  <section
    className={`relative min-h-screen flex flex-col items-center justify-center py-20 px-6 sm:px-10 md:px-16 overflow-hidden ${
      theme === "light"
        ? "bg-[#FFFFFF] text-[#1F2E40]"
        : "bg-[#0a0f2c] text-white"
    }`}
  >

    {/* ===== Carousel Wrapper ===== */}
    <div className="relative w-full max-w-5xl flex flex-col items-center justify-center px-2 sm:px-6">
      <EyeCareCarousel theme={theme} />
    </div>
  </section>
</Element>

{/* ======== BLOGS SECTION (Responsive Grid) ======== */}
<Element name="blogs" id="blogs">
  <section
    className={`min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 py-20 relative overflow-hidden ${
      theme === "light"
        ? "bg-[#FFFFFF] text-[#1F2E40]"
        : "bg-[#0a0f2c]  text-white"
    }`}
  >
    {/* ===== MAIN HEADING ===== */}
    <Motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-10 sm:mb-16 ${
        theme === "light" ? "text-[#1F2E40]" : "text-white"
      }`}
    >
      Blogs
    </Motion.h2>

    {/* ===== SUBHEADING ===== */}
    <Motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`max-w-3xl mx-auto text-center text-base sm:text-lg md:text-xl leading-relaxed mb-12 ${
        theme === "light"
          ? "text-[#2a3a5a]"
          : "text-[#AEE3FF]/90"
      }`}
    >
      Explore expert insights from <b>Optometrist Nivedita Dabir</b> and the FineVision team.  
      Learn about{" "}
      <span className="text-[#4d9feb] font-semibold">Vision Therapy</span>,{" "}
      <span className="text-[#4d9feb] font-semibold">Sports Vision Training</span>,{" "}
      <span className="text-[#4d9feb] font-semibold">Myopia Management</span>, and{" "}
      <span className="text-[#4d9feb] font-semibold">Healthy Eye Habits</span> to
      protect and enhance your eyesight.
    </Motion.p>

    {/* ===== BLOG GRID ===== */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-2 sm:px-0">
      {blogsData.map((blog, i) => (
        <Motion.div
          key={blog.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className={`rounded-3xl overflow-hidden shadow-2xl border hover:scale-105 transition-transform duration-500 cursor-pointer ${
            theme === "light"
              ? "bg-white border-[#E0E0E0] hover:shadow-[#4d9feb]/30"
              : "bg-white/10 border-white/20 backdrop-blur-md hover:shadow-[#4d9feb]/30"
          }`}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-56 sm:h-60 object-cover"
          />
          <div className="p-6 space-y-3">
            <h3
              className={`text-xl sm:text-2xl font-bold ${
                theme === "light" ? "text-[#1F2E40]" : "text-[#F2C94C]"
              }`}
            >
              {blog.title}
            </h3>
            <p
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-300/90"
              } leading-relaxed line-clamp-3 font-serif`}
            >
              {blog.excerpt}
            </p>
            <Link
              to={`/blog/${blog.id}`}
              className="inline-block mt-2 text-[#4d9feb] font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>
        </Motion.div>
      ))}
    </div>
  </section>
</Element>


{/* ========== FAQ's SECTION ========== */}

    <FAQSection theme={theme} />

    {/* ========== Review SECTION ========== */}
    <ReviewS theme={theme} />

{/* ================= CONTACT SECTION ================= */}
<Element name="contact" id="contact">
  <section
    className={`relative min-h-screen flex flex-col items-center justify-center px-6 py-20 ${
      theme === "light"
        ? "bg-[#FFFFFF] text-[#1F2E40]"
        : "bg-[#0a0f2c] text-white"
    }`}
  >
    {/* ====== CONTACT HEADING ====== */}
    <Motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 relative z-10"
    >
      <h1 className="text-6xl font-extrabold mb-3">
        Contact Us
      </h1>
      <p className="max-w-2xl mx-auto text-xl opacity-80 font-light">
        Any questions or remarks? We'd love to hear from you!
      </p>
    </Motion.div>

    {/* ====== GLASS CARD CONTAINER ====== */}
    <Motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative max-w-6xl w-full rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] flex flex-col md:flex-row overflow-hidden"
    >
      {/* ========= LEFT SIDE : MAP ========= */}
      <div className="w-full md:w-1/2">
        <iframe
          title="Finevision Eyecare and Vision Therapy Centre"
          className="w-full h-full min-h-[450px] rounded-l-3xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.416611195589!2d73.82672907518715!3d18.512932382583054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf6e2e00bcdb%3A0x6f7bec6017acf942!2sFinevision%20Eyecare%20and%20Vision%20Therapy%20Centre!5e0!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* ========= RIGHT SIDE : FORM ========= */}
      <div className="w-full md:w-1/2 p-10">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* NAME ROW */}
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-transparent border-b border-white/30 focus:border-[#4d9feb] outline-none py-3"
              required
            />

            <input
              type="text"
              inputMode="numeric"
              placeholder="Age"
              value={form.age}
              onChange={(e) =>
                setForm({ ...form, age: e.target.value.replace(/[^0-9]/g, "") })
              }
              className="bg-transparent border-b border-white/30 focus:border-[#4d9feb] outline-none py-3"
              required
            />
          </div>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-transparent border-b border-white/30 focus:border-[#4d9feb] outline-none w-full py-3"
            required
          />

          {/* PHONE */}
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value.replace(/[^0-9]/g, "") })
            }
            className="bg-transparent border-b border-white/30 focus:border-[#4d9feb] outline-none w-full py-3"
            required
          />

          {/* SERVICE + GENDER ROW */}
          <div className="grid grid-cols-2 gap-6">
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className={`bg-transparent border-b border-white/30 focus:border-[#4d9feb] outline-none w-full py-3 ${
                form.service === "" ? "text-gray-400" : "text-white"
              }`}
              required
            >
              <option value="">Select Service Required</option>
              <option value="Vision Therapy">Vision Therapy</option>
              <option value="Sports Vision Training">Sports Vision Training</option>
              <option value="Eye Care Consultation">Eye Care Consultation</option>
              <option value="Digital Eyestrain Assessment">Digital Eyestrain Assessment</option>
              <option value="Comprehensive Vision Assessment">Comprehensive Vision Assessment</option>
            </select>

            <select
              value={form.gender}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
              className={`bg-transparent border-b border-white/30 focus:border-[#4d9feb] outline-none w-full py-3 ${
                form.gender === "" ? "text-gray-400" : "text-white"
              }`}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* SYMPTOMS */}
          <textarea
            rows="3"
            placeholder="Primary Symptoms / Reason for Visit"
            value={form.symptoms}
            onChange={(e) => setForm({ ...form, symptoms: e.target.value })}
            className="bg-transparent border-b border-white/30 focus:border-[#4d9feb] outline-none w-full py-3"
            required
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white font-bold shadow-lg hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {alert && (
            <p className="text-center mt-4 text-[#4d9feb] text-sm font-medium">
              {alert}
            </p>
          )}
        </form>
      </div>
    </Motion.div>

  </section>
</Element>

<button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className={`
    fixed z-50
    bottom-20 right-4         /* extra safe distance for Samsung */
    sm:bottom-6 sm:right-6
    bg-[#4d9feb]
    text-white font-bold
    w-12 h-12 sm:w-14 sm:h-14 /* slightly bigger for visibility */
    text-3xl
    flex items-center justify-center
    rounded-full
    shadow-[0_8px_30px_rgba(0,0,0,0.4)]
    hover:bg-[#6fb5ff]
    hover:scale-110 
    hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]
    transition-all duration-300
  
    ${showScrollTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none" }
    `}
>
  ^
</button>




{/* ===== FOOTER SECTION ===== */}
<footer
  className={`w-full border-t overflow-hidden ${
    theme === "light"
      ? "bg-[#f9fafc] text-[#1F2E40] border-gray-300"
      : "bg-[#0b1332] text-white border-white/10"
  }`}
>
  {/* ===== Top Section ===== */}
  <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 overflow-x-hidden">
    {/* ===== Left: Clinic Info ===== */}
    <div className="text-center md:text-left space-y-2">
      <h3
        className={`text-2xl font-bold tracking-wide ${
          theme === "light" ? "text-[#1F2E40]" : "text-[#F2C94C]"
        }`}
      >
        FineVision Eye Care & Vision Therapy Center
      </h3>
      <p className="text-sm opacity-80 max-w-md">
        Enhancing vision, empowering lives — with personalized eye care and advanced therapy.
      </p>
    </div>

    {/* ===== Right: Social Links ===== */}
    <div className="flex items-center gap-6 text-2xl">
      <a
        href="https://www.instagram.com/finevision_clinic?utm_source=qr&igsh=a2Z6b3pnNGxteGdz"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#E4405F] transition-colors duration-300"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.facebook.com/share/1ButdPKkw3/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#1877F2] transition-colors duration-300"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>
    </div>
  </div>

  {/* ===== Bottom Bar ===== */}
  <div
    className={`border-t ${
      theme === "light" ? "border-gray-300" : "border-white/10"
    }`}
  >
    <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
      <p>
        © {new Date().getFullYear()} FineVision Eye Care & Vision Therapy Center. All rights reserved.
      </p>
      <div className="flex items-center gap-6 mt-2 md:mt-0">
        <a href="#" className="hover:text-[#4d9feb] transition">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-[#4d9feb] transition">
          Terms & Conditions
        </a>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
 }