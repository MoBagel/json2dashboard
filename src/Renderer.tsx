import React from 'react';
import renders from './utils/render';
import { DownloadTable, StyledLayout } from './components';
import ErrorBoundary from './ErrorBoundary';
import colors from './styles/color';

import renderInside from './utils/renderInside';

export interface ObjValue {
  props: string;
  columns: [];
}

export type JsonProps = {
  type: any;
  id?: string;
  props?: Record<string, ObjValue>;
  children?: [ChildrenJsonProps];
  content?: string | ((config) => string);
  isColumn?: boolean;
  isDownload?: boolean;
  variable?: Record<string, ObjValue>;
  media?: Record<string, ObjValue>;
  apiConfigs?: {
    method?: string;
    type: string;
    url: string;
    payload?: [string];
    query?: [string];
    dataType?: string;
    headers?: Record<string, ObjValue>;
    options?: Record<string, ObjValue>;
  };
};

export interface ChildrenJsonProps extends JsonProps {
  order: number;
}

export interface RenderProps extends JsonProps {
  onSuccess: (res, configs) => void;
  onFail: (res, configs) => void;
}

const Renderer = (config: RenderProps) => {
  const { onSuccess, onFail } = config;
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
      return (
        <DownloadTable
          config={config}
          injectStyles={injectStyles}
          onSuccess={onSuccess}
          onFail={onFail}
        />
      );
    }
  }
  if (config.type === 'Layout' && config.media) {
    return (
      <StyledLayout
        config={config}
        injectStyles={injectStyles}
        onSuccess={onSuccess}
        onFail={onFail}
      />
    );
  }
  let injectProps = {};
  if (config.isColumn) {
    injectProps = { ...injectProps, ...config };
  }

  const RenderComp = renders(config.type);

  if (typeof RenderComp !== 'undefined') {
    if (config.type === 'Table' && props && Array.isArray(props?.columns)) {
      injectProps = {
        ...injectProps,
        columns: [...props.columns].map((item) => {
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
                <Renderer
                  isColumn
                  {...injectProps}
                  {...record}
                  {...render}
                  onSuccess={onSuccess}
                  onFail={onFail}
                />
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
          {...props}
          {...injectProps}
          style={{ ...props?.style, ...injectStyles }}
          isColumn={config?.isColumn}
          isDownload={config?.isDownload}
          variable={config?.variable}
          media={config?.media}
          apiConfigs={config?.apiConfigs}
        >
          {renderInside({
            config: {
              variable: config?.variable,
              children: config?.children,
              content: config?.content,
            },
            injectProps,
            onSuccess,
            onFail,
          })}
        </RenderComp>
      </ErrorBoundary>
    );
  }
  return null;
};

export default Renderer;
