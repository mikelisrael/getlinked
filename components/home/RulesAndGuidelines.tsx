import Image from "next/image";
import PurpleFlare from "../general/PurpleFlare";
import { StarGray, StarWhite } from "../general/Stars";

const RulesAndGuidelines = () => {
  return (
    <div className="border-t border-b border-gray-700">
      <div className="isolate universal_x reverse grid sm:grid-cols-2 gap-x-10 gap-y-5 items-center py-10 md:py-20">
        <section
          data-aos="zoom-in"
          className="relative justify-self-center md:justify-self-auto"
        >
          {" "}
          <PurpleFlare positions="-right-24 -bottom-0" />
          <Image
            src="/img/woman_calculator.png"
            alt="woman calculator"
            width={664}
            height={664}
            className="w-[200%]"
          />
        </section>

        <section className="relative">
          <PurpleFlare positions="-left-48 -top-48" />
          <StarGray positions="left-20 -top-40" />
          <StarWhite positions="right-10 -bottom-20 w-6" />

          <h2
            data-aos="fade-up"
            className="second_font text-center sm:text-left font-bold text-2xl md:text-4xl"
          >
            Rules and
            <span className="block text-primaryPurple">Guidelines</span>{" "}
          </h2>
          <p data-aos="fade-up" className="mt-3 text-center sm:text-left">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </section>
      </div>
    </div>
  );
};

export default RulesAndGuidelines;
