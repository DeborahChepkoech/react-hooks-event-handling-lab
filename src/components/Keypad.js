import React, { useState } from "react";

function Keypad() {
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
      <input
        type="password" 
        onChange={handleChange} 
        placeholder="Enter your password"
      />
    </div>
  );
}

export default Keypad;
