import type { MouseEventHandler } from 'react';
import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import renders from './Render';
import Renderer from '../Renderer';

const MenuList: React.FC<{
  onDownload: MouseEventHandler<HTMLDivElement> | undefined;
}> = ({ onDownload }): React.ReactElement => {
  return (
    <Menu>
      <Menu.Item>
        <div onClick={onDownload}>Donwload csv</div>
      </Menu.Item>
    </Menu>
  );
};

const DownloadTable: React.FC<{
  config: {
    type: any;
    id?: string;
    props: any;
    children: any;
    content?: any;
    isColumn?: boolean;
    isDownload?: boolean;
    apiConfigs: {
      type: string;
    };
  };
  injectStyles: HTMLStyleElement;
  onRequest: (config) => void;
}> = ({ config, injectStyles, onRequest = () => {} }) => {
  const RenderComp = renders(config.type);

  const handleDownload = () => {
    onRequest(config.apiConfigs);
  };

  return (
    <RenderComp
      {...config.props}
      extra={
        <Dropdown overlay={<MenuList onDownload={handleDownload} />}>
          <a className="ant-dropdown-link">
            Download <DownOutlined />
          </a>
        </Dropdown>
      }
      style={{ ...config?.props?.style, ...injectStyles }}
      onRequest={onRequest}
    >
      {config.content
        ? typeof config.content === 'function'
          ? config.content({ ...config })
          : config.content
        : config.children &&
          config.children
            .slice()
            .sort((a: { order: number }, b: { order: number }) => a.order - b.order)
            .map((c: any) => <Renderer key={c?.id} {...c} onRequest={onRequest} />)}
    </RenderComp>
  );
};

export default DownloadTable;
