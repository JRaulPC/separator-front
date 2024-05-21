import axios from "axios";
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
  monitorTypeSurfaces: "include",
};

const startButton = document.querySelector(".start-button");
const stopButton = document.querySelector(".stop-button");
let recordedChunks = [];
const localRoute = "http://127.0.0.1:5000";

const encodeWAV = (audioBuffer) => {
  const numOfChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const length = audioBuffer.length * numOfChannels * 2 + 44;
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  // Write WAV header
  writeString(view, 0, "RIFF");
  view.setUint32(4, 32 + audioBuffer.length * numOfChannels * 2, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numOfChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numOfChannels * 2, true);
  view.setUint16(32, numOfChannels * 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, "data");
  view.setUint32(40, audioBuffer.length * numOfChannels * 2, true);

  // Write audio data
  let offset = 44;
  for (let i = 0; i < audioBuffer.length; i++) {
    for (let channel = 0; channel < numOfChannels; channel++) {
      const sample = audioBuffer.getChannelData(channel)[i] * 32767.5;
      view.setInt16(offset, sample, true);
      offset += 2;
    }
  }

  return view;

  function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }
};

const postRecordedAudioFile = (audioBlob) => {
  const formData = new FormData();
  formData.append("file", audioBlob, "audio.mp3");

  axios
    .post(`${localRoute}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      let downloadLink = response.data.message;

      window.location = downloadLink;
    })
    .catch((error) => {
      console.error("Error uploading file:", error);
    });
};

const checkIfDownloadIsReady = () => {

}

const convertBlobToMP3 = async (blob) => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const arrayBuffer = await blob.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

  const mp3Buffer = encodeWAV(audioBuffer);
  const mp3Blob = new Blob([mp3Buffer], { type: "audio/mpeg" });
  postRecordedAudioFile(mp3Blob);
};

startButton.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia(
      displayMediaOptions
    );

    const audioTrack = stream.getAudioTracks()[0];
    const audioStream = new MediaStream([audioTrack]);
    const mediaRecorder = new MediaRecorder(audioStream, {
      mimeType: "audio/webm",
    });

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = async () => {
      const blob = new Blob(recordedChunks, { type: "audio/webm" });

      await convertBlobToMP3(blob);

      recordedChunks = [];
    };

    stopButton.addEventListener("click", () => {
      mediaRecorder.stop();
      startButton.disabled = false;
      stopButton.disabled = true;
    });

    mediaRecorder.start();
    startButton.disabled = true;
    stopButton.disabled = false;
  } catch (err) {
    console.error("Error accessing media devices.", err);
  }
});
