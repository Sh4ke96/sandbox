import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface CardAboutProps {
  image: string;
  alt: string;
  title?: string;
  text?: string;
  button?: string;
}

const CardAbout: FC<CardAboutProps> = ({ image, alt, title, text, button }) => {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-md shadow-card min-h-[20rem]">
      <Image width={52} height={52} src={image} alt={alt} className="mb-4" />
      <h3 className="mb-4 text-xl">{title}</h3>
      <p className="mb-4 text-center text-darkGray">{text}</p>
      <Link className="font-bold transition duration-300 group" href="/">
        {button}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange"></span>
      </Link>
    </div>
  );
};

export default CardAbout;
