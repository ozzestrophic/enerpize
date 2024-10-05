import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const AccountingImages = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative mx-8 grid h-full w-full place-items-center md:mx-0">
      <div className="relative space-y-8 md:w-full">
        <motion.div
          onHoverStart={() => setHoveredIndex(0)}
          onHoverEnd={() => setHoveredIndex(null)}
          animate={{
            scale: hoveredIndex === 0 ? 1.05 : hoveredIndex === null ? 1 : 0.75,
            rotate: hoveredIndex === 0 ? -4 : 0,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          className="relative left-0 top-0 w-4/5 shadow-lg shadow-slate-300"
        >
          <Image src={"/chart1.png"} alt="sales" width={1000} height={1000} />
        </motion.div>
        <motion.div
          onHoverStart={() => setHoveredIndex(1)}
          onHoverEnd={() => setHoveredIndex(null)}
          animate={{
            scale: hoveredIndex === 1 ? 1.05 : hoveredIndex === null ? 1 : 0.75,
            rotate: hoveredIndex === 1 ? 4 : 0,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          className="top-1/5 relative left-[20%] w-4/5 shadow-lg shadow-slate-300"
        >
          <Image src={"/chart2.png"} alt="sales" width={1000} height={1000} />
        </motion.div>
        <motion.div
          onHoverStart={() => setHoveredIndex(2)}
          onHoverEnd={() => setHoveredIndex(null)}
          animate={{
            scale: hoveredIndex === 2 ? 1.05 : hoveredIndex === null ? 1 : 0.75,
            rotate: hoveredIndex === 2 ? -4 : 0,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          className="relative bottom-0 left-0 w-4/5 shadow-lg shadow-slate-300"
        >
          <Image src={"/chart3.png"} alt="sales" width={1000} height={1000} />
        </motion.div>
      </div>
    </div>
  );
};
export default AccountingImages;
