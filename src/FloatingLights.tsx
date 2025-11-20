// src/FloatingLights.tsx
export default function FloatingLights() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="floating-light light-red"></div>
      <div className="floating-light light-blue"></div>
    </div>
  );
}
