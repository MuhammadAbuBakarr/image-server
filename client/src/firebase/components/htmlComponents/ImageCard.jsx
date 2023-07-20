import React from "react";
const ImageCard = ({ date, size, img }) => {
 return (
  <>
   <div className="w-64 h-64  border-black border-2">
    <img src={img} className="object-cover w-full h-full " alt="" />
   </div>
  </>
 );
};

export default ImageCard;
