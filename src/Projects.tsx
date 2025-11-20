import { motion } from "framer-motion";

const projects = [
  {
    title: "Voice Summarization Bot – NLP",
    role: "Project Lead",
    period: "Academic Project",
    description:
      "Python-based voice bot that converts speech to text, summarizes long content using TextRank NLP algorithm, and produces TTS output.",
    tech: ["Python", "TextRank", "NLP", "Speech-to-Text", "TTS"],
  },
  {
    title: "Smart Road Accident Prevention System – IoT",
    role: "Embedded Developer",
    period: "Academic Project",
    description:
      "IR sensor–based obstacle detection and alert system with buzzer, LCD, and LED indicators for mountain road safety.",
    tech: ["IR Sensor", "LCD", "Embedded C", "Microcontroller", "Buzzer"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold neon-text mb-10">Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="neo-card p-5 md:p-6 glow-hover"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-400">{p.role}</p>
            <p className="text-xs text-gray-500">{p.period}</p>

            <p className="mt-3 text-gray-300">{p.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/20 text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
