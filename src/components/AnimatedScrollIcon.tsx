import React, { useEffect, useState } from 'react';

interface AnimatedScrollIconProps {
  delay: number;
  onClick?: () => void;
}

const AnimatedScrollIcon =  ({delay = 5000, onClick}: AnimatedScrollIconProps) => {
  const [visible, setVisible] = useState(delay <= 0);

  useEffect(() => {
    setTimeout(() => {
      if (!visible) {
        setTimeout(() => setVisible(true), delay);
      }
    })
  }, [delay, visible])

  return (
    <div 
      className="AnimatedScrollIcon" 
      onClick={onClick}
      data-visible={visible}
    >
      <div className="ScrollWheel" />
    </div>
  )
}

export default AnimatedScrollIcon;