import React from 'react';
import renders from './Render/utils/render';
import { DownloadCard, StyledLayout } from './Render/components';
import ErrorBoundary from './Render/ErrorBoundary';
import colors from './Render/styles/color';

import renderInside from './Render/utils/renderInside';

export interface ObjValue {
  style: HTMLStyleElement;
  props: string;
  columns: [];
}

export type JsonProps = {
  type: string;
  id?: string;
  root?: boolean;
  props?: Record<string, any>;
  children?: [ChildrenJsonProps];
  content?: string | ((config) => string);
  isColumn?: boolean;
  isDownload?: boolean;
  variable?: Record<string, string | number>;
  media?: Record<string, string | number>;
  apiConfigs?: {
    method?: string;
    type: string;
    url: string;
    payload?: [string];
    query?: [string];
    dataType?: string;
    headers?: Record<string, string | number>;
    options?: Record<string, string | number>;
  };
};

export interface ChildrenJsonProps extends JsonProps {
  order?: number;
}

export interface RenderProps extends JsonProps {
  onSuccess: (res, configs) => void;
  onFail: (res, configs) => void;
}

const injectColorStyle = (style: HTMLStyleElement): HTMLStyleElement => {
  let styles = {...style}
  Object.keys(style).forEach((key) => {
    const colorHexCode = colors[style[key]];
    if (colorHexCode) {
      // eslint-disable-next-line no-param-reassign
      styles = {
        ...styles,
        [key]: colorHexCode,
      };
    }
  });
  return styles;
};

const injectVariablesToTableColumn = ({ injectProps, props, onSuccess, onFail }) => {
  return {
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
            _: never,
            record: JSX.IntrinsicAttributes & {
              type: string;
              id?: string;
              props?: Record<string, ObjValue>;
              children?: [ChildrenJsonProps];
              content?: string | ((config) => string);
              isColumn?: boolean;
              isDownload?: boolean;
              variable?: Record<string, ObjValue>;
              media?: Record<string, ObjValue>;
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
};

function Renderer(config: RenderProps) {
  const { onSuccess, onFail } = config;
  const props = config.props;

  if (config.props?.style) {
    config.props.style = injectColorStyle(config.props.style);
  }

  if (config.isDownload && config.type === 'Card') {
    return (
      <DownloadCard
        config={config}
        onSuccess={onSuccess}
        onFail={onFail}
      />
    );
  }

  if (config.type === 'Layout' && config.media) {
    return (
      <StyledLayout
        config={config}
        onSuccess={onSuccess}
        onFail={onFail}
      />
    );
  }

  let injectProps = {};
  // it uses for table's column's inside render to pass variables from table's root
  if (config.isColumn) {
    injectProps = config;
  }

  const RenderComp = renders(config.type);

  if (typeof RenderComp !== 'undefined') {
    if (config.type === 'Table' && props && Array.isArray(props?.columns)) {
      injectProps = injectVariablesToTableColumn({ injectProps, props, onSuccess, onFail });
    }
    return (
      <ErrorBoundary key={new Date().getTime()}>
        <RenderComp
          {...props}
          {...injectProps}
          style={{ ...props?.style }}
          isColumn={config?.isColumn}
          isDownload={config?.isDownload}
          variable={config?.variable}
          media={config?.media}
          apiConfigs={config?.apiConfigs}
          onSuccess={onSuccess}
          onFail={onFail}
        >
          {renderInside({
            config,
            injectProps,
            onSuccess,
            onFail,
          })}
        </RenderComp>
      </ErrorBoundary>
    );
  }
  return null;
}

export default Renderer;
