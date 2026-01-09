import React, { useRef, useEffect } from 'react';
import './Polaroid.css';
import paperclipImg from '/src/assets/images/paperclip.png';
import starImg from '/src/assets/images/3d-star.webp';

function Polaroid({ imageSrc, caption, height, paperclip=false, star=false, tilt=false, wiggle=true }) {
    const polaroidRef = useRef(null);

    useEffect(() => {
        if (polaroidRef.current) {
            if (tilt) {
                const polaroidRotateDeg = (Math.random() * 4 - 2) + 'deg';
                polaroidRef.current.style.setProperty('--polaroid-rotate', polaroidRotateDeg);
            } else {
                polaroidRef.current.style.setProperty('--polaroid-rotate', '0deg');
            }
            if (!caption) {
                polaroidRef.current.style.setProperty('--polaroid-padding', '0.75rem 0.75rem 3rem 0.75rem');
            }
            const randomPosition = (Math.random() * 80 + 10) + '%';
            polaroidRef.current.style.setProperty('--random-position', randomPosition);
        }
    }, []);

    return (
        <div ref={polaroidRef} className={`polaroid ${wiggle ? 'wiggle-animation' : ''}`}>
            <div className="polaroid-content">
                <img src={imageSrc} alt={caption} className="polaroid-image" style={{ height: height }}/>
                {caption && <div className="polaroid-caption"><h2>{caption}</h2></div>}
            </div>
            {paperclip && <img src={paperclipImg} alt="paperclip" className="paperclip"/>}
            {star && <img src={starImg} alt="star" className="star"/>}
        </div>
   );
}

export default Polaroid;