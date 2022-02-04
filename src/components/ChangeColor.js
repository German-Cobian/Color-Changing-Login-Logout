import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

const ChangeColor = () => {
  const [color, setColor] =useState("");
  const dispatch = useDispatch();

  return (
  <div>
    <input type="text" onChange={(event) => {setColor(event.target.value);}}/>
    <button onClick={() => {dispatch(changeColor(color))}}>Change Color</button>
  </div>
  );
};

export default ChangeColor;