import React from "react";
import { SettingsWrapper } from "./Settings.styled";
import CustomTabs from "../../components/common/tabs/Tabs";
import { tabitems } from "../../config/setting";

const SettingsPage = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <SettingsWrapper>
      <CustomTabs
        tabItems={tabitems}
        onChange={onChange}
        defaultActiveKey={"editProfile"}
      />
    </SettingsWrapper>
  );
};

export default SettingsPage;
