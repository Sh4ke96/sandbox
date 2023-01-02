import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { BsFillInfoSquareFill, BsFillBrightnessHighFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Header: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <header className="container mx-auto">
      <nav className="flex justify-between items-center py-8 px-4 mb-8 lg:mb-32">
        <Link href="/">
          <Image
            src="/img/logo.png"
            alt="sandbox logo"
            width="150"
            height="25"
          />
        </Link>
        <ul className="hidden lg:flex items-center gap-x-12 font-medium text-xl">
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
        {navbarOpen && (
          <div className="bg-black fixed top-0 left-0 h-screen w-2/4">
            <ul className="h-full flex flex-col justify-center items-center gap-y-4 font-medium text-xl text-white">
              <li className="group transition duration-300">
                <Link href="/about">About</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange"></span>
              </li>
              <li className="group transition duration-300">
                <Link href="/services">Services</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange"></span>
              </li>
              <li className="group transition duration-300">
                <Link href="/team">Team</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange"></span>
              </li>
              <li className="group transition duration-300">
                <Link href="/solutions">Solutions</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange"></span>
              </li>
              <li className="group transition duration-300">
                <Link href="/pricing">Pricing</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange"></span>
              </li>
              <li className="group transition duration-300">
                <Link href="/blog">Blog</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange"></span>
              </li>
              <li className="group transition duration-300">
                <Link href="/contact">Contact</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange"></span>
              </li>
            </ul>
          </div>
        )}
        <div className="flex items-center gap-x-6">
          <BsFillBrightnessHighFill className="text-black text-2xl cursor-pointer" />
          <BsFillInfoSquareFill className="text-black text-2xl cursor-pointer" />
          <FaBars
            className="lg:hidden text-black text-2xl cursor-pointer"
            onClick={handleToggle}
          />
        </div>
      </nav>
      <div className="grid grid-cols-1 gap-y-12 px-16 mb-12 lg:grid-cols-2 gap-x-16 items-center">
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
        <div className="col-span-1 lg:px-20">
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
