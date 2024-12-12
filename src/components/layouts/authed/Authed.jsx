import React from "react";
import { AuthedWrapper } from "./Authed.styled";

export default function AuthedLayout({ children }) {
  return (
    <AuthedWrapper>
      <div className="children">{children}</div>
    </AuthedWrapper>
  );
}
