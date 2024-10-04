import Image from "next/image";

type Props = {
  text: string;
  icon?: string;
};

const Button = ({ text, icon }: Props) => {
  return (
    <button className="font-semibold bg-primary px-8 py-2 text-white rounded">
      {icon && (
        <Image
          src={icon}
          className="mr-2"
          alt="Enerpize Logo"
          width={20}
          height={20}
        />
      )}
      {text}
    </button>
  );
};
export default Button;
