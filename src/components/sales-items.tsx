"use client";
import { useState } from "react";
import SalesItem from "./sales-item";

const SalesItems = () => {
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
          description="Cover sales from professional invoicing to estimates and quotes."
          icon={item.icon}
          active={active === index}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};
export default SalesItems;

const items = [
  {
    title: "Invoicing, Estimates & Quotations",
    description:
      "Cover sales from professional invoicing to estimates and quotes.",
    icon: "./icons/sales-icons/reciept.svg",
  },
  {
    title: "Installments Management",
    description:
      "Cover sales from professional invoicing to estimates and quotes.",
    icon: "./icons/sales-icons/cash.svg",
  },
  {
    title: "Sales Targets & Commissions ",
    description:
      "Cover sales from professional invoicing to estimates and quotes.",
    icon: "./icons/sales-icons/targets.svg",
  },
  {
    title: "Offers and Discounts",
    description:
      "Cover sales from professional invoicing to estimates and quotes.",
    icon: "./icons/sales-icons/offer.svg",
  },
  {
    title: "Insurance Management",
    description:
      "Cover sales from professional invoicing to estimates and quotes.",
    icon: "./icons/sales-icons/shield.svg",
  },
];
