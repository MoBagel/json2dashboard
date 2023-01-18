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
    props?: {
      variable?: Record<string, string | number>;
    };
  };
  injectProps?: Record<string, ObjValue>;
  onSuccess: (res, configs) => void;
  onFail: (res, configs) => void;
}) => {
  return config.content
    ? typeof config.content === 'function'
      ? config.content({ ...config, ...config?.props?.variable })
      : config.content
    : config.children &&
        config.children
          .sort((a, b) => (a?.order && b?.order ? a.order - b.order : 0))
          .map((item: any, index: number) => (
            <Renderer
              key={item?.id || index}
              {...injectProps}
              {...item}
              onSuccess={onSuccess}
              onFail={onFail}
            />
          ));
};

export default renderInside;
