import React from 'react';
import styled from 'styled-components';

import renders from './Render';
import Renderer from '../Renderer';

const StyledLayout: React.FC<{
  config: {
    type: any;
    id?: string;
    props: any;
    children: any;
    content?: any;
    isColumn?: boolean;
    isDownload?: boolean;
    media?: any;
  };
  injectStyles: HTMLStyleElement;
}> = ({ config, injectStyles }) => {
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
    config.children &&
      config.children
        .sort((a: { order: number }, b: { order: number }) => a.order - b.order)
        .map((c: any) => <Renderer key={c?.id} {...c} />),
  );
};

export default StyledLayout;
