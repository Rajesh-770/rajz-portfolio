import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "DevOps & Cloud",
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
    skills: ["Python", "Shell Scripting", "Java", "C"],
  },
  {
    title: "Tools",
    skills: ["Postman", "Jenkins", "GitLab CI", "Nginx"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold neon-text mb-10">Skills</h2>

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="neo-card p-6 glow-hover"
          >
            <h3 className="text-xl font-semibold mb-4">{group.title}</h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/20 text-gray-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
