import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

function ExpandableAbout() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 px-6 py-2 rounded-full bg-[#4d9feb] hover:bg-[#6faefc] text-white font-semibold transition-transform hover:scale-105"
      >
        {expanded ? "Show Less" : "Show More"}
      </button>

      <AnimatePresence>
        {expanded && (
          <Motion.div
            key="about-more"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 space-y-5 text-lg leading-relaxed tracking-wide text-gray-200/95"
          >
            <p className="text-gray-300">
              <b className="text-[#F2C94C]">Finevision Eyecare and Vision Therapy Center</b>{" "} 
              is Pune’s premier vision therapy clinic on Senapati Bapat Road, offering advanced 
              non-surgical treatments for amblyopia, strabismus, pediatric vision issues, and 
              functional visual challenges.
            </p>

            <p>
              <b className="text-[#F2C94C]">Meet Our Founder:</b><br />
              <span className="text-[#4d9feb] text-2xl font-bold">
                Optometrist Nivedita Dabir
              </span>
            </p>

            <p>
              She is a developmental optometrist and an International Associate Member of the 
              College of Optometrists in Vision Development (USA), holding a Master’s in Clinical 
              Optometry, a Vision Therapy Fellowship, and a Pediatric Vision & CVI Certification 
              from Narayana Netralaya.
            </p>

            <p>
              She frequently conducts seminars on early visual intervention and functional vision 
              assessments for children with learning or neurodevelopmental challenges.
            </p>

            <p>
              <b className="text-[#F2C94C]">Why Choose Finevision?</b>{" "}  
              We offer advanced diagnostics and personalized therapy for all ages—from lazy eye 
              management in children to digital eye strain solutions for adults.
            </p>

            <p>
              Our mission is to help every person achieve clearer vision, improved focus, and 
              better visual comfort for daily life.
            </p>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ExpandableAbout;
