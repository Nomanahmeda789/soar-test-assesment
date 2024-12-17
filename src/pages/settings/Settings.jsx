import React from "react";
import { SettingsWrapper } from "./Settings.styled";
import CustomTabs from "../../components/common/tabs/Tabs";
import { tabItems } from "../../config/settings/settings";

const SettingsPage = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <SettingsWrapper>
      <CustomTabs
        tabItems={tabItems}
        onChange={onChange}
        defaultActiveKey={"editProfile"}
      />
    </SettingsWrapper>
  );
};

export default SettingsPage;
