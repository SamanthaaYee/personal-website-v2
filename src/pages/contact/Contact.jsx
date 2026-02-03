import { useState } from 'react';
import './Contact.css';
import stamp1Img from '../../assets/images/stamp1.png';
import stamp2Img from '../../assets/images/stamp2.png';
import stamp3Img from '../../assets/images/stamp3.png';
import arrowImg from '../../assets/images/arrow.png';

import Postcard from '../../components/postcard/Postcard';

function Contact() {
  const [stamps, setStamps] = useState([
    { id: 1, img: stamp1Img, position: null },
    { id: 2, img: stamp2Img, position: null },
    { id: 3, img: stamp3Img, position: null }
  ]);
  
  const [dragging, setDragging] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleDragStart = (e, stamp) => {
    setDragging(stamp.id);
    
    const rect = e.target.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (!dragging) return;

    setStamps(prev => prev.map(stamp => {
      if (stamp.id === dragging) {
        return {
          ...stamp,
          position: {
            x: e.clientX - dragOffset.x,
            y: e.clientY - dragOffset.y + window.scrollY
          }
        };
      }
      return stamp;
    }));

    setDragging(null);
  };

  return (
    <div 
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="contact-page-container">
        <Postcard />
        <div className="stamp-container hide-on-767">
          <div>
            <p>don't forget a stamp!</p>
            <img src={arrowImg} alt="arrow image" draggable={false} style={{ width: "2.5rem" }} className="arrow-icon"/>
          </div>
          <div>
            <div className="stamp-imgs">
              {stamps.filter(s => !s.position).map((stamp, index) => (
                <img 
                  key={stamp.id}
                  src={stamp.img} 
                  alt={`stamp ${stamp.id}`} 
                  className={`stamp stamp-${stamp.id}`}
                  style={{
                    cursor: 'grab',
                    marginTop: index > 0 ? '-2rem' : '0'
                  }}
                  draggable={true}
                  onDragStart={(e) => handleDragStart(e, stamp)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Render dragged stamps at document level */}
      {stamps.filter(s => s.position).map(stamp => (
        <img 
          key={stamp.id}
          src={stamp.img} 
          alt={`stamp ${stamp.id}`} 
          className="stamp"
          style={{
            position: 'absolute',
            left: `${stamp.position.x}px`,
            top: `${stamp.position.y}px`,
            cursor: 'grab',
            zIndex: dragging === stamp.id ? 1000 : 1
          }}
          draggable={true}
          onDragStart={(e) => handleDragStart(e, stamp)}
        />
      ))}
    </div>
  );
}

export default Contact;