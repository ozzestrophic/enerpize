import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionHeading from "@/components/section-heading";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import AccountingItems from "./accounting-items";

const AccountingSection = () => {
  return (
    <MaxWidthWrapper className="bg-gradient-to-br from-[#FBFCFD] to-[#F7F9FB]">
      <section className="grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 md:gap-8 md:py-40">
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
            Start Selling for Free
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>
        <div className="relative mx-8 md:mx-0">
          <Image
            src={"/reciept-image.png"}
            className="relative z-20"
            alt="sales"
            width={1000}
            height={1000}
          />
          <Image
            src={"/reciept-image.png"}
            className="absolute z-10 -translate-y-[100%] -rotate-3"
            alt="sales"
            width={1000}
            height={1000}
          />
        </div>
      </section>
    </MaxWidthWrapper>
  );
};
export default AccountingSection;
