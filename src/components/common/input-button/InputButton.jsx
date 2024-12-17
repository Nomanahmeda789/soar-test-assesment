import React from "react";
import { InputLabel, InputField, SendButton, Icon } from "./InputButton.styled";
import { InputButtonWrapper } from "./InputButton.styled";
import { ReactComponent as SendIcon } from "../../../assets/icon/send-icon.svg";

const InputButton = ({ placeholder, buttonText, value, onChange, onClick }) => {
  return (
    <InputButtonWrapper>
      <label className="input-label">Write Amount</label>
      <div className="input">
        <input
          type="text"
          className="input-field"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button className="send-button" onClick={onClick}>
          {buttonText}
          <span className="icon">
            <SendIcon height={20} width={20} />
          </span>
        </button>
      </div>
    </InputButtonWrapper>
  );
};

export default InputButton;
