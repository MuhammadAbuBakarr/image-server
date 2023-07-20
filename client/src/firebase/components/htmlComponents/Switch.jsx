import React from "react";
import { Switch } from "antd";

const SwitchAntD = ({ text, onChange, color, value }) => {
 return (
  <>
   <div className="flex justify-center gap-3 items-center">
    <Switch className="bg-slate-700" checked={value} onChange={onChange} />
    <span className="font-medium">{text}</span>
   </div>
  </>
 );
};

export default SwitchAntD;
