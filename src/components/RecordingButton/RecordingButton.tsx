import { Button } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import useRecorder from "../../hooks/useRecorder";
import "./RecordingButton.css";

const RecordingButton = (): React.ReactElement => {
  const { startRecording, isRecording, stopRecording } = useRecorder();
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const handleToggle = () => {
    if (isRecording) {
      stopRecording();
      clearInterval(intervalRef.current!);

      setNow(null);
    } else {
      setStartTime(Date.now());
      clearInterval(intervalRef.current!);
      intervalRef.current = window.setInterval(() => {
        setNow(Date.now());
      }, 10);

      startRecording();
    }
  };

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className="flex flex-col justify-center gap-4 top-20 left-[12rem] relative ">
      <div className="flex flex-col justify-center  gap-4">
        <Button
          className="left-[120px] text-xl w-[187px] h-[66px] hover:bg-red-700 text-white antialiased font-montserrat font-semibold custom-button"
          variant="flat"
          radius="sm"
          onPress={handleToggle}
        >
          <span>{isRecording ? "Stop" : "Record now"}</span>
        </Button>
        {isRecording && (
          <time
            className=" left-[112px] relative text-[1.2rem] min-w-12 text-white font-founders flex"
            id="timer"
          >
            <span className=" lock min-w-10">{secondsPassed.toFixed(1)} </span>
            <span className="">Seconds Recorded</span>
          </time>
        )}
      </div>
    </div>
  );
};

export default RecordingButton;
