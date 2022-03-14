import React from 'react';
import styled from 'styled-components';
import colors from '../styles/color';

const Label = styled.div`
  width: 13px;
  height: 13px;
  background: #eee;
  border-radius: 50%;
  background: ${(props) => props.bgColor || '#eee'};
`;

const StatusLabel: React.FC<{
  props: {
    statusColor: string;
  };
}> = (props) => {
  return <Label bgColor={colors[props?.statusColor]} {...props} />;
};

export default StatusLabel;
