import React from "react";
import { CreditCardWrapper } from "./CreditCard.styled";
import CustomCard from "../card/Card";
import { ReactComponent as BlackChipIcon } from "../../../assets/icon/chip-card.svg";
import { ReactComponent as WhiteChipIcon } from "../../../assets/icon/white-chip-card.svg";
import { ReactComponent as BlackCircleIcon } from "../../../assets/icon/two-circle.svg";
import { ReactComponent as WhiteCircleIcon } from "../../../assets/icon/two-circle-icon-white.svg";

const CreditCard = ({ whiteCard, card, id }) => {
  return (
    <CreditCardWrapper>
      <CustomCard className={`${whiteCard ? "white-card" : "black-card"}`}>
        <div className="balance-chip-section" key={id}>
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
              {card?.balance}
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
              {card?.holderName}
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
              {card?.validThru}
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
            {card?.accountNumber}
          </div>
          {whiteCard ? <WhiteCircleIcon /> : <BlackCircleIcon />}
        </div>
      </CustomCard>
    </CreditCardWrapper>
  );
};

export default CreditCard;
