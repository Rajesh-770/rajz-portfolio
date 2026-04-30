import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <h2 className="text-3xl font-bold text-gradient-cyan mb-10 flex items-center gap-3">
        <Send className="text-terminalGreen" />
        ./contact_ping.sh
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="neo-card p-6 glow-hover flex flex-col items-center justify-center text-center border-t-2 border-t-dockerBlue"
        >
          <Mail className="text-dockerBlue mb-4" size={32} />
          <h3 className="text-lg font-semibold mb-2 font-terminal">Email</h3>
          <p className="text-gray-300 font-mono text-sm break-all">
            rajannadurai22@gmail.com
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="neo-card p-6 glow-hover flex flex-col items-center justify-center text-center border-t-2 border-t-terminalGreen"
        >
          <Phone className="text-terminalGreen mb-4" size={32} />
          <h3 className="text-lg font-semibold mb-2 font-terminal">Phone</h3>
          <p className="text-gray-300 font-mono text-sm">+91 84380 52599</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="neo-card p-6 glow-hover flex flex-col items-center justify-center text-center border-t-2 border-t-cyberCyan"
        >
          <MapPin className="text-cyberCyan mb-4" size={32} />
          <h3 className="text-lg font-semibold mb-2 font-terminal">Location</h3>
          <p className="text-gray-300 font-mono text-sm">India</p>
        </motion.div>
      </div>

      <div className="flex justify-center gap-4 mt-12">
        <a
          href="https://github.com/Rajesh-770"
          target="_blank"
          className="px-6 py-2 rounded-sm border border-slate-600 bg-slate-800/50 hover:border-terminalGreen hover:text-terminalGreen transition font-terminal text-sm"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rajesh-annadurai-0b2941251"
          target="_blank"
          className="px-6 py-2 rounded-sm border border-slate-600 bg-slate-800/50 hover:border-dockerBlue hover:text-dockerBlue transition font-terminal text-sm"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
