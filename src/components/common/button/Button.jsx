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
        icon={icon}
        htmlType={htmlType}
        className={` ${className} btn `}
      >
        {title}
      </Button>
    </ButtonWrapper>
  );
};

export default CustomButton;
