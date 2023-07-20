import React, { useEffect } from "react";
import useDeleteImage from "../apihooks/useDeleteImage";
import { useImageContext } from "../../contexts/ImagesContext";
import { useLoaderContext } from "../../contexts/LoaderContext";
import { Spin } from "antd";

const ListViewImages = () => {
 const { images, getImages } = useImageContext();
 const { deleteLoading } = useLoaderContext();
 const deleteImage = useDeleteImage(getImages);

 return (
  <>
   {images?.map((e, index) => (
    <div
     className="flex gap-x-8 justify-center items-center border-2 border-red-500 p-5"
     key={index}
    >
     <div>{index + 1}</div>
     <a href={e?.url} target="_blank" rel="noreferrer" key={index}>
      {e?.url?.substring(0, 60)}...
     </a>
     <div>{e?.size} Mb</div>
     <div>{new Date(e?.date).toLocaleString()}</div>
     <button
      onClick={() => deleteImage(e?.url)}
      className="border-2 border-red-500 text-red-500 font-semibold justify-center  flex gap-3 px-3 py-2 rounded-xl"
     >
      Delete
      {deleteLoading?.url === e.url && <Spin style={{ color: "black" }} />}
      {/* <AntDLoader /> */}
      {/* <Spin style={{ color: "black" }} /> */}
     </button>
    </div>
   ))}
  </>
 );
};

export default ListViewImages;
