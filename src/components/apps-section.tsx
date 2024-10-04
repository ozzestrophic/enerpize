import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionArticle from "@/components/section-article";
import SectionHeading from "@/components/section-heading";

const articles = [
  {
    title: "Sales",
    description:
      "Billing & Invoicing, POS, Offers, Price Lists, Insurance Management, Sales Targets & Commissions, Installments",
  },
  {
    title: "Accounting",
    description:
      "Expenses, Taxes, Chart of Accounts, General Ledger, Auto-Journals, Cost Centers, Treasuries, Financial Reports, Cheque Cycle, Assets Management",
  },
  {
    title: "Inventory",
    description:
      "Stock Tracking, Barcode, Purchases, Suppliers, Warehouses, Stocktaking, Requisitions, Price Lists",
  },
  {
    title: "Human Resource",
    description:
      "Employees Management, Contracts, Payroll, Loans,  Attendance & Leaves Management, Multi-Shifts, Requests",
  },
  {
    title: "CRM",
    description:
      "Clients Follow-Up, Appointments, Contacts Management, Memberships, Points & Credits, Clients Attendance",
  },
  {
    title: "Operations",
    description:
      "Work Orders, Project Management, Online Booking Management, Time Tracking, Manufacturing",
  },
];

const AppsSection = () => {
  return (
    <MaxWidthWrapper>
      <section className="space-y-20 pt-20">
        <SectionHeading
          tag="Apps & Plugins"
          title="Flexible Solutions for Every Business Need"
          description="Performing equally effectively, separately and simultaneously - Utilize
        all, activate or deactivate to match your business needs."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <SectionArticle
              key={article.title}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
};
export default AppsSection;
