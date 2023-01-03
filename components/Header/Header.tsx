import { FC, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { BsFillInfoSquareFill, BsFillBrightnessHighFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Header: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [fixed, setFixed] = useState(false);
  const refOne = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const handleClickOutside = (e: any) => {
    if (!refOne.current?.contains(e.target)) {
      setNavbarOpen((prev) => !prev);
    } else {
      console.log("Clicked inside...");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setFixed(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <header>
      <nav
        className={`${
          fixed
            ? "fixed w-full z-50 flex justify-between items-center py-8 px-4 mb-8 lg:mb-32 bg-white bg-opacity-90 shadow-base"
            : "fixed w-full z-50 flex justify-between items-center py-8 px-4 mb-8 lg:mb-32"
        }`}
      >
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
          <div
            ref={refOne}
            className="fixed backdrop-blur-sm top-0 left-0 h-screen w-full"
          >
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
      </nav>
      <div className="grid grid-cols-1 gap-y-12 px-8 mb-12 pt-28 lg:grid-cols-2 lg:ap-x-16 lg:items-center lg:pt-48 lg:px-16">
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
        <p className="mb-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nostrum
          sequi? Quasi at est nemo iste! Culpa temporibus sed vitae aspernatur
          dignissimos magnam, optio eius. Aliquid ratione blanditiis eveniet
          fugiat.
        </p>
      </div>
    </header>
  );
};

export default Header;
