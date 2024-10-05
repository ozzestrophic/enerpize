"use client";
import { useState } from "react";
import SalesItem from "./sales-item";

const AccountingItems = () => {
  const [active, setActive] = useState(0);

  const onClick = (index: number) => {
    setActive(index);
  };
  return (
    <div className="border-t border-dashed border-gray-200">
      {items.map((item, index) => (
        <SalesItem
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          active={active === index}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};
export default AccountingItems;

const items = [
  {
    title: "Chart of Account & Journals Accounting",
    description:
      "Automated, accurate books and journal entries, with ready-made and modifiable chart of accounts.",
    icon: "./icons/sales-icons/reciept.svg",
  },
  {
    title: "Finance & Expenses Tracking.",
    description:
      "Automated, accurate books and journal entries, with ready-made and modifiable chart of accounts.",
    icon: "./icons/sales-icons/reciept.svg",
  },
  {
    title: "Assets Management",
    description:
      "Automated, accurate books and journal entries, with ready-made and modifiable chart of accounts.",
    icon: "./icons/sales-icons/reciept.svg",
  },
  {
    title: "Cost Centers",
    description:
      "Automated, accurate books and journal entries, with ready-made and modifiable chart of accounts.",
    icon: "./icons/sales-icons/reciept.svg",
  },
  {
    title: "Cheque Cycle",
    description:
      "Automated, accurate books and journal entries, with ready-made and modifiable chart of accounts.",
    icon: "./icons/sales-icons/reciept.svg",
  },
];
