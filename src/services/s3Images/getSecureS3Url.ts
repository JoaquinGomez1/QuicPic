import { ImageUrl } from "@interfaces/imageUrl";
import axios, { AxiosResponse } from "axios";

export const getSecureS3Url = (): Promise<
  AxiosResponse<ImageUrl | undefined>
> => axios.get("/api/images");
