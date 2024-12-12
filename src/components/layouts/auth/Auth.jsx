import React from "react";
import { AuthWrapper } from "./Auth.styled";

export default function AuthLayout({ children }) {
  return (
    <AuthWrapper>
      <div>{children}</div>
    </AuthWrapper>
  );
}
