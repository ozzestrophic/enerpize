type Props = {
  tag: string;
  title: string;
  description: string;
};

const SectionHeading = ({ tag, title, description }: Props) => {
  return (
    <div className="flex w-1/2 flex-col gap-6">
      <p className="font-semibold text-muted-foreground">{tag}</p>
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="font-medium text-muted-foreground">{description}</p>
    </div>
  );
};
export default SectionHeading;
