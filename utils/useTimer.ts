import { useEffect, useState } from 'react';

const formatTime = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Pad the minutes and seconds with leading zeros if necessary
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return { min: formattedMinutes, sec: formattedSeconds };
};

const useTimer = (totalSeconds: number) => {
  const [seconds, setSeconds] = useState(totalSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer); // Stop the counter when seconds reach 0
          // Regenerate a new code

          return 0;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return formatTime(seconds);
};

export default useTimer;
