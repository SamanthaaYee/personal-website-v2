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

  return (
    <div className="sticky" style={{ "--sticky-color": STICKY_COLORS[color] }} ref={stickyRef}>
      <div className="sticky-content">
        {children}
      </div>
    </div>
  );
}

export default StickyNote;