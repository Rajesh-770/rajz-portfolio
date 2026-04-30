import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Activity } from "lucide-react";

const projects = [
  {
    title: "End-to-End CI/CD Pipeline Architecture",
    role: "DevOps Engineer",
    period: "Infrastructure Project",
    description:
      "Architected and implemented a fully automated CI/CD pipeline. Engineered Docker image builds, configured secure pushing to AWS ECR, and orchestrated seamless application deployments to Kubernetes clusters. Ensured high availability and monitored deployment health using kubectl and Jenkins pipeline analytics.",
    tech: ["Jenkins", "Docker", "AWS ECR", "Kubernetes", "Minikube"],
    status: "healthy"
  },
  {
    title: "BIOART – Scalable Infrastructure Deployment",
    role: "DevOps Engineer",
    period: "Enterprise Project",
    description:
      "Led the deployment lifecycle for the BIOART application in cloud environments. Containerized complex backend services using Docker and orchestrated them efficiently on Kubernetes. Optimized CI/CD workflows and implemented robust post-deployment monitoring to guarantee service reliability.",
    tech: ["Docker", "Kubernetes", "AWS ECR", "Jenkins"],
    status: "healthy"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-gradient-cyan mb-10 flex items-center gap-3">
        <FolderGit2 className="text-terminalGreen" />
        /home/projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="neo-card p-5 md:p-6 glow-hover flex flex-col h-full relative overflow-hidden"
          >
            {/* Status Indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                {p.status === "healthy" && (
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-terminalGreen shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
                )}
                {p.status === "archived" && (
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gray-500"></span>
                )}
              </span>
              <span className="text-[10px] uppercase font-terminal tracking-wider text-gray-500">
                {p.status}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-2 text-cyberCyan">
              <Activity size={18} />
              <h3 className="text-xl font-bold font-terminal text-white">{p.title}</h3>
            </div>
            
            <div className="flex justify-between items-center mb-4 border-b border-slate-700/50 pb-2">
              <p className="text-sm font-terminal text-terminalGreen">Role: {p.role}</p>
              <p className="text-xs text-gray-500 font-mono bg-slate-800/80 px-2 py-0.5 rounded-sm">{p.period}</p>
            </div>

            <p className="mt-2 text-gray-300 text-sm leading-relaxed flex-grow border-l-2 border-slate-700 pl-3">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-sm text-[11px] font-terminal bg-slate-800/80 border border-slate-700 text-gray-300"
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
