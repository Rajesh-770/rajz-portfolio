import { motion } from "framer-motion";

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="space-y-6"
    >
      <h2 className="text-2xl md:text-3xl font-semibold">
        <span className="bg-gradient-to-r from-neonRed to-neonBlue bg-clip-text text-transparent">
          Highlights
        </span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="neo-card p-6 md:p-7 glow-hover grid gap-6 md:grid-cols-2"
      >
        {/* Tech / Academic */}
        <div>
          <h3 className="text-sm font-semibold text-neonBlue mb-3">
            Tech & Academic
          </h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-neonRed shrink-0" />
              <span>
                <span className="font-medium">
                  AWS Certified Cloud Practitioner
                </span>{" "}
                with hands-on cloud experience in EC2, VPC, IAM, S3,
                CloudWatch and more.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-neonRed shrink-0" />
              <span>
                Completed{" "}
                <span className="font-medium">
                  100+ coding challenges on HackerRank
                </span>
                , strengthening problem-solving skills.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-neonRed shrink-0" />
              <span>
                Built major academic projects in{" "}
                <span className="font-medium">NLP</span> and{" "}
                <span className="font-medium">IoT</span>, including a
                Voice Summarization Bot and a Smart Road Accident
                Prevention System.
              </span>
            </li>
          </ul>
        </div>

        {/* Beyond Tech */}
        <div>
          <h3 className="text-sm font-semibold text-neonBlue mb-3">
            Beyond Tech
          </h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-neonRed shrink-0" />
              <span>
                <span className="font-medium">
                  1st Prize in Singing
                </span>{" "}
                at an inter-college event (2022).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-neonRed shrink-0" />
              <span>
                <span className="font-medium">
                  Runner-up in Zonal Level Handball Tournament (2021)
                </span>{" "}
                and represented school in multiple district-level
                handball competitions.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-neonRed shrink-0" />
              <span>
                Regular{" "}
                <span className="font-medium">runner & fitness enthusiast</span>,
                balancing mental and physical performance.
              </span>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

