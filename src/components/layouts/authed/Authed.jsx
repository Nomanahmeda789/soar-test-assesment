import React, { useState } from "react";
import { AuthedWrapper } from "./Authed.styled";
import AuthedSideBar from "./sidebar/AuthedSideBar";
import AuthedHeader from "./header/AuthedHeader";
const AuthedLayout = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <AuthedWrapper>
      <div className="authed-container">
        <div className="authed-sidebar">
          <AuthedSideBar
            openDrawer={openDrawer}
            onCloseDrawer={onCloseDrawer}
          />
        </div>
        <div className="authed-header-children">
          <div>
            <AuthedHeader showDrawer={showDrawer} />
          </div>
          <div className="children">{children}</div>
        </div>
      </div>
    </AuthedWrapper>
  );
};

export default AuthedLayout;
