import { useState, useEffect } from "react";

const CountUp = ({ start = 0, end, duration = 3000 }) => {
  const [value, setValue] = useState(0);
  const frameDuration = 2000 / 60;
  const easeOut = (t) => t * (2 - t);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOut(frame / totalFrames);
      setValue(Math.floor(end * progress));

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, []);

  return <div>{value}</div>;
};

export default CountUp;
