import Image from "next/image";
import PurpleFlare from "../general/PurpleFlare";
import { StarGray, StarPurple, StarWhite } from "../general/Stars";

const PrivatePolicyAndTerms = () => {
  return (
    <div className="border-t border-b border-gray-700">
      <div className="universal_x grid sm:grid-cols-2 gap-10 items-center py-10 md:py-20">
        <section className="relative">
          <PurpleFlare positions="-left-48 -bottom-56 !z-10" />
          <StarGray positions="left-32 -top-24" />
          <StarPurple positions="right-32 top-20 w-4 hidden md:block" />
          <StarPurple positions="-left-20 -bottom-10 w-4" />

          <h2 className="second_font text-center sm:text-left font-bold text-2xl md:text-4xl">
            Privacy Policy and
            <span className="block text-primaryPurple">Terms</span>{" "}
          </h2>

          <span className="mt-5 block text-center md:text-left">
            Last updated on September 12, 2023
          </span>

          <p className="mt-5 text-center md:text-left">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>

          <div className=" mt-7 md:mt-14 space-y-6 border border-primaryPurple p-7 md:p-16 rounded-md overflow-hidden">
            <p className="text-center  md:text-left">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.{" "}
            </p>

            <h3 className="text-primaryPurple font-semibold text-sm md:text-lg">
              Licensing Policy
            </h3>
            <span className="mt-5 font-medium">
              Here are terms of our Standard License:
            </span>

            <ul className="space-y-3">
              <li data-aos="fade-right" className="flex gap-5">
                <span>
                  <Image
                    src="/icons/check.png"
                    alt="check"
                    width={17}
                    height={17}
                    className="w-7"
                  />
                </span>
                <span className="-translate-y-1">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </span>
              </li>

              <li data-aos="fade-right" className="flex gap-5">
                <span>
                  <Image
                    src="/icons/check.png"
                    alt="check"
                    width={17}
                    height={17}
                    className="w-7"
                  />
                </span>
                <span className="-translate-y-1">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="relative justify-self-center md:justify-self-auto stacked">
          <StarWhite positions="right-32 top-20" />
          <StarWhite positions="left-20 bottom-20 w-4" />
          <StarGray positions="right-0 bottom-5" />
          <StarPurple positions="left-40 bottom-40 w-4" />

          <Image
            data-aos="fade-down"
            src="/img/shield.png"
            alt="shield"
            width={530}
            height={648}
          />
          <Image
            data-aos="fade-up"
            src="/img/unlocked.png"
            alt="unlocked"
            width={599}
            height={749}
            className="mt-14"
          />
        </section>
      </div>
    </div>
  );
};

export default PrivatePolicyAndTerms;
