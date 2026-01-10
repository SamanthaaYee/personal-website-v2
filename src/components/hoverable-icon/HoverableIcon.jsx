import './HoverableIcon.css';
import React, { useRef, useEffect } from 'react';

function HoverableIcon({ icons }) {
    const hoverableIconRef = useRef(null);

    useEffect(() => {
        if (hoverableIconRef.current) {
            const hoverRotateDeg = (Math.random() * 16 - 8) + 'deg';
            hoverableIconRef.current.style.setProperty('--hoverable-icon-rotate', hoverRotateDeg);
        }
    }, []);
    // const handleMouseEnter = () => {
    //     if (hoverableIconRef.current) {
    //         document.documentElement.style.setProperty('--hover-text', `"${text}"`);
    //     }
    // };

    return (
        <div ref={hoverableIconRef} className="hoverable-icon-container">
            {icons.map((icon, index) => (
                <div key={index} className="icon-group">
                    <img src={icon.imgSrc} alt={icon.altText} className="hoverable-icon" draggable="false" style={{ height: "10rem" }} />
                    <div className="show-on-hover hover-text">{icon.text}</div>
                </div>
            ))}
        </div>
    )
}

export default HoverableIcon;