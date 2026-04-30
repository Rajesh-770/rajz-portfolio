// src/Navbar.tsx
import { useState } from "react";

const navItems = [
  { id: "hero", label: "./home" },
  { id: "experience", label: "./experience" },
  { id: "projects", label: "./projects" },
  { id: "skills", label: "./skills" },
  { id: "education", label: "./education" },
  { id: "certifications", label: "./certifications" },
  { id: "contact", label: "./contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("hero");

  const handleClick = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-4 inset-x-0 flex justify-center z-30">
      <div className="neo-card bg-slate-900/80 px-6 py-3 flex flex-wrap items-center justify-center gap-4 rounded-sm shadow-lg border border-slate-700 max-w-[95vw]">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleClick(item.id)}
            className={`relative font-terminal text-xs md:text-sm px-2 pb-1 transition-colors ${
              active === item.id ? "text-terminalGreen font-semibold" : "text-gray-400 hover:text-cyberCyan"
            }`}
          >
            {item.label}
            {active === item.id && (
              <span className="absolute left-0 right-0 -bottom-1 mx-auto h-[2px] w-full bg-terminalGreen shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
