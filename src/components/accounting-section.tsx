import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionHeading from "@/components/section-heading";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import AccountingItems from "./accounting-items";

const AccountingSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#FBFCFD] to-[#F7F9FB]">
      <MaxWidthWrapper>
        <section className="grid grid-cols-1 place-items-center gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-40">
          <div className="row-start-2 space-y-10 md:row-start-1">
            <SectionHeading
              tag="Accounting"
              title="Complete Accounting and Bookkeeping"
              description=""
            />
            <AccountingItems />
            <Button
              variant={"secondary"}
              className="h-auto w-full justify-between px-6 py-5 text-xl font-bold"
            >
              Do Your Bookkeeping for Free
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
          <div className="relative mx-8 grid h-full w-full place-items-center md:mx-0">
            <div className="relative space-y-8 md:w-full">
              <Image
                src={"/chart1.png"}
                className="relative left-0 top-0 w-4/5"
                alt="sales"
                width={1000}
                height={1000}
              />
              <Image
                src={"/chart2.png"}
                className="top-1/5 relative left-[20%] w-4/5"
                alt="sales"
                width={1000}
                height={1000}
              />
              <Image
                src={"/chart3.png"}
                className="relative bottom-0 left-0 w-4/5"
                alt="sales"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};
export default AccountingSection;
