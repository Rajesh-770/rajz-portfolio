import { motion } from "framer-motion";

const data = [
  {
    degree: "BE – Computer Science & Engineering",
    college: "K. Ramakrishnan College of Engineering",
    year: "2021 – 2025",
    score: "CGPA: 7.8",
  },
  {
    degree: "Higher Secondary (HSC)",
    college: "st.George Higher Secondary School",
    year: "2019 – 2021",
    score: "84%",
  },
  {
    degree: "Secondary School (SSLC)",
    college: "st.George Higher Secondary School",
    year: "2018 – 2019",
    score: "74%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold neon-text mb-10">Education</h2>

      <div className="space-y-8">
        {data.map((e) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="neo-card p-6 md:p-7 glow-hover"
          >
            <h3 className="text-xl font-semibold">{e.degree}</h3>
            <p className="text-gray-300">{e.college}</p>
            <p className="text-gray-400 text-sm mt-2">
              {e.year} • {e.score}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
