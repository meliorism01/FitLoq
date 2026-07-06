import { useEffect, useState } from "react";

function AnimatedCounter({
  end,
  duration = 1500,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;

    function animate(time) {
      if (!startTime) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      setCount(progress * end);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [end, duration]);

  const value =
    Number.isInteger(end)
      ? Math.round(count)
      : count.toFixed(1);

  return value;
}

export default AnimatedCounter;