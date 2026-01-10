import React, { useRef, useEffect } from 'react';
import './Polaroid.css';
import paperclipImg from '../../assets/images/paperclip.png';
import starImg from '../../assets/images/3d-star.webp';

function Polaroid({ imgSrc, altText, caption, height, paperclip=false, star=false, tilt=false, rotate=true }) {
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

    const handleMouseEnter = () => {
        if (polaroidRef.current) {
            const hoverRotate = Math.random() > 0.5 ? '2deg' : '-2deg';
            polaroidRef.current.style.setProperty('--hover-rotate', hoverRotate);
        }
    };

    const handleMouseLeave = () => {
        if (polaroidRef.current) {
            polaroidRef.current.style.setProperty('--hover-rotate', '0deg');
        }
    };

    return (
        <div ref={polaroidRef} className={`polaroid ${rotate ? 'rotate-animation' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="polaroid-content">
                <img src={imgSrc} alt={altText} className="polaroid-image" style={{ height: height }}/>
                {caption && <div className="polaroid-caption"><h2>{caption}</h2></div>}
            </div>
            {paperclip && <img src={paperclipImg} alt="paperclip" className="paperclip" draggable="false" />}
            {star && <img src={starImg} alt="star" className="star" draggable="false" />}
        </div>
   );
}

export default Polaroid;