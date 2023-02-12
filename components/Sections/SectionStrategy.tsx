import { FC } from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import CardStrategy from "../Cards/CardStrategy";

const SectionStrategy: FC = () => {
  return (
    <section className="container flex flex-col items-center mx-auto mb-32">
      <div className="grid items-center grid-cols-2 gap-x-12">
        <div className="col-span-1">
          <Heading
            title="Here are 3 working steps to organize our business projects."
            subtitle="Our Strategy"
            textPosition="text-left"
          />
          <p className="mb-8">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
            id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus
            eget urna mollis.
          </p>
          <p className="mb-8">
            Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
            ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
            consectetur.
          </p>
          <Button>Learn More</Button>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-y-12">
            <CardStrategy
              position="mr-12"
              title="Collect Ideas"
              subtitle="Nulla vitae elit libero pharetra augue dapibus."
              number={1}
            />
            <CardStrategy
              position="ml-20"
              title="Data Analysis"
              subtitle="Vivamus sagittis lacus vel augue laoreet."
              number={2}
            />
            <CardStrategy
              title="Finalize Product"
              subtitle="Cras mattis consectetur purus sit amet."
              number={3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionStrategy;
