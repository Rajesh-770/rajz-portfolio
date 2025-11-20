import React, { useMemo } from "react";

type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
};

const starColors = [
  "rgba(248, 250, 252, 0.95)", // almost white
  "rgba(56, 189, 248, 0.95)",  // cyan
  "rgba(251, 113, 133, 0.95)", // pink
  "rgba(167, 139, 250, 0.95)", // violet
];

const BackgroundParticles: React.FC = () => {
  const stars = useMemo<Star[]>(() => {
    const count = 140;
    const arr: Star[] = [];

    for (let i = 0; i < count; i++) {
      arr.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 1.8 + 0.6, // 0.6px – 2.4px
        delay: Math.random() * 8,
        duration: 4 + Math.random() * 6,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }
    return arr;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="cosmic-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
