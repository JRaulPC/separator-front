import { useState, useEffect } from "react";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isRunning}
        onChange={handleToggle}
        id="btn"
      />
      <label htmlFor="btn">{isRunning ? "Stop" : "Start"}</label>
      <div id="timer">{time.toFixed(2)}</div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
