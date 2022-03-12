import React from 'react';

import Renderer from '../components/Renderer';

const Dashboard: React.FC<{
  data: {
    type: any;
    id?: string;
    props: any;
    children: any;
    content?: any;
  };
}> = ({ data }) => {
  return <Renderer {...data} />;
};

export default Dashboard;
