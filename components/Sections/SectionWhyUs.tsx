import { FC } from "react";
import Heading from "../Heading/Heading";
import Image from "next/image";
import { Accordion } from "flowbite-react";

const SectionWhyUs: FC = () => {
  return (
    <section className="container flex flex-col items-center mx-auto mb-32">
      <div className="grid items-center grid-cols-2 gap-x-12">
        <div className="col-span-1">
          <Image
            src="/img/whyus-bg.png"
            alt="man with laptop and rocket"
            width={0}
            height={0}
            sizes={"100vw"}
            className="w-full h-auto "
          />
        </div>
        <div className="col-span-1 pr-20">
          <Heading
            title="We bring solutions to make life easier for our clients."
            subtitle="Why choose us?"
            textPosition="text-left"
          />
          <Accordion className="border-none accordion" collapseAll={true}>
            <Accordion.Panel className="my-4">
              <Accordion.Title>
                <p className="text-lg text-orange">Professional Design</p>
              </Accordion.Title>
              <Accordion.Content>
                <p className="my-6 text-sm text-black">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Cras mattis consectetur purus sit amet fermentum. Praesent
                  commodo cursus magna, vel.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel className="my-4">
              <Accordion.Title>
                <p className="text-lg text-orange">Header and Slider Options</p>
              </Accordion.Title>
              <Accordion.Content>
                <p className="my-6 text-sm text-black">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Cras mattis consectetur purus sit amet fermentum. Praesent
                  commodo cursus magna, vel.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel className="my-4">
              <Accordion.Title>
                <p className="text-lg text-orange">Top-Notch Support</p>
              </Accordion.Title>
              <Accordion.Content>
                <p className="my-6 text-sm text-black">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Cras mattis consectetur purus sit amet fermentum. Praesent
                  commodo cursus magna, vel.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SectionWhyUs;
