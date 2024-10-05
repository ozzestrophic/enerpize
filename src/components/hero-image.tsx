"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <div className="relative h-fit w-full">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: 10, scale: 1.05 }}
        className="absolute right-[5%] top-[4%] w-[80%]"
      >
        <Image src={"/hero-top.png"} alt="chart" width={800} height={800} />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ y: -20 }}
        transition={{
          scale: { delay: 0.1, duration: 0.1, type: "spring", stiffness: 50 },
        }}
        className="absolute left-[65%] top-[20%] w-[30%]"
      >
        <Image src={"/hero-chart-1.png"} alt="chart" width={800} height={800} />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ y: -20 }}
        transition={{
          scale: { delay: 0.3, duration: 0.1, type: "spring", stiffness: 50 },
        }}
        className="absolute left-[33%] top-[25%] w-[30%]"
      >
        <Image src={"/hero-chart-2.png"} alt="chart" width={800} height={800} />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ y: -20 }}
        transition={{
          scale: { delay: 0.2, duration: 0.1, type: "spring", stiffness: 50 },
        }}
        className="absolute left-[6%] top-[18%] w-[25%]"
      >
        <Image
          src={"/hero-sidemenu.png"}
          alt="chart"
          width={800}
          height={800}
        />
      </motion.div>
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
