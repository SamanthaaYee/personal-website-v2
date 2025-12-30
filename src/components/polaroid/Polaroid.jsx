import React, { useRef, useEffect } from 'react';
import './Polaroid.css';

function Polaroid({ imageSrc, caption, height }) {
    const polaroidRef = useRef(null);

    useEffect(() => {
        if (polaroidRef.current) {
            const polaroidRotateDeg = (Math.random() * 4 - 2) + 'deg';
            polaroidRef.current.style.setProperty('--polaroid-rotate', polaroidRotateDeg);
        }
    }, []);

    return (
        <div ref={polaroidRef} className="polaroid">
            <div className="polaroid-content">
                <img src={imageSrc} alt={caption} className="polaroid-image" style={{ height: height }}/>
                <div className="polaroid-caption"><h2>{caption}</h2></div>
            </div>
        </div>
   );
}

export default Polaroid;