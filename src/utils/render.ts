import { Typography } from 'antd';
import compConfig from './compConfig';

const render = (type: string) => {
  const SelectComp = compConfig[type];
  if (SelectComp) {
    return SelectComp;
  } else if (/^Typography/.test(type)) {
    const SelectType = type.replace(/Typography./, '');
    return Typography[SelectType];
  }
  return 'div';
};

export default render;
