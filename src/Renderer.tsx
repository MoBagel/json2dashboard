import React from 'react';
import renders from './Render/utils/render';
import { DownloadCard, StyledLayout } from './Render/components';
import ErrorBoundary from './Render/ErrorBoundary';
import colors from './Render/styles/color';

import renderInside from './Render/utils/renderInside';

export interface ObjValue {
  props: string;
  columns: [];
}

export type JsonProps = {
  type: string;
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

const injectColorStyle = ({ props, injectStyles }) => {
  let styles = { ...injectStyles };
  Object.keys(props.style).forEach((key) => {
    const getColor = colors[props.style[key]];
    if (getColor) {
      // eslint-disable-next-line no-param-reassign
      styles = {
        ...styles,
        [key]: getColor,
      };
    }
  });
  return styles;
};

const injectVariablesToTableColumn = ({ injectProps, props, onSuccess, onFail }) => {
  console.log(injectProps, props);
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
  let injectStyles;
  const props = config.props;

  if (props?.style) {
    injectStyles = injectColorStyle({ props, injectStyles });
  }

  if (config.isDownload && config.type === 'Card') {
    return (
      <DownloadCard
        config={config}
        injectStyles={injectStyles}
        onSuccess={onSuccess}
        onFail={onFail}
      />
    );
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
  // it uses for table's column's inside render to pass variables from table's root
  if (config.isColumn) {
    injectProps = { ...injectProps, ...config };
  }

  const RenderComp = renders(config.type);

  if (typeof RenderComp !== 'undefined') {
    if (config.type === 'Table' && props && Array.isArray(props?.columns)) {
      injectProps = injectVariablesToTableColumn({ injectProps, props, onSuccess, onFail });
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
