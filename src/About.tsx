import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="space-y-6"
    >
      <h2 className="text-2xl md:text-3xl font-semibold">
        <span className="bg-gradient-to-r from-neonRed to-neonBlue bg-clip-text text-transparent">
          About Me
        </span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="neo-card p-6 md:p-7 glow-hover relative overflow-hidden"
      >
        <p className="text-gray-200 leading-relaxed text-sm md:text-base">
          I’m <span className="font-semibold">Rajesh A</span>, a{" "}
          <span className="text-neonBlue font-medium">
            DevOps Engineer & Python Developer
          </span>{" "}
          with hands-on experience in{" "}
          <span className="font-medium text-neonBlue">
            CI/CD pipelines, AWS cloud, Docker, Kubernetes, and automation
          </span>
          . I enjoy solving real-world problems by automating workflows,
          improving deployment reliability, and collaborating with teams in
          fast-paced environments.
        </p>

        <p className="text-gray-300 mt-4 text-sm md:text-base">
          Currently, I’m doing my{" "}
          <span className="font-medium text-neonRed">
            DevOps Intern & Python Developer
          </span>{" "}
          role at <span className="font-semibold">IAgami Pvt Ltd</span>, while
          also strengthening my foundations in cloud infrastructure,
          observability, and scripting.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm md:text-base">
          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-2">
              Languages
            </h3>
            <p className="text-gray-200">
              English, Tamil, Hindi, Malayalam
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-2">
              Interests
            </h3>
            <p className="text-gray-200">
              Gamer 🎮 · Running & Fitness 🏃‍♂️ (regular 5 km, PB: 18 km) · Music 🎧
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-2">
              Currently Focused On
            </h3>
            <p className="text-gray-200">
              Cloud-native DevOps, automation with Python, and scaling CI/CD pipelines.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
