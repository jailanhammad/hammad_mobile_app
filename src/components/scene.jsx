import React, { useEffect, useMemo, useRef, useState } from "react";
import "./scene.css";
import { NavLink } from "react-router-dom"; 

import car from "../assets/ar/car.glb";
import carr from "../assets/ar/car.usdz";


const Scene = () => {
  const modelViewerRef = useRef(null);
  const [isModelReady, setIsModelReady] = useState(false);
  const [selectedColor, setSelectedColor] = useState({
    name: "Black",
    hex: "#000000",
    gl: [0, 0, 0, 1],
  });

  const availableColors = useMemo(() => [
    { name: "Obsidian Black", hex: "#0A0A0A", gl: [0.01, 0.01, 0.01, 1] },
    { name: "Candy Red", hex: "#8B0000", gl: [0.5, 0.0, 0.0, 1] },
    { name: "Metallic Blue", hex: "#001F3F", gl: [0.0, 0.1, 0.3, 1] },
    { name: "Pearl White", hex: "#F5F5F5", gl: [0.95, 0.95, 0.95, 1] },
    { name: "Silver Arrow", hex: "#C0C0C0", gl: [0.75, 0.75, 0.75, 1] }
  ], []);

  useEffect(() => {
    const mv = modelViewerRef.current;
    if (!mv) return;
    const onLoad = () => setIsModelReady(true);
    mv.addEventListener("load", onLoad);
    return () => mv.removeEventListener("load", onLoad);
  }, []);

  const applyCarPaintColor = (color) => {
    setSelectedColor(color);
    const mv = modelViewerRef.current;
    if (!mv || !mv.model) return;

    mv.model?.materials?.forEach((material) => {
      const name = material.name.toLowerCase();
      if (name.includes("paint") || name.includes("body") || name.includes("car_color")) {
        material.pbrMetallicRoughness.setBaseColorFactor(color.gl);
        material.pbrMetallicRoughness.setRoughnessFactor(0.3);
        material.pbrMetallicRoughness.setMetallicFactor(1.0);
      }
    });
  };

  return (
    <div className="scene-container">

<NavLink to="/ar_view" className="nav-item" end>
<button className="scene-exit-btn" onClick={() => window.history.back()}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
    {/* <span>Back</span> */}
</button>
</NavLink>

      <model-viewer

  
 
        tone-mapping="neutral" 
        poster="poster.webp" 

        ref={modelViewerRef}
        src={car}
        ios-src={carr} 
        ar
        ar-modes="webxr scene-viewer quick-look"
        ar-placement="floor"
        ar-scale="auto"
        // style={{ width: '100%', height: '100vh', backgroundColor: '#1a1a1a' }}
        scale="3000 3000 3000"
        // scale="200 200 200" 
        shadow-intensity="2"
        exposure="1.5"
        environment-image="neutral"
        camera-controls
        auto-rotate
        camera-orbit="0deg 75deg 3m"
        className="scene-viewer"
      >
        <button slot="ar-button" className="scene-ar-button">
          View in Your Space
        </button>

        <div className="scene-overlay">
          <div className="scene-configurator-card">
            <div className="scene-configurator-header">
              <p className="scene-configurator-title">Mercedes Configurator</p>
              <p className={`scene-configurator-status ${isModelReady ? "is-ready" : "is-loading"}`}>
                {isModelReady ? "Ready" : "Loading..."}
              </p>
            </div>

            <div className="scene-swatches">
              {availableColors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => applyCarPaintColor(color)}
                  className={`scene-swatch ${selectedColor.name === color.name ? "active" : ""}`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
            <p className="selected-color-name" style={{color: '#fff', fontSize: '12px', marginTop: '8px', textAlign: 'center'}}>
              {selectedColor.name}
            </p>
          </div>
        </div>
      </model-viewer>
    </div>
  );
};

export default Scene;