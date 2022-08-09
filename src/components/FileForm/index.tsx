import { useCallback, useState } from "react";
import { FileEditor } from "@components/FileEditor";
import { FileViewer } from "@components/FileViewer";
import { Button } from "@components/Button";
import { Image } from "@interfaces/image";
import { uploadImageToS3 } from "@services/s3Images/uploadImage";
import { getSecureS3Url } from "@services/s3Images/getSecureS3Url";

export function FileForm() {
  const [files, setFiles] = useState<Image[]>();
  const handleDrop = useCallback((acceptedFiles: Image[]) => {
    setFiles(acceptedFiles);
  }, []);

  const handleFormSubmision = async () => {
    const url = (await getSecureS3Url()).data?.url || "";
    uploadImageToS3(url, files![0]);
  };

  return (
    <div>
      <div className="space-y-8 mb-8">
        <FileEditor onDrop={handleDrop} />
        <FileViewer images={files} />
      </div>
      <div className="grid place-items-center">
        <Button onClick={handleFormSubmision} disabled={!files}>
          Upload!
        </Button>
      </div>
    </div>
  );
}
