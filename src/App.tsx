
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Experience from "./components/Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Footer from "./Footer";
import BackgroundParticles from "./Particles";
import CursorGlow from "./CursorGlow";

export default function App() {
  return (
    <div className="min-h-screen neo-bg text-white relative overflow-hidden">
      {/* Background FX (no blocking of clicks) */}
      <div className="pointer-events-none absolute inset-0">
        <BackgroundParticles />
        <CursorGlow />
      </div>

      {/* Navbar on top */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20 relative z-10">
        {/* HERO SECTION */}
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="neo-card p-8 md:p-12 text-center glow-hover overflow-hidden"
        >
          {/* soft lights inside hero only */}
          <div className="floating-light light-red" />
          <div className="floating-light light-blue" />

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-neonRed to-neonBlue bg-clip-text text-transparent">
              Rajesh A
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            DevOps Engineer • AWS Cloud Practitioner • Automation Enthusiast
            <br />
            I build scalable cloud systems, automate deployments, and craft
            smooth CI/CD pipelines.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:rajannadurai22@gmail.com"
              className="px-8 py-3 rounded-full bg-neonRed text-black font-semibold shadow-lg shadow-pink-500/40 hover:shadow-pink-500/70 hover:-translate-y-0.5 transition transform"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/Rajesh-770"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full border border-white/25 text-white/90 hover:text-white glow-pill bg-transparent"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rajesh-annadurai-0b2941251"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full border border-white/25 text-white/90 hover:text-white glow-pill bg-transparent"
            >
              LinkedIn
            </a>
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <Experience />

        {/* PROJECTS */}
        <Projects />

        {/* SKILLS */}
        <Skills />

        {/* EDUCATION */}
        <Education />

        {/* CERTIFICATIONS */}
        <Certifications />

        {/* CONTACT */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
