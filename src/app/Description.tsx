'use client';
import { useState } from 'react';
import useInterval from './useInterval.jsx';
import './Description.css';
export default function Description() {
  let [count, setCount] = useState(0);
  useInterval(changeDescription, 3000);

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
  //Description on below strategy: by making the key value equal to count it tells React to re-render
  //the whole component, not just the content, allowing the annimation to restart in synchrony with the
  //useInterval function
  return (
    <p
      id="description"
      key={count}
      className="inline text-lg md:text-xl px-1 font-bold uppercase ease-in-out duration-300 "
    >
      {options[count]}
    </p>
  );
}
