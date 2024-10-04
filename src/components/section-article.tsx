import Image from "next/image";

type Props = {
  title: string;
  description: string;
  icon: string;
};

const SectionArticle = ({ title, description, icon }: Props) => {
  return (
    <article className="flex items-start gap-4">
      <Image src={icon} alt="icon" width={32} height={32} />
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </article>
  );
};
export default SectionArticle;
