import React from 'react';

function Display({ value }) {
  return (
    <input type="text" id="inputField" value={value} disabled />
  );
}

export default Display;
