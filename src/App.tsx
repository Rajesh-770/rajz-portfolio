
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
import { Terminal, Cloud, Server, Database } from "lucide-react";

export default function App() {
  const [typedText, setTypedText] = useState("");
  const fullText = "whoami";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen neo-bg text-white relative overflow-hidden font-sans">
      {/* Background FX */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <BackgroundParticles />
        <div className="floating-orb orb-cyan" />
        <div className="floating-orb orb-blue" />
      </div>

      {/* Global Foreground FX (Custom Cursor) */}
      <div className="pointer-events-none fixed inset-0 z-50">
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
          className="neo-card p-8 md:p-12 glow-hover overflow-hidden relative"
        >
          {/* Terminal Header */}
          <div className="absolute top-0 left-0 w-full bg-slate-900/80 px-4 py-2 flex items-center gap-2 border-b border-cyberCyan/20">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="ml-2 text-xs font-terminal text-gray-400">rajesh@devops-portfolio:~</span>
          </div>

          <div className="mt-8 flex flex-col items-start text-left">
            <div className="font-terminal text-terminalGreen text-lg mb-4 flex items-center">
              <span className="mr-2 text-cyberCyan">➜</span>
              <span className="mr-2 text-blue-400">~</span>
              <span className="opacity-90">{typedText}</span>
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-5 bg-terminalGreen ml-1 inline-block align-middle"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-2">
              Hi, I'm <span className="text-gradient-cyan">Rajesh A</span>
            </h1>

            <div className="flex flex-wrap gap-4 mb-6">
              <span className="flex items-center gap-2 px-3 py-1 rounded-sm bg-blue-500/10 text-dockerBlue border border-dockerBlue/30 text-sm font-terminal">
                <Cloud size={14} /> Cloud Architecture
              </span>
              <span className="flex items-center gap-2 px-3 py-1 rounded-sm bg-green-500/10 text-terminalGreen border border-terminalGreen/30 text-sm font-terminal">
                <Terminal size={14} /> CI/CD Pipelines
              </span>
              <span className="flex items-center gap-2 px-3 py-1 rounded-sm bg-cyan-500/10 text-cyberCyan border border-cyberCyan/30 text-sm font-terminal">
                <Server size={14} /> Infrastructure as Code
              </span>
            </div>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl border-l-2 border-slate-700 pl-4 font-mono text-sm opacity-90">
              DevOps Engineer • AWS Cloud Practitioner • Automation Enthusiast
              <br /><br />
              I build scalable cloud systems, automate deployments, and craft smooth CI/CD pipelines. Transforming complex infrastructure into resilient, managed code.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:rajannadurai22@gmail.com"
                className="px-8 py-3 font-terminal text-sm font-semibold text-black bg-terminalGreen shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 transition transform rounded-sm"
              >
                ./contact_me.sh
              </a>

              <a
                href="https://github.com/Rajesh-770"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 font-terminal text-sm border border-cyberCyan/40 text-cyberCyan hover:bg-cyberCyan/10 transition rounded-sm flex items-center gap-2"
              >
                git checkout
              </a>

              <a
                href="https://www.linkedin.com/in/rajesh-annadurai-0b2941251"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 font-terminal text-sm border border-dockerBlue/40 text-dockerBlue hover:bg-dockerBlue/10 transition rounded-sm"
              >
                curl -L linked.in
              </a>
            </div>
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
