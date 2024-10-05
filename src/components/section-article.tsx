import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  title: string;
  description: string;
  icon: string;
  index: number;
};

const SectionArticle = ({ title, description, icon, index }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView && { opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        x: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
        opacity: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
      }}
      className="flex items-start gap-4"
    >
      <Image
        src={icon}
        alt="icon"
        className="h-6 w-6 md:h-8 md:w-8"
        width={32}
        height={32}
      />
      <div className="space-y-4">
        <div className="flex items-center gap-1">
          <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
          <ChevronRight className="h-8 w-8 text-primary" />
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.article>
  );
};
export default SectionArticle;
