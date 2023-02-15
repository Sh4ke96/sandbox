import { FC } from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Image from "next/image";

const SectionAnalyze: FC = () => {
  return (
    <section className="container flex flex-col items-center mx-auto mb-32">
      <div className="grid items-center grid-cols-2 gap-x-12">
        <div className="col-span-1">
          <Heading
            title="Wonder how much faster your website can go? Easily check your SEO Score now."
            subtitle="Analyze now?"
            textPosition="text-left"
          />
          <p className="mb-8">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Test
          </p>
          <form action="#">
            <div className="flex">
              <Input type="text" placeholder="Enter Website URL" />
              <Button>Check</Button>
            </div>
          </form>
        </div>
        <div className="col-span-1">
          <Image
            src="/img/analyze-bg.png"
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

export default SectionAnalyze;
