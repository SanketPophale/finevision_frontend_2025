import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function EyeCare({ cards, theme }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % cards.length);
  const prev = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 ${
        theme === "light"
          ? "bg-[#FFFFFF] text-[#1F2E40]"
          : "bg-gradient-to-b from-[#0b1332] via-[#1a2a5a] to-[#2a4a8b] text-white"
      }`}
    >
      {/* ===== HEADING ===== */}
      <h2
        className={`text-4xl md:text-5xl font-extrabold mb-12 text-center ${
          theme === "light" ? "text-[#1F2E40]" : "text-[#4d9feb]"
        }`}
      >
        Eye Care Services
      </h2>

      {/* ===== CARD DISPLAY ===== */}
      <div className="relative w-full max-w-4xl">
        <AnimatePresence mode="wait">
          <Motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`rounded-3xl shadow-2xl border px-8 py-10 md:px-12 md:py-16 ${
              theme === "light"
                ? "bg-white border-[#E0E0E0]"
                : "bg-[#0f1638]/70 border-white/10 backdrop-blur-xl"
            }`}
          >
            {/* === Card Content === */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon or Image */}
              <div className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-[#4d9feb] to-[#6f42c1] flex items-center justify-center text-4xl shadow-lg">
                {cards[index].icon}
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">{cards[index].title}</h3>
                <p className="text-[#4d9feb] font-medium">{cards[index].subtitle}</p>
                <p className="italic opacity-90 leading-relaxed text-lg">
                  {cards[index].details}
                </p>
              </div>
            </div>
          </Motion.div>
        </AnimatePresence>

        {/* ===== NAVIGATION BUTTONS ===== */}
        <button
          onClick={prev}
          className="absolute left-[-2rem] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full shadow-md transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-[-2rem] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full shadow-md transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* ===== PAGINATION DOTS ===== */}
      <div className="flex gap-3 mt-10">
        {cards.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#4d9feb] w-6" : "bg-gray-500/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
