import React from 'react';
import type { MouseEventHandler } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import renders from '../utils/render';

import type { RenderProps } from '../../Renderer';

import RenderInside from '../utils/renderInside';

import apiRequest from '../utils/apiRequest';

const MenuList: React.FC<{
  onDownload?: MouseEventHandler<HTMLDivElement>;
}> = ({ onDownload }): React.ReactElement => {
  return (
    <Menu>
      <Menu.Item>
        <div onClick={onDownload}>Donwload csv</div>
      </Menu.Item>
    </Menu>
  );
};

const DownloadCard: React.FC<{
  config: RenderProps;
  injectStyles: HTMLStyleElement;
  onSuccess: (res, configs) => void;
  onFail: (res, configs) => void;
}> = ({ config, injectStyles, onSuccess = () => {}, onFail = () => {} }) => {
  const RenderComp = renders(config.type);

  const handleFetch = () => {
    return apiRequest({ config, onSuccess, onFail });
  };

  return (
    <RenderComp
      {...config.props}
      extra={
        <Dropdown overlay={<MenuList onDownload={handleFetch} />}>
          <a className="ant-dropdown-link">
            {config.content || 'Download'} <DownOutlined />
          </a>
        </Dropdown>
      }
      style={{ ...config?.props?.style, ...injectStyles }}
      onSuccess={onSuccess}
      onFail={onFail}
    >
      {RenderInside({ config, onSuccess, onFail })}
    </RenderComp>
  );
};

export default DownloadCard;
