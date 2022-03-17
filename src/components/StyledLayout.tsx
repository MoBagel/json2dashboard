import React from 'react';
import styled from 'styled-components';

import renders from '../utils/render';

import type { RenderProps } from '../Renderer';

import RenderInside from '../utils/renderInside';

const StyledLayout: React.FC<{
  config: RenderProps;
  injectStyles: HTMLStyleElement;
  onSuccess: (res, configs) => void;
  onFail: (res, configs) => void;
}> = ({ config, injectStyles, onSuccess, onFail }) => {
  const RenderComp = renders(config.type);
  const media = config.media || {};

  const isDevelop = process.env.NODE_ENV === 'development';

  const containerTrack = isDevelop ? 'container' : 'media';

  return React.createElement(
    styled(RenderComp)`
      @${containerTrack} (max-width: 576px) {
        width: ${media.xs};
      }
      @${containerTrack} (min-width: 576px) {
        width: ${media.sm};
      }
      @${containerTrack} (min-width: 768px) {
        width: ${media.md};
      }
      @${containerTrack} (min-width: 992px) {
        width: ${media.lg};
      }
      @${containerTrack} (min-width: 1200px) {
        width: ${media.xl};
      }
      @${containerTrack} (min-width: 1600px) {
        width: ${media.xxl};
      }
    `,
    {
      key: config.id,
      ...config.props,
      style: { ...config?.props?.style, ...injectStyles },
    },
    RenderInside({ config, onSuccess, onFail }),
  );
};

export default StyledLayout;
