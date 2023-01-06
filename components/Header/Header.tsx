import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { BsFillInfoSquareFill, BsFillBrightnessHighFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Header: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [fixed, setFixed] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setFixed(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <header className="">
      <nav
        className={`${
          fixed
            ? "fixed w-full z-50 py-8 px-4 mb-8 lg:mb-32 bg-white bg-opacity-90 shadow-base"
            : "fixed w-full z-50 py-8 px-4 mb-8 lg:mb-32"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
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
            <div className="bg-orange fixed top-0 left-0 z-50 h-screen w-full lg:hidden">
              <ul className="h-full flex flex-col justify-center items-center gap-y-8 font-medium text-3xl text-black">
                <li className="group transition duration-300">
                  <Link href="/about">About</Link>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                </li>
                <li className="group transition duration-300">
                  <Link href="/services">Services</Link>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                </li>
                <li className="group transition duration-300">
                  <Link href="/team">Team</Link>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                </li>
                <li className="group transition duration-300">
                  <Link href="/solutions">Solutions</Link>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                </li>
                <li className="group transition duration-300">
                  <Link href="/pricing">Pricing</Link>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                </li>
                <li className="group transition duration-300">
                  <Link href="/blog">Blog</Link>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                </li>
                <li className="group transition duration-300">
                  <Link href="/contact">Contact</Link>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                </li>
              </ul>
            </div>
          )}
          <div className="flex items-center gap-x-6 z-50">
            <BsFillBrightnessHighFill className="text-black text-2xl cursor-pointer" />
            <BsFillInfoSquareFill className="text-black text-2xl cursor-pointer" />
            <FaBars
              className="lg:hidden text-black text-2xl cursor-pointer"
              onClick={handleToggle}
            />
          </div>
        </div>
      </nav>
      <div className="container mx-auto grid grid-cols-1 gap-y-12 px-8 mb-12 pt-28 lg:grid-cols-2 lg:ap-x-16 lg:items-center lg:pt-48 lg:px-16">
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
