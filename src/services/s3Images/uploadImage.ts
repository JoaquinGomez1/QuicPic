import { Image } from "@interfaces/image";
import axios from "axios";

export const uploadImageToS3 = (url: string, file?: Image) => {
  return axios.put(url, file, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
