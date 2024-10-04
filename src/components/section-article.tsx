import { AxeIcon } from "lucide-react";

const SectionArticle = () => {
  return (
    <article className="flex gap-4">
      <div className="">
        <AxeIcon className="h-8 w-8" />
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Sales</h3>
        <p className="font-medium text-muted-foreground">
          Billing & Invoicing, POS, Offers, Price Lists, Insurance Management,
          Sales Targets & Commissions, Installments
        </p>
      </div>
    </article>
  );
};
export default SectionArticle;
