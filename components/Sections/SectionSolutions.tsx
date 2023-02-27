import Image from "next/image";
import { FC } from "react";
import Heading from "../Heading/Heading";
import { BiCheckCircle } from "react-icons/bi";

const SectionSolutions: FC = () => {
  return (
    <section className="container flex flex-col items-center mx-auto mb-32">
      <div className="grid items-center grid-cols-2 gap-x-12">
        <div className="col-span-1">
          <Heading
            title="We make your spending stress-free for you to have the perfect control."
            subtitle="Our Solutions"
            textPosition="text-left"
          />
          <p className="mb-8">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus.
          </p>
          <div>
            <ul className="grid grid-cols-4 gap-x-12 gap-y-6">
              <li className="flex col-span-2 text-lg">
                <BiCheckCircle className="w-6 h-6 mr-4 text-orange" />
                Aenean quam ornare. Curabitur blandit.
              </li>
              <li className="flex col-span-2 text-lg">
                <BiCheckCircle className="w-6 h-6 mr-4 text-orange" />
                Etiam porta euismod malesuada mollis.
              </li>
              <li className="flex col-span-2 text-lg">
                <BiCheckCircle className="w-6 h-6 mr-4 text-orange" />
                Nullam quis risus eget urna mollis ornare.
              </li>
              <li className="flex col-span-2 text-lg">
                <BiCheckCircle className="w-6 h-6 mr-4 text-orange" />
                Vivamus sagittis lacus vel augue rutrum.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-1">
          <Image
            src="/img/solutions-bg.png"
            alt="man with laptop and rocket"
            width={0}
            height={0}
            sizes={"100vw"}
            className="w-full h-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default SectionSolutions;
