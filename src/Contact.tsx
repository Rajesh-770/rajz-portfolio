import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold neon-text mb-10 text-center">
        Contact Me
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="neo-card p-6 glow-hover text-center"
        >
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-gray-300 break-all">
            rajannadurai22@gmail.com
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="neo-card p-6 glow-hover text-center"
        >
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p className="text-gray-300">+91 84380 52599</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="neo-card p-6 glow-hover text-center"
        >
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="text-gray-300">India</p>
        </motion.div>
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <a
          href="https://github.com/Rajesh-770"
          target="_blank"
          className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rajesh-annadurai-0b2941251"
          target="_blank"
          className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
