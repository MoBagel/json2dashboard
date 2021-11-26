import React from "react";
import { Menu } from "antd";
import styles from "./index.less";
import { QuestionCircleOutlined } from "@ant-design/icons";
import HeaderDropdown from "../HeaderDropdown";

import {
  pushEventVisitSupportPage,
  pushEventVisitFQAPage,
} from "@/tracking/commonEvent";

const QuestionMenu = () => {
  const { formatMessage } = useIntl();
  return (
    <Menu>
      <Menu.Item
        onClick={() => {
          pushEventVisitSupportPage();
          window.open("https://www.8ndpoint.com/contact");
        }}
      >
        {formatMessage({ id: "common.nav.contact" })}
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          pushEventVisitFQAPage();
          window.open("https://www.8ndpoint.com/faq");
        }}
      >
        {formatMessage({ id: "common.nav.faq" })}
      </Menu.Item>
    </Menu>
  );
};

export default () => {
  return (
    <HeaderDropdown overlay={<QuestionMenu />} placement="bottomRight">
      <span className={styles.action}>
        <QuestionCircleOutlined />
      </span>
    </HeaderDropdown>
  );
};
