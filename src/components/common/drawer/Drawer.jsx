import React from "react";
import { DrawerWrapper } from "./Drawer.styled";
import { Drawer } from "antd";

const CustomDrawer = ({
  title,
  closable,
  placement,
  children,
  onClose,
  open,
  className,
}) => {
  return (
    <DrawerWrapper>
      <Drawer
        className={className}
        title={title}
        placement={placement}
        closable={closable}
        onClose={onClose}
        open={open}
        key={placement}
      >
        {children}
      </Drawer>
    </DrawerWrapper>
  );
};

export default CustomDrawer;
