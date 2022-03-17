import React from 'react';
import styled from 'styled-components';
import colors from '../styles/color';

import type { RenderProps } from '../Renderer';

const Label = styled.div`
  width: 13px;
  height: 13px;
  background: #eee;
  border-radius: 50%;
  background: ${(props) => props.bgColor || '#eee'};
`;

interface StatusLabelProps extends RenderProps {
  statusColor: string;
}

const StatusLabel: React.FC<StatusLabelProps> = ({ props, statusColor }) => {
  return <Label bgColor={colors[statusColor]} {...props} />;
};

export default StatusLabel;
