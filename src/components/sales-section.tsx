"use client";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionHeading from "@/components/section-heading";
import SalesItems from "./sales-items";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const SalesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  return (
    <MaxWidthWrapper>
      <motion.section
        ref={ref}
        initial={initial}
        animate={isInView && animate}
        transition={transition}
        className="grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 md:gap-8 md:py-40"
      >
        <div className="row-start-2 space-y-10 md:row-start-1">
          <SectionHeading
            tag="Sales"
            title="Track Sales, Invoices, and Clients Payments"
            description=""
          />
          <SalesItems />
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
      </motion.section>
    </MaxWidthWrapper>
  );
};
export default SalesSection;
