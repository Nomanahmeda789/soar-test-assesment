import { Button } from "antd";
import React from "react";
import { ButtonWrapper } from "./Button.styled";

const CustomButton = ({
  className,
  title,
  htmlType,
  icon,
  loading,
  buttonWrapperClass,
}) => {
  return (
    <ButtonWrapper className={buttonWrapperClass}>
      <Button
        loading={loading}
        htmlType={htmlType}
        className={` ${className} btn `}
      >
        {title} {icon}
      </Button>
    </ButtonWrapper>
  );
};

export default CustomButton;
