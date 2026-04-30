// src/components/Experience.tsx
import { motion } from "framer-motion";
import { GitCommit, GitPullRequest } from "lucide-react";

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
    company: "IAgami Pvt Ltd",
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
    company: "TechAffinity Consulting Pvt. Ltd",
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
    <section id="experience" className="space-y-8 scroll-mt-28 relative">
      <h2 className="text-3xl font-bold text-gradient-cyan mb-10 flex items-center gap-3">
        <GitPullRequest className="text-terminalGreen" />
        Commit History / Experience
      </h2>

      {/* Pipeline connection line */}
      <div className="absolute left-8 top-24 bottom-0 w-px bg-slate-800 md:left-6 md:-ml-px hidden md:block"></div>

      <div className="space-y-12 relative">
        {experiences.map((exp, idx) => {
          return (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Timeline node */}
              <div className="hidden md:flex absolute left-6 -ml-3 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyberCyan items-center justify-center z-10 mt-6">
                <GitCommit size={14} className="text-cyberCyan" />
              </div>

              {/* Content card */}
              <div className="w-full md:pl-16 text-left">
                <div className="neo-card p-6 md:p-7 glow-hover border-l-4 border-l-terminalGreen md:border-l-0 md:border-t-2 md:border-t-terminalGreen">
                  
                  <div className="flex flex-col gap-1 mb-4">
                    <h3 className="text-xl font-bold text-white font-terminal">{exp.role}</h3>
                    <div className="text-sm text-dockerBlue font-semibold font-terminal">
                      @ {exp.company}
                      {exp.location ? ` • ${exp.location}` : ""}
                    </div>
                    <p className="text-xs text-gray-500 font-mono mt-1 border border-slate-700 inline-block px-2 py-0.5 rounded-sm bg-slate-800/50 w-fit">
                      {exp.period}
                    </p>
                  </div>

                  {exp.highlight && (
                    <p className="text-sm text-cyberCyan mb-4 bg-cyberCyan/10 px-3 py-2 rounded-sm border-l-2 border-cyberCyan">
                      {exp.highlight}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-5 justify-start">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-terminal px-2 py-1 text-xs bg-slate-800/50 border border-slate-700 text-gray-300 rounded-sm hover:border-cyberCyan hover:text-cyberCyan transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-sm text-gray-300 text-left">
                    {exp.points.map((p, pIdx) => (
                      <li key={pIdx} className="flex gap-2 flex-row items-start">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-terminalGreen shrink-0" />
                        <span className="opacity-90">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
