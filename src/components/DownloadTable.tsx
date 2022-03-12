import type { MouseEventHandler } from 'react';
import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import renders from './Render';
import Renderer from './Renderer';

const menu: React.FC<{
  onDownload: MouseEventHandler<HTMLDivElement> | undefined;
}> = ({ onDownload }) => {
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
  };
  injectStyles: HTMLStyleElement;
}> = ({ config, injectStyles }) => {
  const RenderComp = renders(config.type);

  const handleDownload = () => {
    console.log('selectedRowKeys selected:');
  };

  return (
    <RenderComp
      {...config.props}
      extra={
        <Dropdown overlay={menu({ onDownload: handleDownload })}>
          <a className="ant-dropdown-link" onClick={handleDownload}>
            Download <DownOutlined />
          </a>
        </Dropdown>
      }
      style={{ ...config?.props?.style, ...injectStyles }}
    >
      {config.content
        ? typeof config.content === 'function'
          ? config.content({ ...config })
          : config.content
        : config.children &&
          config.children
            .slice()
            .sort((a: { order: number }, b: { order: number }) => a.order - b.order)
            .map((c: any) => <Renderer key={c?.id} {...c} />)}
    </RenderComp>
  );
};

export default DownloadTable;
