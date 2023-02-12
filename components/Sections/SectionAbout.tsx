import { FC } from "react";
import Heading from "../Heading/Heading";
import CardAbout from "../Cards/CardAbout";

const SectionAbout: FC = () => {
  return (
    <section className="container flex flex-col items-center mx-auto mb-32">
      <Heading
        title="The service we offer is specifically designed to meet your needs."
        subtitle="What We Do?"
        textPosition="text-center"
      />
      <div className="relative grid grid-cols-1 gap-8 px-16 md:grid-cols-2 xl:px-0 xl:gap-x-8 xl:grid-cols-4">
        <div className="absolute w-32 h-32 -top-6 left-7 xl:-left-9 -z-10 bg-dotted bg-gradient-dotted"></div>
        <div className="absolute w-32 h-32 rounded-full bg-lightBlue -bottom-2 right-3 xl:-right-9 -z-10"></div>
        <div className="col-span-1">
          <CardAbout
            image="/img/icons/search-icon.svg"
            alt="search icon"
            title="SEO Services"
            text="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo."
            button="Learn More"
          />
        </div>
        <div className="col-span-1">
          <CardAbout
            image="/img/icons/design-icon.svg"
            alt="design icon"
            title="Web Design"
            text="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo."
            button="Learn More"
          />
        </div>
        <div className="col-span-1">
          <CardAbout
            image="/img/icons/social-icon.svg"
            alt="social icon"
            title="Social Engagement"
            text="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo."
            button="Learn More"
          />
        </div>
        <div className="col-span-1">
          <CardAbout
            image="/img/icons/marketing-icon.svg"
            alt="marketing icon"
            title="Content Marketing"
            text="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo."
            button="Learn More"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
