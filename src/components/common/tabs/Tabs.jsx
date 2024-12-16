import React, { useState } from "react";
import { TabsWrapper } from "./Tabs.styled";

const CustomTabs = ({ defaultActiveKey, tabItems, tabContentClass }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  const handleTabClick = (key) => {
    setActiveKey(key);
  };
  return (
    <TabsWrapper>
      <div>
        <div className="tab-header">
          {tabItems.map((tab) => (
            <div>
              <div
                key={tab.key}
                className={`tab-title ${activeKey === tab.key ? "active" : ""}`}
                onClick={() => handleTabClick(tab.key)}
              >
                {tab.label}
              </div>
              {activeKey === tab.key && (
                <div className="tab-active-border"></div>
              )}
            </div>
          ))}
        </div>
        <div className={`tab-content ${tabContentClass}`}>
          {tabItems.find((tab) => tab.key === activeKey)?.children}
        </div>
      </div>
    </TabsWrapper>
  );
};

export default CustomTabs;
