"use client";
import { useState } from "react";
import SalesItem from "./sales-item";

const array = [1, 2, 3, 4, 5];

const SalesItems = () => {
  const [active, setActive] = useState(0);

  const onClick = (index: number) => {
    setActive(index);
  };
  return (
    <div className="">
      {array.map((item, index) => (
        <SalesItem
          key={index}
          title="Invoicing, Estimates & Quotations"
          description="Cover sales from professional invoicing to estimates and quotes."
          icon={"./icons/apps-icons/CRM.svg"}
          active={active === index}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};
export default SalesItems;
