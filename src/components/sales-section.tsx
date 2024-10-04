import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionHeading from "@/components/section-heading";
import SalesItems from "./sales-items";

const SalesSection = () => {
  return (
    <MaxWidthWrapper>
      <section className="space-y-10 py-20">
        <SectionHeading
          tag="Sales"
          title="Track Sales, Invoices, and Clients Payments"
          description=""
        />
        <SalesItems />
      </section>
    </MaxWidthWrapper>
  );
};
export default SalesSection;
