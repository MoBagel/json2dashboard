import renders from './Render/utils/render';
import ErrorBoundary from './Render/ErrorBoundary';

import { injectColorStyle } from './Render/utils/colorConvert';

import renderInside from './Render/utils/renderInside';

import type { ColumnsType } from 'antd/lib/table';

export interface ObjValue {
  style: HTMLStyleElement;
  props: string;
  columns: [];
}

export type ApiConfigsType = {
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

export interface PropsType extends ApiConfigsType {
  variable?: Record<string, string | number>;
  style?: HTMLStyleElement;
  columns?: ColumnsType[];
}

export type JsonProps = {
  type: string;
  id?: string;
  props?: PropsType;
  children?: [ChildrenJsonProps];
  content?: string | ((config) => string);
};

export interface ChildrenJsonProps extends JsonProps {
  order?: number;
}

export interface RenderProps extends JsonProps {
  onSuccess: (res, configs) => void;
  onFail: (res, configs) => void;
}

const generateTableInjectColumn = ({ props, onSuccess, onFail }) => {
  return [...props.columns].map((item) => {
    const { render, ...rest } = item;
    if (typeof render === 'object') {
      return {
        ...rest,
        render: (_: never, record: JSX.IntrinsicAttributes & JsonProps) => (
          <Renderer {...record} {...render} onSuccess={onSuccess} onFail={onFail} />
        ),
      };
    }
    return item;
  });
};

function Renderer(config: RenderProps) {
  const { onSuccess, onFail, props } = config;

  const RenderComp = renders(config.type);

  if (typeof RenderComp !== 'undefined') {
    // covert color from "navy20" to "#ccd3dd",
    if (config.props?.style) {
      config.props.style = injectColorStyle(config.props.style);
    }

    if (config.type === 'Table' && config?.props && Array.isArray(config?.props?.columns)) {
      config.props.columns = generateTableInjectColumn({
        props: config.props,
        onSuccess,
        onFail,
      });
    }

    return (
      <ErrorBoundary key={new Date().getTime()}>
        <RenderComp {...props} onSuccess={onSuccess} onFail={onFail}>
          {renderInside({
            config,
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
