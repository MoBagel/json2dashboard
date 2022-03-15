import React from 'react';
import renders from './components/Render';
import DownloadTable from './components/DownloadTable';
import StyledLayout from './components/StyledLayout';
import ErrorBoundary from './ErrorBoundary';

import colors from './styles/color';

const Renderer = (config: {
  type: any;
  id?: string;
  props: any;
  children: any;
  content?: any;
  isColumn?: boolean;
  isDownload?: boolean;
  variable?: any;
  media?: any;
  apiConfigs: {
    type: string;
  };
  onRequest: (config) => void;
}) => {
  const { onRequest } = config;
  let injectStyles;
  const props = config.props;
  if (props?.style) {
    Object.keys(props.style).forEach((key) => {
      const getColor = colors[props.style[key]];
      if (getColor) {
        injectStyles = {
          ...injectStyles,
          [key]: getColor,
        };
      }
    });
  }
  if (config.isDownload) {
    if (config.type === 'Card') {
      return <DownloadTable config={config} injectStyles={injectStyles} onRequest={onRequest} />;
    }
  }
  if (config.type === 'Layout' && config.media) {
    return <StyledLayout config={config} injectStyles={injectStyles} onRequest={onRequest} />;
  }
  let injectProps = {};
  if (config.isColumn) {
    injectProps = { ...injectProps, ...config };
  }

  const RenderComp = renders(config.type);
  if (config.type === 'Row' || config.type === 'Col') {
    return React.createElement(
      RenderComp,
      {
        ...config.props,
        key: config.id,
        style: { ...props?.style, ...injectStyles },
      },
      config.content ||
        (config.children &&
          config.children
            .sort((a: { order: number }, b: { order: number }) => a.order - b.order)
            .map((c: any) => (
              <Renderer key={c?.id} {...injectProps} {...c} onRequest={onRequest} />
            ))),
    );
  }
  if (typeof RenderComp !== 'undefined') {
    if (config.type === 'Table') {
      injectProps = {
        ...injectProps,
        columns: [...config.props.columns].map((item) => {
          const { render, ...rest } = item;
          if (typeof render === 'function') {
            return { ...rest, render };
          }
          if (typeof render === 'object') {
            return {
              ...rest,
              render: (
                _: any,
                record: JSX.IntrinsicAttributes & {
                  type: any;
                  id?: string | undefined;
                  props: any;
                  children: any;
                  content?: any;
                  isColumn?: boolean | undefined;
                  isDownload?: boolean | undefined;
                  variable?: any;
                  media?: any;
                },
              ) => (
                <Renderer isColumn {...injectProps} {...record} {...render} onRequest={onRequest} />
              ),
            };
          }
          return { ...item, isColumn: true };
        }),
      };
    }
    return (
      <ErrorBoundary>
        <RenderComp
          {...config}
          {...props}
          {...injectProps}
          style={{ ...props?.style, ...injectStyles }}
        >
          {config.content
            ? typeof config.content === 'function'
              ? config.content({ ...config, ...config.variable })
              : config.content
            : config.children &&
              config.children
                .sort((a: { order: number }, b: { order: number }) => a.order - b.order)
                .map((c: any) => (
                  <Renderer key={c?.id} {...injectProps} {...c} onRequest={onRequest} />
                ))}
        </RenderComp>
      </ErrorBoundary>
    );
  }
  return null;
};

export default Renderer;
