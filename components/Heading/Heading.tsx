import { FC } from "react";

interface HeadingProps {
  title?: string;
  subtitle?: string;
  textPosition: string;
}

const Heading: FC<HeadingProps> = ({ title, subtitle, textPosition }) => {
  return (
    <div className={`flex flex-col max-w-lg mb-10 ${textPosition}`}>
      <p className="mb-4 font-medium uppercase text-gray">{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Heading;
