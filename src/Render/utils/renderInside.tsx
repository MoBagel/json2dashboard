import React from 'react';
import Renderer from '../../Renderer';

import type { ChildrenJsonProps, ObjValue } from '../../Renderer';

const renderInside = ({
  config,
  injectProps,
  onSuccess,
  onFail,
}: {
  config: {
    children?: [ChildrenJsonProps];
    content?: string | ((config) => string);
    variable?: Record<string, ObjValue>;
  };
  injectProps?: Record<string, ObjValue>;
  onSuccess: (res, configs) => void;
  onFail: (res, configs) => void;
}) => {
  return config.content
    ? typeof config.content === 'function'
      ? config.content({ ...config, ...config?.variable })
      : config.content
    : config.children &&
        config.children
          .sort((a: { order: number }, b: { order: number }) => a.order - b.order)
          .map((c: any, index: number) => (
            <Renderer
              key={c?.id || index}
              {...injectProps}
              {...c}
              onSuccess={onSuccess}
              onFail={onFail}
            />
          ));
};

export default renderInside;