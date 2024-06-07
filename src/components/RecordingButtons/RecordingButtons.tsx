import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import useRecorder from "../../hooks/useRecorder";
import "./RecordingButtons.css";

const RecordingButtons = (): React.ReactElement => {
  const { startRecording, isRecording, stopRecording } = useRecorder();
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState<any | null>(null);

  const handleToggle = () => {
    if (isRecording) {
      stopRecording();
    } else {
      if (isRunning) {
        clearInterval(intervalId!);
        setIsRunning(false);
      } else {
        const id = setInterval(() => {
          setTime((prevTime) => prevTime + 0.01);
        }, 10);
        setIntervalId(id);
        setIsRunning(true);
        startRecording();
      }
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalId!);
    setTime(0);
  };

  useEffect(() => {
    const buttonAnimate = document.getElementById("button-hover");

    if (!buttonAnimate) return;

    const handleMouseMove = (evt: MouseEvent) => {
      const rect = buttonAnimate.getBoundingClientRect();
      const { clientX, clientY } = evt;

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const height = buttonAnimate.clientHeight;
      const width = buttonAnimate.clientWidth;

      const yRotation = ((x - width / 2) / width) * 5;
      const xRotation = -((y - height / 2) / height) * 5;

      const transformString = `
      perspective(500px)
      scale(1.1)
      rotateX(${xRotation}deg)
      rotateY(${yRotation}deg)`;

      buttonAnimate.style.transform = transformString;
    };

    const handleMouseOut = () => {
      buttonAnimate.style.transform = `
      perspective(500px)
      scale(1)
      rotateX(0)
      rotateY(0)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4  relative ">
      <div className="flex flex-col justify-center items-center gap-4">
        <Card
          id="button-hover"
          isFooterBlurred
          radius="lg"
          className="border-none bg-black h-[150px] w-[250px] justify-center flex items-center button-hover "
          isHoverable
        >
          <Button
            className="text-4xl bg-red-800 w-[95%] h-[95%] text-white antialiased font-darker font-semibold  "
            variant="flat"
            color="default"
            radius="sm"
            size="sm"
            onPress={handleToggle}
          >
            {isRecording ? "Stop" : "Record"}
          </Button>
        </Card>
        {isRecording ? (
          <time className="text-[1.2rem] text-white " id="timer">
            {time.toFixed(1)} Seconds Recorded
          </time>
        ) : null}
      </div>
    </div>
  );
};

export default RecordingButtons;

//   <span className=" text-white font-bold absolute  -top-5">Click and</span>;
