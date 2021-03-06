import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Input from './Input';
import Output from './Output';
import colors from './colors.js';

function App () {
  const [dish, setDish] = useState({});
  const [cuisines, setCuisines] = useState({General: true, Vegetarian: true, American: true, French: true, Indian: true, Italian: true, Jewish: true});
  const [colorScheme, setColorScheme] = useState("lavender");

  useEffect(() => {
    document.body.style.backgroundColor = colors[colorScheme].color1;
  });

  return (
    <div>
      <NavBar 
        cuisines={cuisines}
        setCuisines={setCuisines}
        scheme={colors[colorScheme]}
      />
      <Input
        setDish={setDish}
        cuisines={cuisines}
        scheme={colors[colorScheme]}
      />
      <Output 
        dish={dish}
        setDish={setDish}
        cuisines={cuisines}
        scheme={colors[colorScheme]} //leave it here instead of using colorScheme directly to keep the code more clear
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
      />
    </div>
  );
}

export default App;
