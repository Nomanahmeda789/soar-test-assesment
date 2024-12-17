import React from "react";
import { LoaderWrapper } from "./Loader.styled";
import { Spin } from "antd";

const CustomLoader = ({ size, content, tip }) => {
  return (
    <LoaderWrapper>
      <Spin tip={tip} size={size}>
        {content}
      </Spin>
    </LoaderWrapper>
  );
};

export default CustomLoader;
