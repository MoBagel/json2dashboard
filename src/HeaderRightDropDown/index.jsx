import { Tag, Space } from "antd";
import React from "react";
import "./index.less";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;

// import Avatar from "./AvatarDropdown";
// import SelectLang from "./SelectLang";
// import ExplorationDropdown from "./ExplorationDropdown";
// import InfoDropdown from "./InfoDropdown";

const styles = {};

const ENVTagColor = {
  dev: "orange",
  test: "green",
  pre: "#87d068",
};

const GlobalHeaderRight = ({ layout, navTheme, versionLabel }) => {
  let className = styles.right;

  if ((navTheme === "dark" && layout === "top") || layout === "mix") {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className} size={32}>
      {/* <InfoDropdown />
      <ExplorationDropdown />
      <Avatar /> */}
      <Wrapper>123</Wrapper>
      21321321321
      {versionLabel && (
        <span>
          <Tag color={ENVTagColor[versionLabel]}>{versionLabel}</Tag>
        </span>
      )}
      {/* <SelectLang /> */}
    </Space>
  );
};
export default GlobalHeaderRight;
