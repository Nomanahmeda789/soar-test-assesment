import React from "react";
import { NotFoundWrapper } from "./NotFound.styled";

const PageNotFound = () => {
  return (
    <NotFoundWrapper>
      <div className="not-found-header">404 - Page Not Found</div>
      <div className="not-found-desc">
        The page you are looking for does not exist.
      </div>
    </NotFoundWrapper>
  );
};

export default PageNotFound;
