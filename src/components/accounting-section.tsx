"use client";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionHeading from "@/components/section-heading";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import AccountingItems from "./accounting-items";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AccountingImages from "./accounting-images";

const AccountingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  return (
    <div className="bg-gradient-to-br from-[#FBFCFD] to-[#F7F9FB]">
      <MaxWidthWrapper>
        <motion.section
          ref={ref}
          initial={initial}
          animate={isInView && animate}
          transition={transition}
          className="grid grid-cols-1 place-items-center gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-40"
        >
          <div className="row-start-2 space-y-10 md:row-start-1">
            <SectionHeading
              tag="Accounting"
              title="Complete Accounting and Bookkeeping"
              description=""
            />
            <AccountingItems />
            <Button
              variant={"secondary"}
              className="h-auto w-full justify-between text-wrap px-6 py-5 text-lg font-bold md:text-xl"
            >
              Do Your Bookkeeping for Free
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
          <AccountingImages />
        </motion.section>
      </MaxWidthWrapper>
    </div>
  );
};
export default AccountingSection;

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
