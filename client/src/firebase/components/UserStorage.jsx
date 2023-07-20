import React, { useState } from "react";
import { useImageContext } from "../../contexts/ImagesContext";
import { useLoaderContext } from "../../contexts/LoaderContext";
import SwitchAntD from "./htmlComponents/Switch";
import { Progress } from "antd";
const UserStorage = ({ display }) => {
 const { storage } = useImageContext();
 const { setview, view } = useLoaderContext();
 const percentage = ((storage?.occupied / storage?.userStorage) * 100).toFixed(1);
 const color = Number(percentage) > 80 ? "red" : "#50C878";

 const StorageDisplay = () => {
  return (
   <>
    <div className="flex justify-around py-4">
     <span className="font-semibold">Storage:</span>
     <Progress
      className="px-5"
      percent={percentage}
      strokeColor={color}
      size={["100%", 15]}
      showInfo={true}
     />
    </div>

    <div
     className={`${
      display ? "" : "border-[1.5px] "
     } rounded-[4px] border-black flex justify-between p-4`}
    >
     {!display && (
      <SwitchAntD text={"Toggle View"} value={view} onChange={(e) => setview((o) => !o)} />
     )}
     <span className={`font-semibold ${display && "mx-auto"}`}>
      Your Storage: {`${storage?.occupied}MBs / ${storage?.userStorage}MBs`}
     </span>
    </div>
   </>
  );
 };
 return <>{storage?.userStorage && <StorageDisplay />}</>;
};

export default UserStorage;
