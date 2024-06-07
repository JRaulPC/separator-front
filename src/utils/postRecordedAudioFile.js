import axios from "axios";

export const localRoute = "http://127.0.0.1:5000/";

const postRecordedAudioFile = async (audioBlob) => {
  try {
    const formData = new FormData();
    formData.append("file", audioBlob, "audio.mp3");

    const response = await axios.post(`${localRoute}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("File uploaded successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

export default postRecordedAudioFile;
