import { Image } from "@interfaces/image";
import React, { FC } from "react";
import { FileRejection, useDropzone } from "react-dropzone";

interface Props {
  onDrop: (acceptedFiles: Image[], fileRejections: FileRejection[]) => void;
}
export const FileEditor: FC<Props> = ({ onDrop }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
      "image/webm": [".webm"],
    },
    onDrop: (acceptedFiles, rejectedFiles) => {
      const accepted: Image[] = acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      );

      onDrop(accepted, rejectedFiles);
    },
  });

  return (
    <>
      <div
        data-test-id="file-container"
        {...getRootProps()}
        className={`border-4 border-dashed ease-in-out border-spacing-8 border-primary-light w-full h-24 p-4 rounded-md grid place-items-center ${
          isDragActive ? "text-secondary cursor-grabbing border-secondary" : ""
        }`}
      >
        <p
          className={`text-primary font-semibold ${
            isDragActive ? "text-secondary" : ""
          }`}
        >
          Drag file to upload
        </p>
        <input className="hidden" {...getInputProps()} />
      </div>
    </>
  );
};
