import { useCallback, useState } from "react";
import { FileEditor } from "@components/FileEditor";
import { FileViewer } from "@components/FileViewer";
import { Button } from "@components/Button";
import { Image } from "@interfaces/image";

export function FileForm() {
  const [files, setFiles] = useState<Image[]>();
  const handleDrop = useCallback((acceptedFiles: Image[]) => {
    setFiles(acceptedFiles);
  }, []);

  return (
    <form>
      <div className="flex">
        <FileEditor onDrop={handleDrop} />
        <FileViewer images={files} />
      </div>
      <Button disabled={!files}>Upload!</Button>
    </form>
  );
}
