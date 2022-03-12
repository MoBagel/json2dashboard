import { Typography } from "antd";
import CompConfig from "./CompConfig";

const renders = (type: string) => {
  const SelectComp = CompConfig[type];
  if (SelectComp) {
    return SelectComp;
  } else if (/^Typography/.test(type)) {
    const SelectType = type.replace(/Typography./, "");
    return Typography[SelectType];
  }
  return "div";
};

export default renders;
