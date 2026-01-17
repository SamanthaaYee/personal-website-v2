import './HoverableIcon.css';
import React, { useRef, useEffect } from 'react';

function HoverableIcon({ imgSrc, altText, emoji, text, height = '8rem' }) {
    const [isHovering, setIsHovering] = React.useState(false);
    const hoverableIconRef = useRef(null);

    useEffect(() => {
        if (hoverableIconRef.current) {
            const hoverRotateDeg = (Math.random() * 16 - 8) + 'deg';
            hoverableIconRef.current.style.setProperty('--hoverable-icon-rotate', hoverRotateDeg);
        }
    }, []);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div 
            ref={hoverableIconRef}
            className="hoverable-icon-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={imgSrc} alt={altText} className="hoverable-icon" draggable="false" style={{ height }} />
            <div className={`show-on-hover hover-text ${isHovering ? 'visible' : ''}`}>
                {emoji && <span className="emoji">{emoji}</span>}
                {text && <span className="text">{text}</span>}
            </div>
        </div>
    )
}

export default HoverableIcon;