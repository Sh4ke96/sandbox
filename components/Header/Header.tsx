import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

const Header: FC = () => {
  return (
    <header className="container mx-auto">
      <nav className="flex justify-between items-center py-8 mb-32">
        <Image src="/img/logo.png" alt="sandbox logo" width="134" height="26" />
        <ul className="flex gap-x-12 font-bold text-xl">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li>
            <Link href="/solutions">Solutions</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex gap-x-6">
          <div className="w-8 h-8 bg-orange"></div>
          <div className="w-8 h-8 bg-black"></div>
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
