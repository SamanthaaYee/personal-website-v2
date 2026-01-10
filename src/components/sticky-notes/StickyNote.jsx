import React, { useRef, useEffect } from 'react';
import './StickyNote.css';

const STICKY_COLORS = {
  yellow: "var(--sticky-yellow)",
  pink: "var(--sticky-pink)",
  blue: "var(--sticky-blue)",
};

function StickyNote({ color = "yellow", children }) {
  const stickyRef = useRef(null);
  
      useEffect(() => {
          if (stickyRef.current) {
              const stickyRotateDeg = (Math.random() * 4 - 2) + 'deg';
              stickyRef.current.style.setProperty('--sticky-rotate', stickyRotateDeg);
          }
      }, []);

      const handleMouseEnter = () => {
          if (stickyRef.current) {
              const hoverRotate = Math.random() > 0.5 ? '2deg' : '-2deg';
              stickyRef.current.style.setProperty('--hover-rotate', hoverRotate);
          }
      };

      const handleMouseLeave = () => {
          if (stickyRef.current) {
              stickyRef.current.style.setProperty('--hover-rotate', '0deg');
          }
      };

  return (
    <div className="sticky rotate-animation" style={{ "--sticky-color": STICKY_COLORS[color] }} ref={stickyRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="sticky-content">
        {children}
      </div>
    </div>
  );
}

export default StickyNote;