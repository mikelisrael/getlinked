import Image from "next/image";
import PurpleFlare from "../general/PurpleFlare";
import { StarGray, StarPurple, StarWhite } from "../general/Stars";

const JudgingCriteria = () => {
  return (
    <div className="border-t border-b border-gray-700">
      <div className="universal_x grid sm:grid-cols-2 gap-y-5 gap-x-10 items-center py-10 md:py-20">
        <section
          data-aos="fade-in"
          className="relative justify-self-center md:justify-self-auto"
        >
          <Image
            src="/img/man_and_girl.png"
            alt="lightbulb"
            width={710}
            height={622}
            className="w-[200%]"
          />
          <PurpleFlare positions="-left-20 -bottom-20" />
          <StarPurple positions="left-0 -top-10 w-6" />
          <StarGray positions="left-1/2 top-1/2" />
          <StarWhite positions="right-0 bottom-0" />
        </section>

        <section className="relative">
          <PurpleFlare positions="-right-48 -bottom-56" />

          <h2 className="second_font text-center sm:text-left font-bold text-2xl md:text-4xl">
            Judging Criteria
            <span className="block text-primaryPurple">
              Key attributes
            </span>{" "}
          </h2>
          <ul className="mt-5 space-y-3">
            <li data-aos="fade-right">
              <span className="font-bold text-secondaryPurple">
                Innovation and Creativity:
              </span>{" "}
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </li>
            <li data-aos="fade-right">
              <span className="font-bold text-secondaryPurple">
                Functionality:
              </span>{" "}
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </li>
            <li data-aos="fade-right">
              <span className="font-bold text-secondaryPurple">
                Impact and Relevance:
              </span>{" "}
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </li>
            <li data-aos="fade-right">
              <span className="font-bold text-secondaryPurple">
                Technical Complexity:
              </span>{" "}
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </li>
            <li data-aos="fade-right">
              <span className="font-bold text-secondaryPurple">
                Adherence to Hackathon Rules:
              </span>{" "}
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </li>
          </ul>

          <button className="main_btn mt-6 md:mt-10">Read More</button>
        </section>
      </div>
    </div>
  );
};

export default JudgingCriteria;
