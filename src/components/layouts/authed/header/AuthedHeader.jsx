import React from "react";
import { HeaderWrapper } from "./AuthedHeader.styled";
import CustomInput from "../../../common/input/Input";
import { ReactComponent as SearchIcon } from "../../../../assets/icon/search.svg";
import { ReactComponent as BellIcon } from "../../../../assets/icon/bell.svg";
import { ReactComponent as SettingIcon } from "../../../../assets/icon/setting.svg";
import { ReactComponent as MenuIcon } from "../../../../assets/icon/menu-icon.svg";
import ProfileIcon from "../../../../assets/icon/user-image.svg";

const AuthedHeader = ({ showDrawer }) => {
  return (
    <HeaderWrapper>
      <div className="desktop-header-main">
        <div className="header-text">Overview</div>
        <div className="right">
          <div>
            <CustomInput
              type="text"
              placeholder="Search for something"
              prefix={<SearchIcon width={20} height={20} />}
            />
          </div>
          <div className="icon">
            <SettingIcon width={20} height={20} />
          </div>
          <div className="icon">
            <BellIcon width={20} height={20} />
          </div>
          <div>
            <img
              src={ProfileIcon}
              width={50}
              height={50}
              className="profile-icon"
            />
          </div>
        </div>
      </div>
      <div className="mobile-header-main">
        <div className="menu-header-icon">
          <MenuIcon className="menu-icon" onClick={showDrawer} />
          <div className="header-text">Overview</div>
          <img
            src={ProfileIcon}
            width={50}
            height={50}
            className="profile-icon"
          />
        </div>
        <div>
          <CustomInput
            className="header-input"
            type="text"
            placeholder="Search for something"
            prefix={
              <SearchIcon width={20} height={20} className="search-icon" />
            }
          />
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default AuthedHeader;
