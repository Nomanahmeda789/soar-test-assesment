import { Button } from "antd";
import React from "react";
import { ButtonWrapper } from "./Button.styled";

const CustomButton = ({ className, title, width, htmlType, icon, loading }) => {
  return (
    <ButtonWrapper>
      <Button
        loading={loading}
        icon={icon}
        htmlType={htmlType}
        className={` ${className} btn `}
        style={{ width: width }}
      >
        {title}
      </Button>
    </ButtonWrapper>
  );
};

export default CustomButton;
