import { Menu } from 'antd';
import React from 'react';
import { useIntl } from 'umi';
// import styles from './index.less';
import { MoreOutlined, HomeOutlined } from '@ant-design/icons';
import HeaderDropdown from '../HeaderDropdown';
import { getSsoUrl } from '@/utils/utils';
import { useModel } from '@@/plugin-model/useModel';

const styles = {};

const ServiceMenu = () => {
  const { formatMessage } = useIntl();
  const { initialState } = useModel('@@initialState');
  const services = initialState?.currentUser?.settings?.services || [];
  const appList = services
    .filter((service) => service.serviceName !== 'restock')
    .map((service) => {
      return {
        name: formatMessage({ id: `common.service.${service.serviceName}` }),
        url: service.externalDomain,
      };
    });
  return (
    <Menu className={styles.shadow} mode="inline">
      <Menu.Item
        icon={<HomeOutlined />}
        onClick={() => {
          window.location.assign(`${getSsoUrl()}`);
        }}
      >
        {formatMessage({ id: 'common.nav.home' })}
      </Menu.Item>
      {appList.map((app) => {
        return (
          <Menu.Item
            onClick={() => {
              window.open(app.url);
            }}
          >
            {app.name}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default () => {
  return (
    <HeaderDropdown overlay={<ServiceMenu />} placement="bottomRight">
      <span className={styles.action}>
        <MoreOutlined />
      </span>
    </HeaderDropdown>
  );
};
