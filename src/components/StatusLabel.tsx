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
  statusColor: string;
  props: {
    statusColor: string;
  };
}> = ({ props, ...restProps }) => {
  return <Label bgColor={colors[restProps?.statusColor]} {...props} />;
};

export default StatusLabel;
