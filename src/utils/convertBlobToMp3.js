import { encodeWAV } from "./encodeWAV";
import postRecordedAudioFile from "./postRecordedAudioFile";

const convertBlobToMP3 = async (blob) => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const arrayBuffer = await blob.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

  const mp3Buffer = encodeWAV(audioBuffer);
  const mp3Blob = new Blob([mp3Buffer], { type: "audio/mpeg" });
  postRecordedAudioFile(mp3Blob);
};

export default convertBlobToMP3;
