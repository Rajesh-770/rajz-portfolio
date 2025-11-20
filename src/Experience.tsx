import { motion } from "framer-motion";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
  highlight?: string;
  skills: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "DevOps Intern & Python Developer",
    company: "iAgami technologies Pvt Ltd",
    period: "Oct 2025 – Present",
    points: [
      "Working on DevOps automation and CI/CD workflows.",
      "Building Python automation tools to reduce manual operational work.",
      "Improving deployment pipelines and cloud workflow efficiency.",
      "Collaborating with engineering teams on real-time production tasks.",
    ],
    highlight:
      "Current internship — combining DevOps + Python in real-world environments.",
    skills: ["Python", "CI/CD", "Docker", "AWS", "Automation", "Git", "Linux"],
  },
  {
    role: "DevOps Intern",
    company: "TechAffinity Consulting Pvt. Ltd (TechAffinity Inc)",
    period: "Jun 2025 – Sep 2025",
    location: "Bengaluru, India",
    points: [
      "Built and maintained CI/CD pipelines using Jenkins and GitLab CI.",
      "Automated cloud infrastructure using Terraform and Ansible.",
      "Containerized applications with Docker and deployed services to Kubernetes.",
      "Created monitoring dashboards using AWS CloudWatch + logs optimization.",
      "Wrote Python and Shell scripts for deployment automation.",
    ],
    highlight: "Hands-on DevOps environment — CI/CD, Docker, Terraform, AWS.",
    skills: [
      "Jenkins",
      "GitLab CI",
      "Docker",
      "Terraform",
      "Ansible",
      "AWS",
      "Kubernetes",
      "Python",
      "Shell",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-6 relative z-10">
      <h2 className="text-2xl md:text-3xl font-semibold neon-text">Experience</h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <motion.div
            key={exp.company + exp.role}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="neo-card p-6 md:p-7 glow-hover"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-300">
                  {exp.company}
                  {exp.location ? ` • ${exp.location}` : ""}
                </p>
              </div>
              <p className="text-sm text-gray-400">{exp.period}</p>
            </div>

            {exp.highlight && (
              <p className="text-sm text-neonBlue mb-3">{exp.highlight}</p>
            )}

            {/* ⭐ Glowing skill pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="glow-pill text-xs font-medium text-gray-100"
                >
                  {skill}
                </span>
              ))}
            </div>

            <ul className="space-y-1 text-sm text-gray-300">
              {exp.points.map((p, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full glow-dot shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
