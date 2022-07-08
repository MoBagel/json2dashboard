import { Typography } from 'antd';
import compConfig from './compConfig';

const render = (type: string) => {
  const SelectComp = compConfig[type];
  if (SelectComp) {
    return SelectComp;
    // this condition use for rendering Typography.Title and Typography.Text
  } else if (/^Typography/.test(type)) {
    const SelectType = type.replace(/Typography./, '');
    return Typography[SelectType];
  }
  return 'div';
};

export default render;
