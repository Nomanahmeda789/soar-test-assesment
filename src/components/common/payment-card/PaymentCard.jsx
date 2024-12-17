import React from "react";
import { PaymentCardWrapper } from "./PaymentCard.styled";

const PaymentCard = ({
  icon: Icon,
  title,
  date,
  amount,
  amountColor = "black",
  backgroundColor = "#f2f2f7",
}) => {
  return (
    <PaymentCardWrapper>
      <div>
        <div className="card-content">
          <div className="left">
            {Icon && (
              <div
                className="icon-section"
                style={{ background: backgroundColor }}
              >
                <Icon />
              </div>
            )}
            <div className="card-text">
              <p className="card-title">{title}</p>
              <p className="card-date">{date}</p>
            </div>
          </div>

          <div className={`amount amount-${amountColor}`}>{amount}</div>
        </div>
      </div>
    </PaymentCardWrapper>
  );
};

export default PaymentCard;
