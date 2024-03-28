import React, { useState } from 'react';

const ColorOptions = ({colors}) => {
  const [selectedColor, setSelectedColor] = useState('');

  // const colors = [
  //   { value: 'red', color: '#FF0000' },
  //   { value: 'blue', color: '#0000FF' },
  //   { value: 'green', color: '#008000' },
  // ];

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="relative inline-block w-full">
      <div className="absolute  w-full rounded-md bg-white ">
        <div className="">
          {colors.map((color) => (
             <button
             key={color}
             onClick={() => setSelectedColor(color)}
             className={`w-12 h-9 rounded-lg rounded-half mx-1 border-4  ${
               selectedColor === color ? 'border-black' : 'border-transparent'
             }`}
             style={{ backgroundColor: color }}
           ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorOptions;
