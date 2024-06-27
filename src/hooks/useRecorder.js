import { useState, useRef } from "react";
import convertBlobToMP3 from "../utils/convertBlobToMp3";
import downloadProcessedFile from "../utils/downloadProcessedFile";

const displayMediaOptions = {
  audio: {
    suppressLocalAudioPlayback: false,
    sampleRate: 44100,
    channelCount: 2,
    echoCancellation: false,
    noiseSuppression: false,
    autoGainControl: false,
    googAutoGainControl: false,
  },
  preferCurrentTab: false,
  selfBrowserSurface: "exclude",
  systemAudio: "include",
  surfaceSwitching: "include",
  monitorTypeSurfaces: "exclude",
};

const useRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const mediaRecorderRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia(
        displayMediaOptions
      );

      // Check if audio tracks are available
      const audioTracks = stream.getAudioTracks();
      if (audioTracks.length === 0) {
        throw new Error("No audio tracks available");
      }

      const audioTrack = audioTracks[0];
      const audioStream = new MediaStream([audioTrack]);
      const mediaRecorder = new MediaRecorder(audioStream, {
        mimeType: "audio/webm",
      });

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };

      mediaRecorder.onstop = async () => {
        // Use a functional update to ensure recordedChunks state is up-to-date
        setRecordedChunks((chunks) => {
          const blob = new Blob(chunks, { type: "audio/webm" });

          convertBlobToMP3(blob).then(() => {
            setRecordedChunks([]);
            setTimeout(() => downloadProcessedFile(), 20000);
          });

          return [];
        });
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing media devices.", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return { isRecording, startRecording, stopRecording };
};

export default useRecorder;
