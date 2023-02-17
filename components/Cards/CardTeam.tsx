import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SlSocialTwitter,
  SlSocialDribbble,
  SlSocialFacebook,
} from "react-icons/sl";

interface CardTeamProps {
  image: string;
  alt: string;
  title?: string;
  text?: string;
  names: string;
  button?: string;
}

const CardTeam: FC<CardTeamProps> = ({
  image,
  alt,
  title,
  text,
  button,
  names,
}) => {
  return (
    <div className="flex flex-col items-start p-8 bg-white rounded-md shadow-card min-h-[20rem]">
      <Image
        width={100}
        height={100}
        src={image}
        alt={alt}
        className="mb-4 rounded-full"
      />
      <h3 className="mb-2 text-xl">{names}</h3>
      <h3 className="mb-4 text-lg text-gray ">{title}</h3>
      <p className="mb-6 text-base text-darkGray">{text}</p>
      <div className="flex gap-x-8">
        <Link className="font-bold transition duration-300 group" href="/">
          <SlSocialTwitter className="text-black hover:text-orange" />
        </Link>
        <Link className="font-bold transition duration-300 group" href="/">
          <SlSocialFacebook className="text-black hover:text-orange" />
        </Link>
        <Link className="font-bold transition duration-300 group" href="/">
          <SlSocialDribbble className="text-black hover:text-orange" />
        </Link>
      </div>
    </div>
  );
};

export default CardTeam;
