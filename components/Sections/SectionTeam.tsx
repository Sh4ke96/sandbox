import { FC } from "react";
import Heading from "../Heading/Heading";
import CardTeam from "../Cards/CardTeam";

const SectionTeam: FC = () => {
  return (
    <section className="container flex flex-col items-center mx-auto mb-32">
      <Heading
        title="Think unique and be innovative. Make a difference with Sandbox."
        subtitle="Our team"
        textPosition="text-center"
      />
      <div className="relative grid grid-cols-1 gap-8 px-16 md:grid-cols-2 xl:px-0 xl:gap-x-8 xl:grid-cols-4">
        <div className="absolute w-32 h-32 -top-6 left-7 xl:-left-9 -z-10 bg-dotted bg-gradient-dotted"></div>
        <div className="absolute w-32 h-32 rounded-full bg-lightBlue -bottom-2 right-3 xl:-right-9 -z-10"></div>
        <div className="col-span-1">
          <CardTeam
            image="/img/avatar-1.jpg"
            alt="avatar Corris Ambady"
            names="Coriss Ambady"
            title="SEO Services"
            text="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo."
            button="Learn More"
          />
        </div>
        <div className="col-span-1">
          <CardTeam
            image="/img/avatar-2.jpg"
            alt="avatar Jackie Sanders"
            names="Jackie Sanders"
            title="Web Design"
            text="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo."
            button="Learn More"
          />
        </div>
        <div className="col-span-1">
          <CardTeam
            image="/img/avatar-3.jpg"
            alt="avatar Nikolas Brooten"
            names="Nikolas Brooten"
            title="Social Engagement"
            text="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo."
            button="Learn More"
          />
        </div>
        <div className="col-span-1">
          <CardTeam
            image="/img/avatar-4.jpg"
            alt="avatar Cory Zamora"
            names="Cory Zamora"
            title="Content Marketing"
            text="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo."
            button="Learn More"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTeam;
