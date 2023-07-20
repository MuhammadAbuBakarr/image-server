import React, { useEffect } from "react";
import { useImageContext } from "../../contexts/ImagesContext";
import ImageCard from "./htmlComponents/ImageCard";
const CardViewImages = () => {
 const { images } = useImageContext();

 return (
  <>
   <div className="flex gap-3 flex-wrap">
    {images?.map((e) => (
     <ImageCard key={e._id} img={e.url} size={e.size} date={e.date} />
    ))}
   </div>
  </>
 );
};

export default CardViewImages;
