import { useEffect, useState } from "preact/hooks";
import register from "preact-custom-element";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

// In the drive API, folders are also files with just a special type
type GalleryFile = {
  id: string;
  name: string;
  isFolder: boolean;
  thumb: string | null | undefined;
};

type GalleryResponse = GalleryFile[];

const isGalleryResponse = (obj: any): obj is GalleryResponse =>
  Array.isArray(obj) &&
  obj.every(
    (element) =>
      typeof element.id === "string" &&
      typeof element.name === "string" &&
      typeof element.isFolder === "boolean"
  );

export const Gallery = () => {
  const params = new URLSearchParams(window.location.search);
  const [folderId, setFolderId] = useState(params.get("folderId") || "");
  const [folders, setFolders] = useState<GalleryResponse>([]);
  const [folderName, setFolderName] = useState<string | null>(null);
  const [images, setImages] = useState([] as GalleryFile[]);

  const switchToFolder = (folder: GalleryFile) => {
    setFolderId(folder.id);
    setFolderName(folder.name);
  };

  useEffect(() => {
    fetch(`http://localhost:9000/api/folder/${folderId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Gallery: received code ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!isGalleryResponse(data)) {
          throw new Error(`Gallery: received malformed data`);
        }
        return data;
      })
      .then((files) => {
        setFolders(files.filter((file) => file.isFolder));
        setImages(files.filter((file) => !file.isFolder));
      });
  }, [folderId]);

  return (
    <div>
      {folderName && <h1>{folderName}</h1>}
      {folders.map((folder) => (
        <a onClick={() => switchToFolder(folder)}>{folder.name}</a>
      ))}
      <LightGallery>
        {images.map((image) => (
          <a href={`http://localhost:9000/api/file/${image.id}`}>
            <img
              src={
                image.thumb
                  ? image.thumb
                  : `http://localhost:9000/api/file/${image.id}`
              }
            ></img>
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

register(Gallery, "gallery-component", [], { shadow: false });
