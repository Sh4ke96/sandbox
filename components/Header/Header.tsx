import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { BsFillInfoSquareFill, BsFillBrightnessHighFill } from "react-icons/bs";

const Header: FC = () => {
  return (
    <header className="container mx-auto">
      <nav className="flex justify-between items-center py-8 mb-32">
        <Link href="/">
          <Image
            src="/img/logo.png"
            alt="sandbox logo"
            width="150"
            height="25"
          />
        </Link>
        <ul className="flex items-center gap-x-12 font-medium text-xl">
          <li className="mt-2 group transition duration-300">
            <Link href="/about">About</Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange"></span>
          </li>
          <li className="mt-2 group transition duration-300">
            <Link href="/services">Services</Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange"></span>
          </li>
          <li className="mt-2 group transition duration-300">
            <Link href="/team">Team</Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange"></span>
          </li>
          <li className="mt-2 group transition duration-300">
            <Link href="/solutions">Solutions</Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange"></span>
          </li>
          <li className="mt-2 group transition duration-300">
            <Link href="/pricing">Pricing</Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange"></span>
          </li>
          <li className="mt-2 group transition duration-300">
            <Link href="/blog">Blog</Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange"></span>
          </li>
          <li className="mt-2 group transition duration-300">
            <Link href="/contact">Contact</Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange"></span>
          </li>
        </ul>
        <div className="flex items-center gap-x-6">
          <BsFillBrightnessHighFill className="text-black text-2xl" />
          <BsFillInfoSquareFill className="text-black text-2xl" />
        </div>
      </nav>
      <div className="grid grid-cols-2 gap-x-16 items-center">
        <div className="col-span-1">
          <Image
            src="/img/hero-bg.png"
            alt="man with laptop and rocket"
            width={0}
            height={0}
            sizes={"100vw"}
            className="w-full h-auto "
          />
        </div>
        <div className="col-span-1 px-20">
          <h1 className="mb-8">Grow Your Business with Our Solutions.</h1>
          <p className="mb-8">
            We help our clients to increase their website traffic, rankings and
            visibility in search results.
          </p>
          <Button>Try it for free</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
