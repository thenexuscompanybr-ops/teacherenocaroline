
import React from 'react';

/**
 * @fileOverview O Ícone da Coruja Sagrada - O símbolo máximo de autoridade e sabedoria da Safe & Sound Academy.
 */
export const SacredOwl = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Corpo Heráldico */}
    <path 
      d="M20 35 L10 15 Q30 25 50 25 Q70 25 90 15 L80 35 Q95 50 85 80 Q50 90 15 80 Q5 50 20 35 Z" 
      fill="none" 
      strokeWidth="4" 
    />
    {/* Olhos da Sabedoria */}
    <circle cx="35" cy="55" r="12" strokeWidth="3" />
    <circle cx="35" cy="55" r="4" fill="currentColor" />
    <circle cx="65" cy="55" r="12" strokeWidth="3" />
    <circle cx="65" cy="55" r="4" fill="currentColor" />
    {/* O Bico Sagrado */}
    <path d="M50 58 L46 70 L54 70 Z" fill="currentColor" stroke="none" />
    {/* Penas Ornamentais */}
    <path d="M30 80 Q50 75 70 80" strokeWidth="2" opacity="0.5" />
    <path d="M35 84 Q50 80 65 84" strokeWidth="2" opacity="0.3" />
  </svg>
);
