"use client";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionArticle from "@/components/section-article";
import SectionHeading from "@/components/section-heading";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AppsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  return (
    <MaxWidthWrapper>
      <motion.section
        ref={ref}
        initial={initial}
        animate={isInView && animate}
        transition={transition}
        className="space-y-20 py-20"
      >
        <div className="lg:w-1/2">
          <SectionHeading
            tag="Apps & Plugins"
            title="Flexible Solutions for Every Business Need"
            description="Performing equally effectively, separately and simultaneously - Utilize
          all, activate or deactivate to match your business needs."
          />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <SectionArticle
              index={index}
              key={article.title}
              icon={article.icon}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
      </motion.section>
    </MaxWidthWrapper>
  );
};
export default AppsSection;

const initial = {
  opacity: 0,
  y: 100,
};

const animate = {
  opacity: 1,
  y: 0,
};

const transition = {
  duration: 0.5,
  ease: "easeOut",
};

const articles = [
  {
    title: "Sales",
    description:
      "Billing & Invoicing, POS, Offers, Price Lists, Insurance Management, Sales Targets & Commissions, Installments",
    icon: "./icons/apps-icons/Sales.svg",
  },
  {
    title: "Accounting",
    description:
      "Expenses, Taxes, Chart of Accounts, General Ledger, Auto-Journals, Cost Centers, Treasuries, Financial Reports, Cheque Cycle, Assets Management",
    icon: "./icons/apps-icons/Accounting.svg",
  },
  {
    title: "Inventory",
    description:
      "Stock Tracking, Barcode, Purchases, Suppliers, Warehouses, Stocktaking, Requisitions, Price Lists",
    icon: "./icons/apps-icons/Inventory.svg",
  },
  {
    title: "Human Resource",
    description:
      "Employees Management, Contracts, Payroll, Loans,  Attendance & Leaves Management, Multi-Shifts, Requests",
    icon: "./icons/apps-icons/Human-Resource.svg",
  },
  {
    title: "CRM",
    description:
      "Clients Follow-Up, Appointments, Contacts Management, Memberships, Points & Credits, Clients Attendance",
    icon: "./icons/apps-icons/CRM.svg",
  },
  {
    title: "Operations",
    description:
      "Work Orders, Project Management, Online Booking Management, Time Tracking, Manufacturing",
    icon: "./icons/apps-icons/Operations.svg",
  },
];
