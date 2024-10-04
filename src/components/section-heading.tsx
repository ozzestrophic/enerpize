type Props = {
  tag: string;
  title: string;
  description: string;
};

const SectionHeading = ({ tag, title, description }: Props) => {
  return (
    <div className="flex flex-col gap-6 lg:w-1/2">
      <p className="font-semibold text-muted-foreground">{tag}</p>
      <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
      <p className="font-medium text-muted-foreground">{description}</p>
    </div>
  );
};
export default SectionHeading;
