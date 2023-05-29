'use client';
import { useState } from 'react';
import useInterval from './useInterval.jsx';
export default function Description() {
  let [count, setCount] = useState(0);
  useInterval(changeDescription, 5000);

  let options = [
    'Responsive',
    'Accessible',
    'Beautiful',
    'Engaging',
    'Dynamic',
  ];
  function changeDescription() {
    if (count === 4) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <span className="text-lg md:text-xl px-1 font-bold uppercase">
      {options[count]}
    </span>
  );
}
