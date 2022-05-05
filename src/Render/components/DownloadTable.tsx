import type { MouseEventHandler } from 'react';
import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import queryString from 'query-string';

import renders from '../utils/render';

import type { RenderProps } from '../../Renderer';

import RenderInside from '../utils/renderInside';

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

const DownloadTable: React.FC<{
  config: RenderProps;
  injectStyles: HTMLStyleElement;
  onSuccess: (res, configs) => void;
  onFail: (res, configs) => void;
}> = ({ config, injectStyles, onSuccess = () => {}, onFail = () => {} }) => {
  const RenderComp = renders(config.type);

  const handleFetch = () => {
    const { apiConfigs, variable } = config;
    if (apiConfigs?.url) {
      const body =
        apiConfigs?.payload &&
        apiConfigs?.payload.reduce((obj, selectKey) => {
          if (variable && variable[selectKey]) {
            // eslint-disable-next-line no-param-reassign
            obj = { ...obj, [selectKey]: variable[selectKey] };
          }
          return obj;
        }, {});

      const querys =
        (apiConfigs?.query &&
          apiConfigs?.query.reduce((obj, selectKey) => {
            if (variable && variable[selectKey]) {
              // eslint-disable-next-line no-param-reassign
              obj = { ...obj, [selectKey]: variable[selectKey] };
            }
            return obj;
          }, {})) ||
        {};

      const queryStr = Object.keys(querys).length ? `?${queryString.stringify(querys)}` : '';

      const payload = JSON.stringify(body);
      return fetch(apiConfigs.url + queryStr, {
        method: apiConfigs?.method || 'GET',
        headers: new Headers({
          'content-type': 'application/json',
          ...apiConfigs?.headers,
        }),
        credentials: 'include',
        body: payload,
        ...apiConfigs?.options,
      })
        .then((res) => {
          if (apiConfigs.type === 'file') {
            return res;
          }
          return res.json();
        })
        .then((res) => onSuccess(res, { ...apiConfigs, variable }))
        .catch((err) => onFail(err, { ...apiConfigs, variable }));
    }
    return null;
  };

  return (
    <RenderComp
      {...config.props}
      extra={
        <Dropdown overlay={<MenuList onDownload={handleFetch} />}>
          <a className="ant-dropdown-link">
            Download <DownOutlined />
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

export default DownloadTable;
