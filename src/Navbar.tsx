// src/Navbar.tsx
import { useState } from "react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
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
      <div className="neo-card bg-black/70 px-6 py-3 flex items-center gap-6 rounded-full shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleClick(item.id)}
            className={`relative text-sm md:text-base px-1 pb-1 transition-colors ${
              active === item.id ? "text-white" : "text-gray-300"
            }`}
          >
            {item.label}
            {active === item.id && (
              <span className="absolute left-0 right-0 -bottom-1 mx-auto h-[2px] w-10 bg-gradient-to-r from-neonRed to-neonBlue rounded-full" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
