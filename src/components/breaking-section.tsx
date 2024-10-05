"use client";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "./ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BreakingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <MaxWidthWrapper>
      <motion.div
        ref={ref}
        initial={initial}
        animate={isInView && animate}
        transition={transition}
        className="flex flex-col items-center justify-between gap-8 rounded-xl bg-gradient-to-tr from-[#F4F7FA] to-[#F7F8FB] px-4 py-10 text-center md:flex-row md:px-12 md:py-20 md:text-left"
      >
        <div className="space-y-4">
          <h3 className="text-3xl font-extrabold md:text-4xl">
            Customised for more than 50 industries
          </h3>
          <p className="font-medium text-muted-foreground">
            Find out your industry, find out how Enerpize fits your business for
            free.
          </p>
        </div>
        <Button className="h-fit text-wrap px-8 py-6 text-xl font-bold">
          Customize Your Experience
        </Button>
      </motion.div>
    </MaxWidthWrapper>
  );
};
export default BreakingSection;

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
