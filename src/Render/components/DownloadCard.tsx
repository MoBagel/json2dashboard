import React from 'react';
import type { MouseEventHandler } from 'react';
import { Menu, Dropdown, Card } from 'antd';
import { DownOutlined } from '@ant-design/icons';

// import type { RenderProps } from '../../Renderer';

// import renderInside from '../utils/renderInside';

import apiRequest from '../utils/apiRequest';

const MenuList: React.FC<{
  onDownload?: MouseEventHandler<HTMLDivElement>;
}> = ({ onDownload }) => {
  return (
    <Menu>
      <Menu.Item>
        <div onClick={onDownload}>Donwload csv</div>
      </Menu.Item>
    </Menu>
  );
};

const DownloadCard: React.FC<any> = ({
  variable,
  apiConfigs,
  onSuccess,
  onFail,
  children,
  label,
  ...restProps
}) => {
  const handleFetch = () => {
    return apiRequest({
      apiConfigs: apiConfigs,
      variable: variable,
      onSuccess,
      onFail,
    });
  };

  return (
    <Card
      {...restProps}
      extra={
        <Dropdown overlay={<MenuList onDownload={handleFetch} />}>
          <a className="ant-dropdown-link">
            {label || 'Download'} <DownOutlined />
          </a>
        </Dropdown>
      }
    >
      {children}
    </Card>
  );
};

export default DownloadCard;
