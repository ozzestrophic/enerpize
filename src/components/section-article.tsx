import { AxeIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  // icon: JSX.Element;
};

const SectionArticle = ({ title, description }: Props) => {
  return (
    <article className="flex gap-4">
      <div className="">
        <AxeIcon className="h-8 w-8" />
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </article>
  );
};
export default SectionArticle;
