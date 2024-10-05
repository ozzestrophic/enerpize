import Image from "next/image";
import { motion } from "framer-motion";

const image1 = {
  start: {
    scale: 1,
    rotate: 0,
  },
  hovered: {
    scale: 0.9,
    rotate: 4,
  },
};
const image2 = {
  start: {
    scale: 1,
    rotate: -4,
  },
  hovered: {
    scale: 0.9,
    rotate: -8,
  },
};
const SalesImages = () => {
  return (
    <motion.div
      initial="start"
      whileHover="hovered"
      className="relative overflow-hidden p-8 md:p-4"
    >
      <motion.div variants={image1} className="relative z-20">
        <Image
          src={"/reciept-image.png"}
          alt="sales"
          width={1000}
          height={1000}
        />
      </motion.div>
      <motion.div variants={image2} className="absolute top-0 z-10 p-8 md:p-4">
        <Image
          src={"/reciept-image.png"}
          alt="sales"
          width={1000}
          height={1000}
        />
      </motion.div>
    </motion.div>
  );
};
export default SalesImages;
