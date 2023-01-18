import React from 'react';
import styled from 'styled-components';

import type { PropsType, RenderProps } from '../../Renderer';

import apiRequest from '../utils/apiRequest';

const StyledLink = styled.a`
  ${(props) => props.styles};
`;

interface LinkProps extends PropsType, Pick<RenderProps, 'onSuccess' | 'onFail'> {
  style?: HTMLStyleElement;
}

const FetchLink: React.FC<LinkProps> = ({
  onSuccess,
  onFail,
  children,
  apiConfigs,
  style,
  variable,
  ...restProps
}) => {
  const handleFetch = () => {
    return apiRequest({ apiConfigs, variable, onSuccess, onFail });
  };

  return (
    <StyledLink {...restProps} styles={style} onClick={apiConfigs?.type ? handleFetch : () => {}}>
      {children}
    </StyledLink>
  );
};

export default FetchLink;
