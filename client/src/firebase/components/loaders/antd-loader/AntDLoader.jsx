import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const AntDLoader = () => {
 const antIcon = (
  <LoadingOutlined
   style={{
    fontSize: 24,
    // color: "red",
   }}
   spin
  />
 );
 return <Spin indicator={antIcon} />;
};

export default AntDLoader;
