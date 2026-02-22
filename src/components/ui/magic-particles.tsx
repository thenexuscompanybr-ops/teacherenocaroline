
"use client"

import React, { useEffect, useState } from 'react';

export const MagicParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: string; size: string; duration: string }>>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    // Otimização: Reduzindo ainda mais a carga para dispositivos móveis para priorizar a interatividade
    const count = isMobile ? 8 : 25;
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 3 + 2}px`, // Partículas ligeiramente menores para maior elegância
      duration: `${Math.random() * 10 + 12}s`, // Movimento mais lento e suave
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            top: '100%',
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};
