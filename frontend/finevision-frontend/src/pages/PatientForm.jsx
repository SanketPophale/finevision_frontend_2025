import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function PatientForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    symptoms: "",
    history: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Update form field
  function update(k, v) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  // ✅ Handle submit using EmailJS
  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const serviceId = "service_8ykot9l"; // e.g., service_xxxxxx
      const templateId = "template_patient"; // e.g., template_yyyyyy
      const publicKey = "hjZTXcOwsKQj4pxvb"; // e.g., UeH_abc123xyz

      const templateParams = {
        firstName: form.firstName,
        lastName: form.lastName,
        age: form.age,
        gender: form.gender,
        phone: form.phone,
        email: form.email,
        address: form.address,
        service: form.service,
        symptoms: form.symptoms,
        history: form.history,
        to_email: "finevision18@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setMessage("✅ Your form has been submitted successfully!");
      setForm({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        phone: "",
        email: "",
        address: "",
        service: "",
        symptoms: "",
        history: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setMessage("❌ Failed to send form. Please try again later.");
    }

    setLoading(false);
  }
  
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
    <div className="pt-32 min-h-screen bg-gradient-to-b from-[#081229] via-[#132f56] to-[#1e3a8a] text-white flex flex-col items-center">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl bg-white/70 backdrop-blur-xl rounded-2xl border border-[#C8DFFF] shadow-[0_8px_30px_rgba(77,159,235,0.25)] p-8 text-[#0C1E3D]"
      >
        <h2 className="text-3xl font-extrabold text-center text-white mb-8 tracking-wide">
          🩺 FineVision - Patient Registration Form
        </h2>

        <form onSubmit={submit} className="grid md:grid-cols-2 gap-5">
          {[
            { key: "firstName", placeholder: "First Name", type: "text" },
            { key: "lastName", placeholder: "Last Name", type: "text" },
            { key: "age", placeholder: "Age", type: "text", inputMode: "numeric", pattern: "[0-9]*" },
            {
              key: "gender",
              placeholder: "Gender",
              type: "select",
              options: ["Male", "Female", "Other"],
            },
            { key: "phone", placeholder: "Phone Number", type: "tel" },
            { key: "email", placeholder: "Email Address", type: "email" },
            {
              key: "service",
              label: "Service Required",
              type: "select",
              options: [
              "Vision Therapy",
              "Contact Lens",
              "Low Vision Aid",
              "Comprehensive Vision Assessment",
              "Digital Eyestrain Assessment",
             ],
            render: (form, setForm) => (
           <select
             value={form.service}
             onChange={(e) => setForm({ ...form, service: e.target.value })}
             className="w-full px-4 py-3 bg-white/70 backdrop-blur-md border border-[#C8DFFF] rounded-lg text-[#0C1E3D] font-medium shadow-[0_4px_20px_rgba(77,159,235,0.15)] focus:outline-none focus:ring-2 focus:ring-[#4d9feb] focus:border-[#4d9feb] hover:border-[#4d9feb]/80 hover:shadow-[0_0_10px_rgba(77,159,235,0.2)] transition-all"
           >
             <option value="">Which service would you like to avail?</option>
             <option value="Vision Therapy">Vision Therapy</option>
             <option value="Contact Lens">Contact Lens</option>
             <option value="Low Vision Aid">Low Vision Aid</option>
             <option value="Comprehensive Vision Assessment">Comprehensive Vision Assessment</option>
             <option value="Digital Eyestrain Assessment">Digital Eyestrain Assessment</option>
            </select>
          ),
        }
 
          ].map((field) =>
            field.type === "select" ? (
              <select
                key={field.key}
                className="bg-slate-800/70 border border-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none transition"
                value={form[field.key]}
                onChange={(e) => update(field.key, e.target.value)}
                required
              >
                <option value="">{field.placeholder}</option>
                {field.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                key={field.key}
                type={field.type}
                className="bg-slate-800/70 border border-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none transition"
                placeholder={field.placeholder}
                value={form[field.key]}
                onChange={(e) => update(field.key, e.target.value)}
                required
              />
            )
          )}

          <textarea
            className="md:col-span-2 bg-slate-800/70 border border-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none transition"
            rows="2"
            placeholder="Address"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
          />

          <textarea
            className="md:col-span-2 bg-slate-800/70 border border-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none transition"
            rows="3"
            placeholder="Primary symptoms / reason for visit"
            value={form.symptoms}
            onChange={(e) => update("symptoms", e.target.value)}
          />

          <textarea
            className="md:col-span-2 bg-slate-800/70 border border-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none transition"
            rows="3"
            placeholder="Relevant history / previous prescriptions"
            value={form.history}
            onChange={(e) => update("history", e.target.value)}
          />

          <div className="md:col-span-2 flex justify-center mt-6">
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className={`px-8 py-3 rounded-full font-semibold shadow-lg transition ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:shadow-sky-500/40"
              }`}
            >
              {loading ? "Submitting..." : "Submit Form"}
            </Motion.button>
          </div>
        </form>

        {message && (
          <p className="text-center text-sky-300 mt-6 font-medium">{message}</p>
        )}
      </Motion.div>
    </div>  
  </>
  );
}
