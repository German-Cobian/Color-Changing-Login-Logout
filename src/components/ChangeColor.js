import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../redux/theme';

const ChangeColor = () => {
  const [color, setColor] =useState("");
  const dispatch = useDispatch();

  return (
  <div className="y-space">
    <input type="text" onChange={(event) => {setColor(event.target.value);}}/>
    <button onClick={() => {dispatch(changeColor(color))}}>Change Color</button>
  </div>
  );
};

export default ChangeColor;