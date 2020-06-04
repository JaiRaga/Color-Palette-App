import React from "react";

const ColorBox = ({ name, background }) => {
  return (
    <div style={{ background }} className='ColorBox'>
      <span>{name}</span>
      <span>More</span>
    </div>
  );
};

export default ColorBox;
