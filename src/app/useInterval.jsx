import React from 'react';
export default function useInterval(callback, delay) {
  const timeoutRef = React.useRef(null);
  const savedCallback = React.useRef(callback);
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  React.useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === 'number') {
      timeoutRef.current = window.setInterval(tick, delay);
      return () => window.clearInterval(timeoutRef.current);
    }
  }, [delay]);
  return timeoutRef;
}

//Code grabbed from Josh W. Comeau - edited to be setInterval
