import React from 'react';
import styled from 'styled-components';

import type { LayoutProps } from 'antd';
import { Layout } from 'antd';

const StyledLayout = styled(Layout)`
  ${({ media }) =>
    media &&
    `${
      media?.xs &&
      `@media (max-width: 576px) {
          width: ${media?.xs};
        }`
    }
        ${
          media?.sm &&
          `@media (min-width: 576px) {
            width: ${media?.sm};
          }`
        }
        ${
          media?.md &&
          `@media (min-width: 768px) {
            width: ${media?.md};
          }`
        }
        ${
          media?.lg &&
          `@media (min-width: 992px) {
            width: ${media?.lg};
          }`
        }
        ${
          media?.xl &&
          `@media (min-width: 1200px) {
            width: ${media?.xl};
          }`
        }
        ${
          media?.xxl &&
          `@media (min-width: 1600px) {
            width: ${media?.xxl};
          }`
        }
    `}
`;

export interface MediaLayoutType extends LayoutProps {
  media?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}

const MediaLayout: React.FC<MediaLayoutType> = ({ media, children, ...restProps }) => {
  return (
    <StyledLayout media={media} {...restProps}>
      {children}
    </StyledLayout>
  );
};

export default MediaLayout;
