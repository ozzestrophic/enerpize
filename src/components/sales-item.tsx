"use client";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type SalesItemProps = {
  title: string;
  description: string;
  icon: string;
  active?: boolean;
  onClick?: () => void;
};

const SalesItem = ({
  title,
  description,
  icon,
  active,
  onClick,
}: SalesItemProps) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={cn(
        "flex cursor-pointer items-start gap-4 border-b border-gray-200 px-2 py-6",
        active ? "border-solid" : "border-dashed",
      )}
    >
      <Image src={icon} alt="icon" width={24} height={24} />
      <div className="space-y-2">
        <h4 className="font-semibold">{title}</h4>
        <p className={active ? "" : "hidden"}>
          {description}
          <Link href={"#"} className="ml-1 text-primary">
            Learn More <ArrowRight className="inline-block h-4 w-4" />
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SalesItem;
