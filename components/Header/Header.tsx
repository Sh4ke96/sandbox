import { FC } from "react";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header className="container mx-auto">
      <nav className="flex justify-between items-center py-8">
        <div>
          <Image
            src="/img/logo.png"
            alt="sandbox logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <ul className="flex gap-x-12">
          <li>About</li>
          <li>Services</li>
          <li>Team</li>
          <li>Solutions</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-x-6">
          <div className="w-8 h-8 bg-orange"></div>
          <div className="w-8 h-8 bg-black"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
