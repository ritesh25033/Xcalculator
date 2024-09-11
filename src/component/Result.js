import React from 'react';

function Result({ value }) {
  return <div className='result-box'>{value ? `${value}` : ''}</div>;
}

export default Result;
