import React, { useRef, useState, useEffect } from 'react';
import './scene.css';
import car from '../assets/ar/2016_mercedes-benz_gle63_amg_coupe (1).glb';

const Scene = () => {
  const modelViewerRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState({ name: 'Black', hex: '#000000', gl: [0, 0, 0, 1] });

  const availableColors = [
    { name: 'Black', hex: '#000000', gl: [0, 0, 0, 1] },
    { name: 'Red', hex: '#D32F2F', gl: [0.83, 0.18, 0.18, 1] },
    { name: 'Blue', hex: '#1976D2', gl: [0.1, 0.46, 0.82, 1] },
    { name: 'White', hex: '#FFFFFF', gl: [1, 1, 1, 1] }
  ];

  useEffect(() => {
    if (modelViewerRef.current) {
      // ده اللي هيفتح الكاميرا فوراً أول ما الصفحة تفتح
      modelViewerRef.current.activateAR();
    }
  }, []);

  const changeCarColor = (color) => {
    setSelectedColor(color);
    const mv = modelViewerRef.current;
    
    if (mv && mv.model) {
      // بيلف على كل حتة في العربية ويغير لونها لو هي "دهان"
      mv.model.materials.forEach((material) => {
        // بنغير لون أي خامة اسمها فيها "paint" أو "body" أو "car"
        if (material.name.toLowerCase().includes('paint') || 
            material.name.toLowerCase().includes('body')) {
          material.pbrMetallicRoughness.setBaseColorFactor(color.gl);
        }
      });
    }
  
  };

  return (
    <div className="ar-container-full">
      <model-viewer
        ref={modelViewerRef}
        src={car} // تأكدي إن الملف هنا وبنفس الاسم
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        shadow-intensity="1"
        style={{ width: '100%', height: '100%', backgroundColor: '#1a1a1a' }} // خلفية غامقة مؤقتاً
      >
        <div className="ar-controls-bottom">
          <div className="color-configurator">
            <h3>Exterior Color</h3>
            <div className="color-swatches-grid">
              {availableColors.map((color) => (
                <button
                  key={color.name}
                  className={`color-swatch-btn ${selectedColor.name === color.name ? 'active' : ''}`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => changeCarColor(color)}
                />
              ))}
            </div>
            <div className="selected-color-name">Color: {selectedColor.name}</div>
          </div>

          <div className="action-buttons-bar">
            <button className="hm-action-btn">
              Dimensions (1:1)
            </button>
            <button className="hm-action-btn main-action">
              Start AR View
            </button>
          </div>
        </div>
      </model-viewer>
    </div>
  );
};

export default Scene;