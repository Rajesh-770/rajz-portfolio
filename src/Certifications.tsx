import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const certs = [
  {
    name: "AWS Cloud Practitioner",
    org: "Amazon Web Services",
    id: "ID: 5195fb91ea904935b40bdd90d99df4f2",
    year: "2024",
    status: "verified",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <h2 className="text-3xl font-bold text-gradient-cyan mb-10 flex items-center gap-3">
        <Award className="text-terminalGreen" />
        cat /usr/certs/verified
      </h2>

      <div className="space-y-6">
        {certs.map((c) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="neo-card p-6 md:p-7 glow-hover flex flex-col md:flex-row justify-between items-start md:items-center border-l-4 border-l-awsOrange"
          >
            <div>
              <h3 className="text-xl font-bold font-terminal flex items-center gap-2">
                {c.name}
                {c.status === "verified" && (
                  <CheckCircle size={16} className="text-terminalGreen" />
                )}
              </h3>
              <p className="text-gray-300 font-semibold text-sm mt-1">{c.org}</p>
              <p className="text-gray-500 font-mono text-xs mt-3">
                {c.id}
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 px-3 py-1 bg-awsOrange/10 border border-awsOrange/30 text-awsOrange rounded-sm font-mono text-sm">
              Issued: {c.year}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
