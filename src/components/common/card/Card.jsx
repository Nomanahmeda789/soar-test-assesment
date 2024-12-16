import React from "react";
import { Card } from "antd";
import { CardWrapper } from "./Card.styled";

const CustomCard = ({
  title,
  cardIcon,
  tagColor,
  statusTitle,
  className,
  bordered,
  hoverable,
  children,
}) => {
  return (
    <CardWrapper>
      <Card
        title={
          title && (
            <div className="card-title-status-section">
              <div className="card-title-icon">
                <div>
                  <img src={cardIcon} className="card-icon" />
                </div>
                <div className="title-text">{title}</div>
              </div>
            </div>
          )
        }
        className={className}
        bordered={bordered}
        hoverable={hoverable}
      >
        {children}
      </Card>
    </CardWrapper>
  );
};

export default CustomCard;
