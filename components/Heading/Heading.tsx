import { title } from "process";
import { FC } from "react";

interface HeadingProps {
  title?: string;
  subtitle?: string;
}

const Heading: FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center max-w-lg mb-10 text-center">
      <p className="mb-4 font-medium uppercase text-gray">{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Heading;
