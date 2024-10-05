import Image from "next/image";
import { motion } from "framer-motion";

const AccountingImages = () => {
  return (
    <div className="relative mx-8 grid h-full w-full place-items-center md:mx-0">
      <div className="relative space-y-8 md:w-full">
        <motion.div
          whileHover={{ scale: 1.05, rotate: -4 }}
          className="relative left-0 top-0 w-4/5 shadow-lg shadow-slate-300"
        >
          <Image src={"/chart1.png"} alt="sales" width={1000} height={1000} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, rotate: 4 }}
          className="top-1/5 relative left-[20%] w-4/5 shadow-lg shadow-slate-300"
        >
          <Image src={"/chart2.png"} alt="sales" width={1000} height={1000} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, rotate: -4 }}
          className="relative bottom-0 left-0 w-4/5 shadow-lg shadow-slate-300"
        >
          <Image src={"/chart3.png"} alt="sales" width={1000} height={1000} />
        </motion.div>
      </div>
    </div>
  );
};
export default AccountingImages;
