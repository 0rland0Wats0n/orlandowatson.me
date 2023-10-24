import React from 'react';

interface AnimatedScrollIconProps {
  visible?: boolean;
  onClick?: () => void;
}

const AnimatedScrollIcon =  ({visible, onClick}: AnimatedScrollIconProps) => {
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const height = window.innerHeight;
  //     const y = window.scrollY;
  //     if (y <= height*0.5) {
  //       setScrollY(y);
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // })

  return (
    <div 
      className="AnimatedScrollIcon" 
      onClick={onClick}
      data-visible={visible}
    >
      <div 
        className="ScrollWheel" 
        style={{ height: `8px` }}
        data-should-animate={true}
      />
    </div>
  )
}

export default AnimatedScrollIcon;