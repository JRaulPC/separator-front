import axios from "axios";
import { localRoute } from "./postRecordedAudioFile";

const downloadProcessedFile = async () => {
  try {
    const response = await axios.get(`${localRoute}/download/stems.zip`, {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    console.log(url);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "stems.zip");
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Error downloading file:", error);
    throw error;
  }
};

export default downloadProcessedFile;
