import React, { useState } from "react";
import { SideBarWrapper } from "./AuthedSideBar.styled";
import { ReactComponent as SoarIcon } from "../../../../assets/icon/soar-icon.svg";
import { ReactComponent as DashboardIcon } from "../../../../assets/icon/dashboard-icon.svg";
import { ReactComponent as TransactionIcon } from "../../../../assets/icon/transaction.svg";
import { ReactComponent as AccountsIcon } from "../../../../assets/icon/accounts.svg";
import { ReactComponent as InvestmentIcon } from "../../../../assets/icon/investment.svg";
import { ReactComponent as CreditsIcon } from "../../../../assets/icon/credits-card.svg";
import { ReactComponent as LoanIcon } from "../../../../assets/icon/loan.svg";
import { ReactComponent as ServiceIcon } from "../../../../assets/icon/service.svg";
import { ReactComponent as PrivilegesIcon } from "../../../../assets/icon/privileges.svg";
import { ReactComponent as SettingIcon } from "../../../../assets/icon/setting.svg";

const AuthedSideBar = () => {
  const [selected, setSelected] = useState("dashboard");
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <DashboardIcon width={22} height={22} />,
    },
    {
      id: "transactions",
      label: "Transactions",
      icon: <TransactionIcon width={22} height={22} />,
    },
    {
      id: "accounts",
      label: "Accounts",
      icon: <AccountsIcon width={22} height={22} />,
    },
    {
      id: "investments",
      label: "Investments",
      icon: <InvestmentIcon width={22} height={22} />,
    },
    {
      id: "credit-cards",
      label: "Credit Cards",
      icon: <CreditsIcon width={22} height={22} />,
    },
    { id: "loans", label: "Loans", icon: <LoanIcon width={22} height={22} /> },
    {
      id: "services",
      label: "Services",
      icon: <ServiceIcon width={22} height={22} />,
    },
    {
      id: "privileges",
      label: "My Privileges",
      icon: <PrivilegesIcon width={22} height={22} />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <SettingIcon width={22} height={22} />,
    },
  ];

  return (
    <SideBarWrapper>
      <div className="side-bar-header-section">
        <SoarIcon width={24} height={29} />
        <div className="soar-header">Soar Task</div>
      </div>
      <div className="menu-section">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${selected === item.id ? "active" : ""}`}
            onClick={() => setSelected(item.id)}
          >
            {item?.icon}
            <div className="menu-label">{item.label}</div>
          </div>
        ))}
      </div>{" "}
    </SideBarWrapper>
  );
};

export default AuthedSideBar;
