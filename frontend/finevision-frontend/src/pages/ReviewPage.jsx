import { motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Element } from "react-scroll";

export default function Reviews() {
  const [theme] = useState(() => localStorage.getItem("theme") || "dark");
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    if (theme === "light") document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const reviews = [
    {
      name: "Dr. Monisa Momin",
      text: "One of the best and finest dr. I ever meet... perfect diagnosis best treatment... humble personality... Full of Knowledge... Because of her we could overcome the condition like amblyopia of my kid",
      rating: 5,
    },
    {
      name: "Shardul Joshi",
      text: `After learning that I don't need spectacles, I always wondered why my eyes felt fatigued by end of the day. While I knew that vision affects many aspects like balance & posture, I wasn’t aware of different types of examinations available for diagnosing vision problems. It has been 3 months since my issue was identified and I was advised some exercises. I don't feel fatigued as before and the exercises are working.`,
      rating: 4,
    },
    {
      name: "Aniket Korapkar",
      text: `Very professional setup and high-end equipment. We went to FineVision for my wife, who is an International Table Tennis Player. Nivedita identified the exact issue and gave us a plan to fix it. Thanks a lot ☺️`,
      rating: 5,
    },
    {
      name: "Aman Chikodi",
      text: `Dr. Dabir is exceptional in diagnosis and patient care. She listens carefully and explains everything clearly. Highly recommended!`,
      rating: 5,
    },
    {
      name: "Parag Mahajan",
      text: `Here I am getting vision therapy treatment for squint correction and saw immediate improvement. Ms. Nivedita is an extraordinary doctor and human being. If you’re searching for squint treatment without surgery, this is the perfect place. Trust the process, keep hope and go ahead — now I believe it's possible. 👍`,
      rating: 5,
    },
    {
      name: "Urmila S",
      text: `We received prompt & accurate diagnosis & therapy for my daughter's 'lazy eye'. We saw complete improvement under Ms. Nivedita’s guidance — now completely cured. Highly recommend!`,
      rating: 5,
    },
    {
      name: "Avantika Sathaye",
      text: `I always had a great experience at FineVision. Nivedita helped me understand my vision issue and corrected it without glasses. The exercises helped a lot.`,
      rating: 5,
    },
    {
      name: "Aarti Aathvale",
      text: `Ms. Nivedita is an expert with a humble approach. Very efficient with diagnosis and makes patients feel at ease. Highly recommended!`,
      rating: 5,
    },
    {
      name: "Shivaleela Karale",
      text: `FineVision Eye Care Center run by Dr. Nivedita ma’am is the best for children’s vision therapy. It helps in overall development. She takes great effort in every session. God bless her!`,
      rating: 5,
    },
  ];

  const scrollSpeed = 35;
  const totalWidth = reviews.length * 440;

  const animation = {
    animate: {
      x: [-totalWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: totalWidth / scrollSpeed,
          ease: "linear",
        },
      },
    },
  };

  return (
    <Element name="reviews"> {/* ⭐️ Added for navbar scroll */}
      <div
        className={`pt-32 min-h-screen flex flex-col items-center relative overflow-hidden ${
          theme === "light"
            ? "bg-[#FFFFFF] text-[#1F2E40]"
            : "bg-[#0a0f2c] text-white"
        }`}
      >
        {/* ===== SECTION HEADING ===== */}
        <section className="text-center px-6 py-16 sm:py-20">
          <Motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 ${
              theme === "light" ? "text-[#1F2E40]" : "text-white"
            }`}
          >
            What Our <span className="text-[#4d9feb]">Patients</span> Say
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Hear from our valued patients who experienced life-changing
            improvement through{" "}
            <span className="text-[#F2C94C] font-semibold">Vision Therapy</span> and{" "}
            <span className="text-[#F2C94C] font-semibold">Eye Care Programs</span>.
          </Motion.p>
        </section>

        {/* ===== AUTO-SCROLL REVIEWS ===== */}
        <div className="overflow-hidden w-full relative">
          <Motion.div {...animation} className="flex gap-10 px-10 py-12 whitespace-nowrap">
            {[...reviews, ...reviews].map((review, index) => (
              <Motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    theme === "light"
                      ? "0px 0px 35px rgba(79,129,255,0.35)"
                      : "0px 0px 40px rgba(120,175,255,0.5)",
                }}
                className={`min-w-[380px] sm:min-w-[400px] lg:min-w-[420px] flex flex-col justify-between rounded-3xl p-8 border transition-all duration-500 ${
                  theme === "light"
                    ? "bg-gradient-to-br from-[#fefeff] to-[#e6ebff] border-[#ccd5ff] text-[#1F2E40] shadow-[0_8px_25px_rgba(150,180,255,0.4)]"
                    : "bg-gradient-to-br from-[#0d1433] via-[#1a2f64] to-[#243b85] border-[#4d9feb]/40 text-gray-100 shadow-[0_10px_35px_rgba(77,159,235,0.3)] backdrop-blur-md"
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white font-bold text-2xl shadow-[0_4px_15px_rgba(77,159,235,0.6)]">
                    {review.name.charAt(0)}
                  </div>

                  {/* Review text */}
                  <Motion.p
                    layout
                    className={`italic text-base sm:text-lg leading-relaxed text-balance opacity-95 max-w-[90%] mx-auto transition-all duration-500 ${
                      expandedIndex === index ? "line-clamp-none" : "line-clamp-2"
                    }`}
                  >
                    “{review.text}”
                  </Motion.p>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < review.rating ? "text-[#F2C94C]" : "text-gray-400"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Toggle */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="flex items-center justify-center gap-1 mt-4 mx-auto text-[#4d9feb] hover:text-[#F2C94C] transition-all"
                >
                  <span className="font-semibold">
                    {expandedIndex === index ? "Show Less" : "Read More"}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Name */}
                <div className="text-center mt-4">
                  <h3
                    className={`font-semibold text-lg tracking-wide ${
                      theme === "light" ? "text-[#3b57f4]" : "text-[#F2C94C]"
                    }`}
                  >
                    — {review.name}
                  </h3>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>
    </Element>
  );
}
