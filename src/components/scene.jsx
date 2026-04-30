import React, { useEffect, useMemo, useRef, useState } from "react";
import "./scene.css";
import { NavLink } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';

import car from "../assets/ar/newcar.glb";
import carr from "../assets/ar/newcar.usdz";
import back from "../assets/ar/back.svg";
import engineSound from "../assets/engine.mp3"; 

const Scene = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  
  const audioRef = useRef(null);
  const [isEngineOn, setIsEngineOn] = useState(false);
  const modelViewerRef = useRef(null);
  const [isModelReady, setIsModelReady] = useState(false);
  
  const availableColors = useMemo(() => [
    { name: isAr ? "أسود أوبسيديان" : "Obsidian Black", hex: "#0A0A0A", gl: [0.01, 0.01, 0.01, 1] },
    { name: isAr ? "أحمر كاندي" : "Candy Red", hex: "#8B0000", gl: [0.5, 0.0, 0.0, 1] },
    { name: isAr ? "أزرق ميتاليك" : "Metallic Blue", hex: "#001F3F", gl: [0.01, 0.1, 0.3, 1] },
    { name: isAr ? "أبيض لؤلؤي" : "Pearl White", hex: "#F5F5F5", gl: [0.95, 0.95, 0.95, 1] },
    { name: isAr ? "رمادي جرافيت" : "Gunmetal Grey", hex: "#2C2C2C", gl: [0.17, 0.17, 0.17, 1] }  
  ], [isAr]);

  const [selectedColor, setSelectedColor] = useState(availableColors[0]);

  useEffect(() => {
    audioRef.current = new Audio(engineSound);
    const audio = audioRef.current;
    const handleEnded = () => setIsEngineOn(false);
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  const toggleEngine = () => {
    if (!audioRef.current) return;
    if (isEngineOn) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; 
    } else {
      audioRef.current.play().catch(err => console.log("Audio failed:", err));
    }
    setIsEngineOn(!isEngineOn);
  };

  useEffect(() => {
    const mv = modelViewerRef.current;
    const onLoad = () => setIsModelReady(true);
    mv?.addEventListener("load", onLoad);
    return () => mv?.removeEventListener("load", onLoad);
  }, []);

  const applyCarPaintColor = (color) => {
    setSelectedColor(color);
    const mv = modelViewerRef.current;
    if (!mv?.model) return;
    mv.model.materials.forEach((material) => {
      const name = material.name.toLowerCase();
      if (name.includes("paint") || name.includes("body") || name.includes("car_color")) {
        material.pbrMetallicRoughness.setBaseColorFactor(color.gl);
      }
    });
  };

  return (
    <div className={`scene-container ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
        <div className="two-buttons">
          <NavLink to="/ar_view">
            <button className="scene-exit-btn">
              <img src={back} alt="back" style={{ transform: isAr ? 'rotate(180deg)' : 'none' }} />
            </button>
          </NavLink>

          <button
            onClick={toggleEngine}
            className={`engine-start-button ${isEngineOn ? "engine-active" : ""}`}
          >
            <div className="engine-icon-only">
              {isEngineOn 
                ? (isAr ? "إيقاف المحرك" : "STOP ENGINE") 
                : (isAr ? "تشغيل المحرك" : "START ENGINE")}
            </div>
          </button>
        </div>

        <model-viewer
          ref={modelViewerRef}
          src={car}
          ios-src={carr} 
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          auto-rotate
          className="scene-viewer"
        >
          <button className="hotspot" slot="hotspot-front" data-position="0.4m 0.8m 1.2m" data-normal="0m 0m 1m">
            <div className="hotspot-annotation">Mercedes Glc200</div>
          </button>

          <button slot="ar-button" className="scene-ar-button">
            {isAr ? "عرض في مساحتك" : "View in Your Space"}
          </button>

          <div className="scene-overlay">
            <div className="scene-configurator-card">
              <div className="scene-configurator-header">
                <p className="scene-configurator-title">{isAr ? "مُعدّل مرسيدس" : "Mercedes Configurator"}</p>
                <p className={`scene-configurator-status ${isModelReady ? "is-ready" : "is-loading"}`}>
                  {isModelReady ? (isAr ? "جاهز" : "Ready") : (isAr ? "جاري التحميل..." : "Loading...")}
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