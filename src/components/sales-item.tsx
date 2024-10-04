"use client";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type SalesItemProps = {
  title: string;
  description: string;
  icon: string;
  active?: boolean;
  onClick?: () => void;
};

// TODO: animate items
const SalesItem = ({
  title,
  description,
  icon,
  active,
  onClick,
}: SalesItemProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-start gap-4 border-b border-gray-200 px-2 py-6",
        active ? "border-solid" : "border-dashed",
      )}
    >
      <Image src={icon} alt="icon" width={24} height={24} />
      <div className="space-y-2">
        <h4 className="font-semibold">{title}</h4>
        {active && (
          <p className="">
            {description}
            <Link href={"#"} className="ml-1 text-primary">
              Learn More <ArrowRight className="inline-block h-4 w-4" />
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default SalesItem;
