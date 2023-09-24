import Image from "next/image";
import PurpleFlare from "../general/PurpleFlare";
import { StarGray, StarPurple, StarWhite } from "../general/Stars";

const PrizesAndRewards = () => {
  return (
    <div className="bg-themeBlackSecondary">
      <div className="relative isolate universal_x grid reverse sm:grid-cols-2 gap-y-5 gap-x-10 items-center py-10 md:py-20">
        <StarWhite positions="left-1/2 bottom-50" />
        <StarPurple positions="left-0 top-10 " />{" "}
        <StarWhite positions="-left-5 bottom-40 w-4" />{" "}
        <section className="relative justify-self-center md:justify-self-auto">
          <div data-aos="fade-right" className="max-w-md">
            <h2 className="second_font text-center sm:text-left font-bold text-2xl md:text-4xl">
              Prizes and
              <span className="block text-primaryPurple">Rewards</span>
            </h2>

            <div className="mt-3 text-center md:text-left">
              Highlight of the prizes or rewards for winners and for
              participants
            </div>
          </div>

          <Image
            data-aos="zoom-out"
            src="/img/Rewards.png"
            alt="rewards"
            width={692}
            height={494}
            className="w-[200%] mt-12"
          />
          <StarWhite positions="-right-10 bottom-80" />
          <StarGray positions="right-0 -bottom-10" />
        </section>
        <section className="relative" data-aos="zoom-in">
          <Image src="/img/trophy.png" alt="trophy" width={548} height={482} />
          <PurpleFlare positions="-right-0 -top-[8rem]" />
        </section>
      </div>
    </div>
  );
};

export default PrizesAndRewards;
