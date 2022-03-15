import React from 'react';

import Renderer from '../Renderer';

const Dashboard: React.FC<{
  data: {
    type: any;
    id?: string;
    props: any;
    children: any;
    content?: any;
    apiConfigs: {
      url: string;
      method: string;
      headers: {
        never;
      };
    };
  };
  onRequest: (config) => void;
}> = ({ data, onRequest }) => {
  return <Renderer {...data} onRequest={onRequest} />;
};

export default Dashboard;
