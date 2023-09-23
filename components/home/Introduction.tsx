import Image from "next/image";
import { StarPurple } from "../general/Stars";

const Introduction = () => {
  return (
    <div className="border-t border-b border-gray-700">
      <div className="universal_x grid sm:grid-cols-2 gap-y-5 gap-x-10 items-center py-10 md:py-20">
        <section
          data-aos="fade-in"
          className="relative isolate justify-self-center md:justify-self-auto"
        >
          <StarPurple positions="-left-10 top-40" />

          <Image
            src="/img/lightbulb.png"
            alt="lightbulb"
            width={490}
            height={477}
          />
        </section>

        <section className="relative">
          <StarPurple positions="right-0 top-0" />

          <h2
            data-aos="fade-up"
            className="second_font text-center sm:text-left font-bold text-2xl md:text-4xl"
          >
            Introduction to getlinked
            <span className="block text-primaryPurple">
              tech Hackathon 1.0
            </span>{" "}
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

export default Introduction;
