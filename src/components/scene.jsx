import React, { useRef, useState } from 'react';
import './scene.css';

const Scene = ({ modelSrc, iosSrc, hotspots }) => {
  const modelRef = useRef(null);

  const changeColor = (color) => {
    const [material] = modelRef.current.model.materials;
    material.pbrMetallicRoughness.setBaseColorFactor(color);
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <model-viewer
        ref={modelRef}
        src={modelSrc}
        ios-src={iosSrc}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        touch-action="pan-y"
        shadow-intensity="1"
        style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0' }}
      >
        {hotspots && hotspots.map((spot, index) => (
          <button
            key={index}
            slot={`hotspot-${index}`}
            data-position={spot.position}
            data-normal={spot.normal}
            onClick={() => alert(spot.info)}
            style={{ padding: '5px', borderRadius: '50%', border: 'none', backgroundColor: 'red', color: 'white' }}
          >
            {index + 1}
          </button>
        ))}

        <button slot="ar-button" className="ar-btn">
          👋 جرب العربية في حتتك
        </button>
      </model-viewer>

      <div className="controls">
        <button onClick={() => changeColor([1, 0, 0, 1])}>أحمر</button>
        <button onClick={() => changeColor([0, 0, 1, 1])}>أزرق</button>
      </div>
    </div>
  );
};

export default Scene;