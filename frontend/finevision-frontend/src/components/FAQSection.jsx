import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";

export default function FAQSection({ theme }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    {
      title: "Vision Therapy at Finevision",
      items: [
        { q: "Is vision therapy only for children?", a: "No. While many children benefit from it, adults with visual stress, screen fatigue, or post-stroke vision issues also see significant improvements." },
        { q: "How long does vision therapy take?", a: "Most programs range from 8 to 24 weeks, depending on the condition and consistency of practice." },
        { q: "Will my child need glasses after vision therapy?", a: "If your child has a refractive error, they may still need glasses. Vision therapy helps with visual skills." },
        { q: "Is therapy painful or difficult?", a: "Not at all. Sessions are interactive, age-friendly, and designed to be engaging." },
        { q: "Can therapy be done online?", a: "We offer hybrid programs with home activities and video follow-ups." }
      ]
    },
    {
      title: "Sports Vision Training",
      items: [
        { q: "Is this only for professional athletes?", a: "No. We train everyone from beginners to elite competitors." },
        { q: "Will it help with reaction time?", a: "Yes. It improves tracking, reflexes, and processing." },
        { q: "Can I continue regular coaching?", a: "Absolutely. Vision training complements physical training." },
        { q: "Do you train academies?", a: "Yes. We offer partnership programs and screenings." },
        { q: "Is this covered by insurance?", a: "Not currently, but invoices are provided for sponsorship reimbursements." }
      ]
    },
    {
      title: "Post-Stroke Vision Rehab",
      items: [
        { q: "Can vision improve months after a stroke?", a: "Yes. With correct stimulation, progress is possible." },
        { q: "Is this physiotherapy?", a: "No. We work specifically on visual recovery." },
        { q: "Do you offer home therapy?", a: "We provide tele-rehab and guided home programs." },
        { q: "What’s the difference from vision correction?", a: "Glasses fix clarity; rehab retrains how the brain uses vision." },
        { q: "Will double vision go away?", a: "It can improve significantly depending on the case." }
      ]
    }
  ];

  return (
    
    <Element name="faq">
      <section
        className={`min-h-screen px-6 py-16 flex flex-col items-center ${
          theme === "light"
            ? "bg-[#eeeeef] text-[#1F2E40]"   // 💎 Professional soft gray background
            : "bg-[#0a0f2c] text-white"
        }`}
      >
        <Motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold mb-10"
        >
          Frequently Asked Questions
        </Motion.h2>

        {/* FAQ Categories */}
        <div className="w-full max-w-5xl space-y-10">
          {faqs.map((category, idx) => (
            <div key={idx}>
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  theme === "light" ? "text-[#1F2E40]" : "text-[#8ec5ff]"
                }`}
              >
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.items.map((faq, i) => (
                  <div
                    key={i}
                    className={`rounded-xl border backdrop-blur-sm transition 
                      ${
                        theme === "light"
                          ? "border-gray-300 bg-[#f2f2f4] shadow-sm hover:shadow-md"  // ⭐ Clean gray box
                          : "border-[#4d9feb]/40 bg-[#10214b]/60"
                      }`}
                  >
                    {/* Question Button */}
                    <button
                      onClick={() => toggle(`${idx}-${i}`)}
                      className="w-full flex justify-between items-center px-5 py-4 text-lg font-medium text-gray-400"
                    >
                      <span>{faq.q}</span>
                      <Motion.span
                        animate={{ rotate: openIndex === `${idx}-${i}` ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        ▼
                      </Motion.span>
                    </button>

                    {/* Answer */}
                    {openIndex === `${idx}-${i}` && (
                      <Motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-4 text-base opacity-90 leading-relaxed text-gray-400"
                      >
                        {faq.a}
                      </Motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
}
