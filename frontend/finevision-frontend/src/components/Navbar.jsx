import { useState } from "react";
import logo from "../assets/log11.png";

export default function Navbar({ theme, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = () => {
    navigate("/");
    setTimeout(() => {
      window.location.hash = "";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 60);
  };

  const goToSection = (hash) => {
    navigate("/");

    setTimeout(() => {
      window.location.hash = hash;
    }, 200);

    setMenuOpen(false);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 shadow-md transition-all duration-500 ${
        theme === "light"
          ? "bg-white text-[#1F2E40]"
          : "bg-[#0a0f2c] text-white"
      }`}
    >
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-8 py-5">

        {/* LOGO */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={goHome}>
          <img
            src={logo}
            alt="Fine Vision Logo"
            className="h-12 w-12 md:h-14 md:w-14 object-contain rounded-full border border-[#4d9feb] bg-[#fef9e7]"
          />

          <div className="leading-tight">
            <h1
              className={`text-2xl md:text-3xl font-extrabold tracking-widest ${
                theme === "light" ? "text-[#1F2E40]" : "text-[#4d9feb]"
              }`}
            >
              FINE <span className="text-white">VISION</span>
            </h1>
            <p className="text-xs md:text-sm italic opacity-80">
              Eye Care & Vision Therapy Center
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden xl:flex items-center gap-10 text-base font-bold">
          {[
            { label: "Home", hash: "#home" },
            { label: "About", hash: "#about" },
            { label: "Vision Therapy", hash: "#vision-therapy" },
            { label: "Sports Vision", hash: "#sports-vision" },
            { label: "Eye Care", hash: "#eyecare" },
            { label: "Blogs", hash: "#blogs" },
            { label: "FAQs", hash: "#faq" },
            { label: "Reviews", hash: "#reviews" },
            { label: "Contact Us", hash: "#contact" },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => goToSection(item.hash)}
              className={`cursor-pointer hover:scale-110 transition-all duration-300 ${
                theme === "light"
                  ? "text-[#1F2E40] hover:text-[#F2C94C]"
                  : "text-gray-300 hover:text-[#4d9feb]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON — 3 small lines */}
        <button
          className="xl:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 rounded transition-all ${
              menuOpen ? "bg-white rotate-45 translate-y-1.5" : "bg-white"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 rounded transition-all ${
              menuOpen ? "opacity-0" : "bg-white"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 rounded transition-all ${
              menuOpen ? "bg-[#4d9feb] -rotate-45 -translate-y-1.5" : "bg-white"
            }`}
          ></span>
        </button>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div
          className={`xl:hidden flex flex-col items-center gap-6 py-6 text-lg font-semibold transition-all duration-300 ${
            theme === "light"
              ? "bg-white text-[#1F2E40]"
              : "bg-[#0a0f2c] text-white"
          }`}
        >
          {[
            { label: "Home", hash: "#home" },
            { label: "About", hash: "#about" },
            { label: "Vision Therapy", hash: "#vision-therapy" },
            { label: "Sports Vision", hash: "#sports-vision" },
            { label: "Eye Care", hash: "#eyecare" },
            { label: "Blogs", hash: "#blogs" },
            { label: "FAQs", hash: "#faq" },
            { label: "Reviews", hash: "#reviews" },
            { label: "Contact Us", hash: "#contact" },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => goToSection(item.hash)}
              className="hover:text-[#4d9feb] transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
