import React from 'react';

import type { RenderProps } from '../Renderer';
import Renderer from '../Renderer';

const Dashboard: React.FC<{
  data: RenderProps;
  onSuccess: (res, configs) => void;
  onFail: (res, configs) => void;
}> = ({ data, onSuccess, onFail }) => {
  return <Renderer {...data} onSuccess={onSuccess} onFail={onFail} />;
};

export default Dashboard;
