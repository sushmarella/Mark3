"use client"
import React, { useState } from 'react';

const FontSizeAdjuster = () => {
  const [fontSize, setFontSize] = useState(16);

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        className=" rounded-l p-2 "
        onClick={() => setFontSize(fontSize - 1)}
      >
        -
      </button>
      <div className="flex border-2 border-gray-500 p-2 h-[30px] items-center justify-center rounded">
        {fontSize}
      </div>
      <button
        className="rounded-r p-2 "
        onClick={() => setFontSize(fontSize + 1)}
      >
        +
      </button>
    </div>
  );
};

export default FontSizeAdjuster;
