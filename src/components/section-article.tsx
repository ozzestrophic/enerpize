import { ChevronRight } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  icon: string;
};

const SectionArticle = ({ title, description, icon }: Props) => {
  return (
    <article className="flex items-start gap-4">
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
    </article>
  );
};
export default SectionArticle;
