import { useParams, Link } from "react-router-dom";
import { blogsData } from "../data/blogData";
import { motion as Motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === parseInt(id));

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "light") document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog)
    return (
      <>
        <Navbar theme={theme} toggleTheme={toggleTheme} navigate={navigate} />
        <p className="text-center mt-20 text-white text-xl font-semibold">
          Blog not found.
        </p>
      </>
    );

  return (
    <>
      {/* ===== Navbar (UPDATED) ===== */}
      <Navbar theme={theme} toggleTheme={toggleTheme} navigate={navigate} />

      <div className="pt-28 min-h-screen bg-[#0a0f2c] text-white flex flex-col items-center">

        {/* ===== Back Button ===== */}
        <div className="text-center mb-10">
          <button
            onClick={() => navigate("/#blogs")}
            className="inline-flex items-left gap-2 px-8 py-3 gap-2 rounded-full bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white font-semibold shadow-xl hover:scale-105 hover:shadow-[#4d9feb]/40 transition-all duration-300"
          >
            ← Back to Blogs
          </button>
        </div>

        {/* ===== Blog Detail Section ===== */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/* ===== Blog Header ===== */}
            <Motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F2C94C] mb-4 leading-snug font-sans">
                {blog.title}
              </h1>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 opacity-80 text-sm sm:text-base italic text-gray-300">
                <p>{blog.date}</p>
                <span className="hidden sm:inline">•</span>
                <p>{blog.category}</p>
              </div>
            </Motion.div>

            {/* ===== Featured Image ===== */}
            {blog.image && (
              <Motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                src={blog.image}
                alt={blog.title}
                className="w-full max-w-[600px] mx-auto rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.6)] mb-12 object-cover border border-[#4d9feb]/30"
              />
            )}

            {/* ===== Blog Content ===== */}
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="prose prose-invert max-w-none text-lg leading-relaxed tracking-wide font-serif
                prose-headings:font-semibold prose-headings:tracking-wide
                prose-h2:text-[#F2C94C] prose-h3:text-[#4d9feb]
                prose-h3:mt-10 prose-h3:mb-4 prose-h4:text-[#F2C94C]
                prose-h4:text-xl prose-h4:font-semibold prose-h4:mt-8 prose-h4:mb-3
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:my-6
                prose-strong:text-[#F2C94C] prose-li:leading-relaxed prose-li:marker:text-[#4d9feb]
                prose-ul:pl-6 prose-ol:pl-6 prose-blockquote:border-l-4 prose-blockquote:border-[#4d9feb]
                prose-blockquote:pl-4 prose-blockquote:text-gray-300 italic
                prose-hr:border-gray-600/40 prose-a:text-[#F2C94C] hover:prose-a:text-[#4d9feb]
                prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-6
                [&_h4]:text-[#F2C94C] [&_h4]:text-2xl [&_h4]:font-bold [&_h4]:tracking-wide [&_h4]:mb-2"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <hr className="border-t border-white/20 my-12" />

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-6 right-6 z-50 bg-[#4d9feb] text-white text-3xl font-bold
                         w-14 h-14 flex items-center justify-center rounded-full
                         shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:bg-[#6fb5ff] hover:scale-110 
                         hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              ^
            </button>

          </div>
        </section>
      </div>

      {/* ===== FOOTER ===== */}
      <footer
        className={`w-full border-t overflow-hidden ${
          theme === "light"
            ? "bg-[#f9fafc] text-[#1F2E40] border-gray-300"
            : "bg-[#0a0f2c] text-white border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 overflow-x-hidden">
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

          <div className="flex items-center gap-6 text-2xl">
            <a
              href="https://www.instagram.com/finevision_clinic?utm_source=qr&igsh=a2Z6b3pnNGxteGdz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E4405F] transition-colors duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/share/1ButdPKkw3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877F2] transition-colors duration-300"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div
          className={`border-t ${theme === "light" ? "border-gray-300" : "border-white/10"}`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
            <p>© {new Date().getFullYear()} FineVision Eye Care & Vision Therapy Center. All rights reserved.</p>
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
