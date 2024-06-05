import { Card, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import useRecorder from "../../hooks/useRecorder";

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

  return (
    <div className="flex flex-col items-center justify-center pt-8">
      <div className="flex gap-4">
        <Card
          isFooterBlurred
          radius="sm"
          className="border-none h-[200px] w-[200px]"
        >
          <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-[72px] h-14 w-[calc(100%_-_8px)] ml-1 z-10">
            <Button
              className="text-large text-black bg-red-700"
              variant="flat"
              color="default"
              radius="lg"
              size="lg"
              onPress={handleToggle}
            >
              {isRecording ? "Stop" : isRunning ? "Pause" : "Start"}
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <div className="w-18 text-[72px]" id="timer">
          {time.toFixed(1)}
        </div>
      </div>
    </div>
  );
};

export default RecordingButtons;
