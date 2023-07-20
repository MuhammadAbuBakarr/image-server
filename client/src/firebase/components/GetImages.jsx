import React, { useEffect } from "react";
import UserStorage from "./UserStorage";
import ListViewImages from "./ListViewImages";
import CardViewImages from "./CardViewImages";
import { useLoaderContext } from "../../contexts/LoaderContext";

const GetImages = ({ imgs }) => {
 const { view } = useLoaderContext();
 return (
  <>
   <div className="m-auto flex flex-col w-[100%] gap-5 ">
    <UserStorage />
    {!view && <ListViewImages />}
    {view && <CardViewImages />}
   </div>
  </>
 );
};

export default GetImages;
