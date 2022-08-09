import { Image } from "@interfaces/image";
import React, { FC } from "react";
interface Props {
  /** string representing the URL of an image*/
  images: Image[] | undefined;
}
export const FileViewer: FC<Props> = ({ images }) => {
  return (
    <div className="">
      <p>
        {(!images?.length || images.length <= 0) &&
          "You'll see a preview of your image here once you upload something"}
      </p>
      {images?.map((image) => (
        <img
          data-test-id="preview-image"
          className="object-contain w-full h-96"
          src={image.preview}
          alt="The image that an awesome user just uploaded to our website!"
        ></img>
      ))}
    </div>
  );
};
