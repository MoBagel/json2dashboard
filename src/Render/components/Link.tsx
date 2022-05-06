import React from 'react';
import styled from 'styled-components';

import type { RenderProps } from '../../Renderer';

import apiRequest from '../utils/apiRequest';

const StyledLink = styled.a`
  ${(props) => props.styles};
`;

interface LinkProps extends RenderProps {
  injectStyles: HTMLStyleElement;
  style: HTMLStyleElement;
}

const Link: React.FC<LinkProps> = (props) => {
  const { apiConfigs, injectStyles, onSuccess, onFail, style, variable, children } = props;

  const handleFetch = () => {
    return apiRequest({ config: { apiConfigs, variable }, onSuccess, onFail });
  };

  return (
    <StyledLink
      {...props}
      styles={{ ...style, ...injectStyles }}
      onClick={apiConfigs?.type ? handleFetch : () => {}}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
