"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <div className="relative h-fit w-full">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Image
          src={"/hero-top.png"}
          alt="chart"
          width={800}
          height={800}
          className="absolute right-[5%] top-[2%] w-[80%]"
        />
      </motion.div>
      <Image
        src={"/hero-chart-1.png"}
        alt="chart"
        width={800}
        height={800}
        className="absolute right-[5%] top-[20%] w-[30%]"
      />
      <Image
        src={"/hero-chart-2.png"}
        alt="chart"
        width={800}
        height={800}
        className="absolute right-[52%] top-[25%] w-[30%] translate-x-1/2"
      />
      <Image
        src={"/hero-sidemenu.png"}
        alt="chart"
        width={800}
        height={800}
        className="absolute left-[6%] top-[18%] w-[25%]"
      />
      <Image
        src={"/hero-image.png"}
        alt="hero"
        layout="responsive"
        width={1000}
        height={1000}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};
export default HeroImage;
