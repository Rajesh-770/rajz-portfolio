import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const skillGroups = [
  {
    title: "DevOps & Cloud",
    id: "cluster-alpha",
    skills: [
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS EC2",
      "AWS S3",
      "CloudWatch",
      "Linux",
      "Git & GitHub",
    ],
  },
  {
    title: "Programming",
    id: "script-engine",
    skills: ["Python", "Shell Scripting", "Java", "C"],
  },
  {
    title: "Tools",
    id: "toolkit-bin",
    skills: ["Postman", "Jenkins", "GitLab CI", "Nginx"],
  },
  {
    title: "Frontend",
    id: "ui-service",
    skills: ["HTML", "CSS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-gradient-cyan mb-10 flex items-center gap-3">
        <Terminal className="text-terminalGreen" /> 
        ~/infrastructure/skills
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="neo-card flex flex-col overflow-hidden"
          >
            {/* Terminal Window Header */}
            <div className="bg-slate-900/80 px-4 py-2 border-b border-slate-700 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-xs font-terminal text-gray-500">
                {group.id}.conf
              </span>
            </div>

            {/* Terminal Window Body */}
            <div className="p-6 flex-grow">
              <h3 className="text-lg font-semibold mb-5 text-gray-200 border-l-2 border-cyberCyan pl-3">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="font-terminal text-sm px-3 py-1 bg-slate-800/50 border border-slate-700 text-gray-300 rounded-sm hover:border-terminalGreen hover:text-terminalGreen transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
