import React from "react";
import { CreditCardWrapper } from "./CreditCard.styled";
import CustomCard from "../card/Card";
import { ReactComponent as BlackChipIcon } from "../../../assets/icon/chip-card.svg";
import { ReactComponent as WhiteChipIcon } from "../../../assets/icon/white-chip-card.svg";
import { ReactComponent as BlackCircleIcon } from "../../../assets/icon/two-circle.svg";
import { ReactComponent as WhiteCircleIcon } from "../../../assets/icon/two-circle-icon-white.svg";

const CreditCard = ({ whiteCard }) => {
  return (
    <CreditCardWrapper>
      <CustomCard
        hoverable
        className={`${whiteCard ? "white-card" : "black-card"}`}
      >
        <div className="balance-chip-section">
          <div className="balance-number">
            <div
              className={`${whiteCard ? "balance-text-white" : "balance-text"}`}
            >
              Balance
            </div>
            <div
              className={`${
                whiteCard ? "balance-amount-white" : "balance-amount"
              }`}
            >
              $5,756
            </div>
          </div>
          <div>{whiteCard ? <WhiteChipIcon /> : <BlackChipIcon />}</div>
        </div>
        <div className="card-holder-valid">
          <div>
            <div
              className={`${
                whiteCard ? "card-holder-text-white" : "card-holder-text"
              }`}
            >
              CARD HOLDER
            </div>
            <div className={`${whiteCard ? "card-name-white" : "card-name"}`}>
              Eddy Cusuma
            </div>
          </div>
          <div>
            <div
              className={`${
                whiteCard ? "card-holder-text-white" : "card-holder-text"
              }`}
            >
              VALID THRU
            </div>
            <div className={`${whiteCard ? "card-name-white" : "card-name"} `}>
              12/22
            </div>
          </div>
        </div>
        <div
          className={`${
            whiteCard ? "account-number-icon-white" : "account-number-icon"
          }`}
        >
          <div
            className={`${
              whiteCard ? "account-number-white" : "account-number"
            }`}
          >
            3778 **** **** 1234
          </div>
          {whiteCard ? <WhiteCircleIcon /> : <BlackCircleIcon />}
        </div>
      </CustomCard>
    </CreditCardWrapper>
  );
};

export default CreditCard;
