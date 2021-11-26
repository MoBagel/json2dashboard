import React, { useCallback } from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import HeaderDropdown from '../HeaderDropdown';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.less';
import { getSsoUrl } from '../utils';

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async (apiLogout) => {
  await apiLogout();
  window.location.assign(`${getSsoUrl()}/login`);
};

const AvatarDropdown = ({ initialState, onUpdateInitialState, apiLogout }) => {
  const intl = useIntl();

  const onMenuClick = useCallback(
    (event) => {
      const { key } = event;
      if (key === 'logout' && initialState) {
        onUpdateInitialState({ ...initialState, currentUser: undefined });
        loginOut(apiLogout);
      }
    },
    [initialState, setInitialState],
  );

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser || !currentUser?.name) {
    return loading;
  }

  const menuHeaderDropdown = (
    <Menu className={styles.menu} onClick={onMenuClick}>
      <Menu.Item key="logout">
        <LogoutOutlined />
        {intl.formatMessage({
          id: 'common.nav.logout',
        })}
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar className={styles.avatar} icon={<UserOutlined />} alt="avatar" />
        {currentUser.name}
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
