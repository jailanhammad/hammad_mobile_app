import React, { useEffect, useState } from "react";
import "./preloader.css";
import logo2 from "../assets/home/pre.svg";

export default function Preloader({ onFinish }) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 2200);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 5200);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
<>

<div className='all-components-0'>
  <div className="preloader-0">
    <div className="logo-wrapper-0">
      <img src={logo2} alt="logo" />
    </div>

    <h1 className={`brand-name ${showText ? "show" : ""}`}>
      HAMMAD MOTORS
    </h1>
  </div>
</div>  


    </>

  );
}