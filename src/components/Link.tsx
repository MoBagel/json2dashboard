import React from 'react';
import styled from 'styled-components';

import Renderer from '../Renderer';

const StyledLink = styled.a`
  ${(props) => props.styles};
`;

const Link: React.FC<{
  type: any;
  id?: string;
  props: any;
  children: any;
  content?: any;
  isDownload?: boolean;
  apiConfigs: {
    type: string;
  };
  style: HTMLStyleElement;
  injectStyles: HTMLStyleElement;
  onRequest: (config) => void;
}> = (props) => {
  const { apiConfigs, content, injectStyles, onRequest, children, style } = props;
  const handleFetch = () => {
    onRequest(apiConfigs);
  };
  return (
    <StyledLink
      {...props}
      styles={{ ...style, ...injectStyles }}
      onClick={apiConfigs?.type ? handleFetch : () => {}}
    >
      {content
        ? typeof content === 'function'
          ? content({ ...props })
          : content
        : Array.isArray(children)
        ? children
            .slice()
            .sort((a: { order: number }, b: { order: number }) => a.order - b.order)
            .map((c: any) => <Renderer key={c?.id} {...c} onRequest={onRequest} />)
        : children}
    </StyledLink>
  );
};

export default Link;
