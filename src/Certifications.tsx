import { motion } from "framer-motion";

const certs = [
  {
    name: "AWS Cloud Practitioner",
    org: "Amazon Web Services",
    id: "ID: 5195fb91ea904935b40bdd90d99df4f2",
    year: "2024",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold neon-text mb-10">Certifications</h2>

      <div className="space-y-6">
        {certs.map((c) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="neo-card p-6 md:p-7 glow-hover"
          >
            <h3 className="text-xl font-semibold">{c.name}</h3>
            <p className="text-gray-300">{c.org}</p>
            <p className="text-gray-400 text-sm mt-2">
              {c.id} • {c.year}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
