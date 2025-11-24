import { motion as Motion } from "framer-motion";
import { useEffect } from "react";
import logo from "../assets/log11.png"; // 👈 your FineVision logo

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 2500); // after 2.5 seconds go to main
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <Motion.div
      key="splash"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-blue-300 to-white"
    >
      
      {/* 🌟 Welcome Message */}
      <Motion.h2
        className="text-xl sm:text-2xl text-blue-900 font-semibold mb-4 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        >
        Welcome to Finevision Eye Care & Vision Therapy Centre 
      </Motion.h2>


      {/* Logo */}
      <Motion.img
        src={logo}
        alt="Fine Vision Logo"
        className="h-32 w-60 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Title */}
      <Motion.h1
        className="text-5xl sm:text-6xl font-extrabold text-blue-950 tracking-widest"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
      >
        <span className="bg-gradient-to-r from-blue-900 via-sky-600 to-blue-900 bg-[length:200%_auto] animate-gradient-x text-transparent bg-clip-text">
          FINE<span className="text-sky-700">VISION</span>
        </span>
      </Motion.h1>

      {/* Tagline */}
      <Motion.p
        className="mt-3 text-blue-800 italic text-sm sm:text-base"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Eye Care & Vision Therapy Center
      </Motion.p>

      <Motion.p
        className="text-blue-700 text-xs sm:text-sm font-semibold"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Enhancing Vision with Precision!
      </Motion.p>
    </Motion.div>
  );
}
