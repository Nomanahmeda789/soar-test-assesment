import { ReactComponent as DashboardIcon } from "../../assets/icon/dashboard-icon.svg";
import { ReactComponent as TransactionIcon } from "../../assets/icon/transaction.svg";
import { ReactComponent as AccountsIcon } from "../../assets/icon/accounts.svg";
import { ReactComponent as InvestmentIcon } from "../../assets/icon/investment.svg";
import { ReactComponent as CreditsIcon } from "../../assets/icon/credits-card.svg";
import { ReactComponent as LoanIcon } from "../../assets/icon/loan.svg";
import { ReactComponent as ServiceIcon } from "../../assets/icon/service.svg";
import { ReactComponent as PrivilegesIcon } from "../../assets/icon/privileges.svg";
import { ReactComponent as SettingIcon } from "../../assets/icon/setting.svg";

export const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon width={22} height={22} />,
    path: "/dashboard",
  },
  {
    id: "transactions",
    label: "Transactions",
    icon: <TransactionIcon width={22} height={22} />,
    path: "/transactions",
  },
  {
    id: "accounts",
    label: "Accounts",
    icon: <AccountsIcon width={22} height={22} />,
    path: "/accounts",
  },
  {
    id: "investments",
    label: "Investments",
    icon: <InvestmentIcon width={22} height={22} />,
    path: "/investments",
  },
  {
    id: "credit-cards",
    label: "Credit Cards",
    icon: <CreditsIcon width={22} height={22} />,
    path: "/credit-cards",
  },
  {
    id: "loans",
    label: "Loans",
    icon: <LoanIcon width={22} height={22} />,
    path: "/loans",
  },
  {
    id: "services",
    label: "Services",
    icon: <ServiceIcon width={22} height={22} />,
    path: "/services",
  },
  {
    id: "privileges",
    label: "My Privileges",
    icon: <PrivilegesIcon width={22} height={22} />,
    path: "/privileges",
  },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingIcon width={22} height={22} />,
    path: "/settings",
  },
];
