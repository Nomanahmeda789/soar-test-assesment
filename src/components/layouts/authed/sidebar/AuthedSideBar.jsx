import React, { useState } from "react";
import { ReactComponent as SoarIcon } from "../../../../assets/icon/soar-icon.svg";
import { SideBarWrapper } from "./AuthedSideBar.styled";
import { menuItems } from "../../../../config/menuItems";
import CustomDrawer from "../../../common/drawer/Drawer";
import { useNavigate } from "react-router-dom";

const AuthedSideBar = ({ openDrawer, onCloseDrawer }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("dashboard");

  const handleMenuClick = (path) => {
    navigate(path);
  };
  return (
    <SideBarWrapper>
      <div className="side-bar-desktop">
        <div className="side-bar-header-section">
          <SoarIcon width={24} height={29} />
          <div className="soar-header">Soar Task</div>
        </div>
        <div className="menu-section ">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`menu-item ${selected === item.id ? "active" : ""}`}
              onClick={() => {
                setSelected(item.id);
                handleMenuClick(item?.path);
              }}
            >
              <div className="menu-border"></div> {item?.icon}
              <div className="menu-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="side-bar-mobile">
        <CustomDrawer
          placement="left"
          open={openDrawer}
          onClose={onCloseDrawer}
        >
          <SideBarWrapper>
            <div className="side-bar-header-section">
              <SoarIcon width={24} height={29} />
              <div className="soar-header">Soar Task</div>
            </div>
            <div className="menu-section ">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className={`menu-item ${
                    selected === item.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelected(item.id);
                    onCloseDrawer();
                    handleMenuClick();
                  }}
                >
                  <div className="menu-border"></div> {item?.icon}
                  <div className="menu-label">{item.label}</div>
                </div>
              ))}
            </div>
          </SideBarWrapper>
        </CustomDrawer>
      </div>
    </SideBarWrapper>
  );
};

export default AuthedSideBar;
