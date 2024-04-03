import React, { useState } from 'react';

const ColorOptions = ({colors}) => {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div className="relative inline-block w-full">
      <div className="absolute  w-full rounded-md bg-white ">
        <div className="bg-gray-100 w-auto p-1 rounded-lg">
          {colors?.map((color) => (
             <button
             key={color}
             onClick={() => setSelectedColor(color)}
             className={`w-12 h-9 rounded-lg mx-1 border-[5px]  ${
               selectedColor === color ? 'border-black' : ''
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
