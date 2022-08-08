import { Image } from "@interfaces/image";
import React, { FC } from "react";
interface Props {
  /** string representing the URL of an image*/
  images: Image[] | undefined;
}
export const FileViewer: FC<Props> = ({ images }) => {
  return (
    <div>
      {images?.map((image) => (
        <img
          src={image.preview}
          alt="The image that an awesome user just uploaded to our website!"
        ></img>
      ))}
    </div>
  );
};
