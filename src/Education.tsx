import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const data = [
  {
    degree: "BE – Computer Science & Engineering",
    college: "K. Ramakrishnan College of Engineering",
    year: "2021 – 2025",
    score: "CGPA: 7.1",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <h2 className="text-3xl font-bold text-gradient-cyan mb-10 flex items-center gap-3">
        <BookOpen className="text-terminalGreen" />
        ~/education_logs
      </h2>

      <div className="space-y-8">
        {data.map((e) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="neo-card p-6 md:p-7 glow-hover border-l-4 border-l-dockerBlue"
          >
            <h3 className="text-xl font-bold font-terminal">{e.degree}</h3>
            <p className="text-gray-300 font-semibold text-sm mt-1">{e.college}</p>
            <p className="text-gray-500 font-mono text-xs mt-3 border border-slate-700 inline-block px-2 py-1 bg-slate-800/50 rounded-sm">
              {e.year} | <span className="text-cyberCyan">{e.score}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
