import React from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

const Palette = ({ colors }) => {
  const colorBox = colors.map((color) => {
    return <ColorBox background={color.color} name={color.name} />;
  });
  return (
    <div className='Palette'>
      {/* Navbar goes here */}
      <div className='Palette-colors'>{colorBox}</div>
      {/* Footer goes here */}
    </div>
  );
};

export default Palette;
