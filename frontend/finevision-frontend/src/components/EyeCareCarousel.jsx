import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import eyeExamIcon from "../assets/eyecarecc.png";
import eyeLowVisionIcon from "../assets/lowv.png";
import eyeExamLensIcon from "../assets/eyecarecl.png";

export default function EyeCareCarousel({ theme }) {
  // ===== Eye Care Card Data =====
  const cards = [
    {
      icon: eyeExamIcon,
      title: "Comprehensive Eye Examination",
      subtitle: "Detailed Vision & Eye Health Analysis",
      details: `
A comprehensive eye exam at Finevision goes far beyond a simple vision check. It involves a series of tests to thoroughly evaluate the health and functionality of your eyes and visual system.

Unlike a basic vision screening, our examination includes assessments for clarity (refraction), eye health (anterior & posterior segments), binocular vision (coordination and depth), color vision, and neurological response.

At the completion of your exam, the optometrist interprets all test results to create a personalized diagnosis and treatment plan, explaining any findings and available treatment options.

In some cases, referral to another specialist may be advised for further care.

Tests include: detailed case history, visual acuity measurement for each eye, binocular vision and depth analysis, refractive power assessment, and ocular motility evaluation.

All test results are analyzed using the optometrist’s professional knowledge, experience, and judgment — ensuring an accurate prescription and holistic visual health guidance.
`,
    },

    {
      icon: eyeLowVisionIcon,
      title: "Low Vision Aids & Rehabilitation",
      subtitle: "Enhance Remaining Vision for Independence",
      details: `
Low Vision is a condition referring to partial loss of vision that cannot be adequately corrected with eyeglasses, contact lenses, medication, or surgery.

Common causes of low vision include macular degeneration, diabetic retinopathy, inherited retinal degenerative diseases, glaucoma, and optic nerve atrophy.

Low vision therapy involves a comprehensive evaluation of the patient’s visual abilities, prescription of suitable low vision devices, and personalized training in their use.

By combining optical aids and behavioral adjustments, patients regain confidence and independence in their everyday visual tasks.
`,
    },

    {
      icon: eyeExamLensIcon,
      title: "Speciality Contact Lenses",
      subtitle: "Customized Vision Correction for Every Eye",
      details: `
Whether you are new to contact lenses or have been wearing them for years, they are an exciting and convenient option for vision correction. They enhance both your vision and your appearance.

Contact lenses are generally easy to wear and care for, which is why many overlook the importance of ongoing professional supervision. However, proper follow-up by your optometrist is essential to ensure safe and long-term contact lens use.

At Finevision, we are a 'Rose-K' (RGP) certified practitioner specializing in fitting contact lenses for specific eye conditions such as keratoconus, post-LASIK ectasia, and pellucid marginal degeneration.

Over time, your eyes and lenses can change — often without symptoms or warning signs — putting you at risk for potentially serious complications. Regular checkups help identify and prevent these issues early.

We at Finevision offer the following types of contact lenses:
1. Rigid Gas-Permeable (RGP) Contact Lens
2. Scleral Contact Lens
3. Daily-Wear Soft Contact Lens
4. Silicon Hydrogel Contact Lens
5. Extended-Wear Contact Lens
6. Extended-Wear Disposable Contact Lens
7. Color Contact Lens

Our optometrist discusses these options with you to determine which type best fits your vision, comfort, and lifestyle needs.

Whether you’re an athlete seeking performance vision or simply want lenses that enhance your appearance, Finevision has your needs covered — ensuring safe, personalized, and stylish vision correction.
`,
    },
  ];

  // ===== Carousel State =====
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const next = () => {
    setExpanded(false);
    setIndex((prev) => (prev + 1) % cards.length);
  };
  const prev = () => {
    setExpanded(false);
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 ${
        theme === "light"
          ? "bg-[#FFFFFF] text-[#1F2E40]"
          : "bg-gradient-to-b from-[#0b1332] via-[#1a2a5a] to-[#2a4a8b] text-white"
      }`}
    >
      {/* ===== HEADING ===== */}
     {/* ===== HEADING ===== */}
<div className="text-center mb-16">
  <h2
    className={`text-4xl md:text-6xl font-extrabold mb-20 ${
      theme === "light" ? "text-[#1F2E40]" : "text-white"
    }`}
  >
    Eye Care
  </h2>

  <p
    className={`max-w-3xl mx-auto text-xl md:text-xl leading-relaxed tracking-wide font-serif ${
      theme === "light"
        ? "text-[#2a3a5a]"
        : "text-[#9CE9FF]"
    }`}
  >
    Our comprehensive eye care services include detailed eye examinations,
    contact lens fitting, and digital eye strain management — ensuring your
    eyes stay healthy and comfortable.
  </p>
</div>


      {/* ===== CARD DISPLAY ===== */}
      <div className="relative w-full max-w-5xl mb-20">
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
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <img
                  src={cards[index].icon}
                  alt={cards[index].title}
                  className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-[#4d9feb]/40 bg-white/80 shadow-xl p-2"
                />
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-[#F2C94C]">
                  {cards[index].title}
                </h3>
                <p className="text-[#4d9feb] font-semibold text-lg mt-7">
                  {cards[index].subtitle}
                </p>

                <Motion.p
                  className={`italic opacity-90 leading-relaxed text-lg whitespace-pre-line font-serif ${
                    expanded ? "" : "line-clamp-3"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {cards[index].details}
                </Motion.p>

                {/* Read More Button */}
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-[#4d9feb] font-semibold flex items-center justify-end gap-2 hover:underline w-full"
                >
                  {expanded ? (
                    <>
                      Show Less <span className="text-lg">▲</span>
                    </>
                  ) : (
                    <>
                      Show More <span className="text-lg">➜</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Motion.div>
        </AnimatePresence>

        {/* ===== NAV BUTTONS ===== */}
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
