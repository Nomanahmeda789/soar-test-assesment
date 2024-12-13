import React from "react";
import { AuthedWrapper } from "./Authed.styled";
import AuthedSideBar from "./sidebar/AuthedSideBar";
import AuthedHeader from "./header/AuthedHeader";
const AuthedLayout = ({ children }) => {
  return (
    <AuthedWrapper>
      <div className="authed-container">
        <div>
          <AuthedSideBar />
        </div>
        <div className="authed-header-children">
          <div>
            <AuthedHeader />
          </div>
          <div className="children">{children}</div>
        </div>
      </div>
    </AuthedWrapper>
  );
};

export default AuthedLayout;
