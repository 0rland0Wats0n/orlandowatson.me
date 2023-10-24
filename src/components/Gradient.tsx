import React from 'react';

interface GradientProps {
  from: string;
  to: string;
  height: number;
}

const Gradient = ({ from, to, height }: GradientProps) => {
  return (
    <div 
      className="Gradient"
      style={{
        height: `${height}px`,
        backgroundImage: `linear-gradient(${from}, ${to})`
      }}
    />
  )
}

export default Gradient;