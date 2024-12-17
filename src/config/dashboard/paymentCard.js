import { ReactComponent as DepositIcon } from "../../assets/icon/deposit-icon.svg";
import { ReactComponent as PaypalIcon } from "../../assets/icon/paypal-icon.svg";
import { ReactComponent as DollarIcon } from "../../assets/icon/dollar-icon.svg";

export const paymentCardData = [
  {
    icon: DepositIcon,
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    amountColor: "red",
    backgroundColor: "#FFF5D9",
  },
  {
    icon: PaypalIcon,
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    amountColor: "green",
    backgroundColor: "#E7EDFF",
  },
  {
    icon: DollarIcon,
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    amountColor: "green",
    backgroundColor: "#DCFAF8",
  },
];
