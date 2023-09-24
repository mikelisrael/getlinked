import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PurpleFlare from "../general/PurpleFlare";
import { StarGray, StarWhite } from "../general/Stars";

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date("September 26, 2023 00:00:00");

      const difference = targetDate.getTime() - now.getTime();
      let timeLeft = {
        hours: "00",
        minutes: "00",
        seconds: "00",
      };

      if (difference > 0) {
        timeLeft = {
          hours: String(Math.floor(difference / (1000 * 60 * 60))).padStart(
            2,
            "0"
          ),
          minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
            2,
            "0"
          ),
          seconds: String(Math.floor((difference / 1000) % 60)).padStart(
            2,
            "0"
          ),
        };
      } else {
        timeLeft = {
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
      }

      setTimeLeft(timeLeft);
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <header className="pt-10">
      <div className="isolate universal_x grid gap-y-5 md:grid-cols-[40%,60%] items-center">
        <PurpleFlare positions="top-0 left-0" />

        <div className="mx-auto w-max md:hidden mb-7">
          <div className="flex md:hidden items-end flex-col">
            <em className=" block text-sm font-semibold">
              Igniting a Revolution in HR Innovation
            </em>
            <Image
              src="/img/underline.png"
              width={255}
              height={17}
              alt="underline"
              className="w-1/2 mt-1"
            />
          </div>
        </div>

        <section className="isolate relative">
          <StarWhite positions="left-0 -top-20" />
          <StarGray positions="right-10 bottom-20 w-4" />
          <StarGray positions="-right-20 -top-10" />

          <h1
            data-aos="flip-down"
            className="relative second_font text-3xl md:text-5xl lg:text-7xl font-bold md:w-max text-center md:text-left"
          >
            getlinked Te
            <span className="relative">
              c
              <Image
                src="/icons/Creative.png"
                width={53}
                height={73}
                alt="creative"
                priority
                className="w-6 lg:w-8 absolute right-0 -top-4 sm:-top-7 md:-top-8"
              />
            </span>
            h <br /> Hackathon
            <span className="text-primaryPurple"> 1.0</span>
            <Image
              src="/icons/chain.png"
              width={86}
              height={86}
              alt="chain"
              className="w-7 md:w-9 lg:w-12 inline-block"
            />
            <Image
              src="/icons/explosion.png"
              width={58}
              height={58}
              alt="explosion"
              className="w-7 md:w-9 lg:w-12 inline-block"
            />
          </h1>
          <p
            data-aos="flip-down"
            data-aos-duration={1000}
            className="mt-3 md:max-w-md text-center md:text-left"
          >
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize.
          </p>
          <div className=" flex items-center justify-center md:justify-start mt-7 md:mt-10">
            <Link href="/register" className="w-max main_btn !px-7">
              Register
            </Link>
          </div>
          {/* timer */}
          <ul className="mt-8 md:mt-16 flex justify-center md:justify-start gap-2">
            <li>
              <span className="third_font text-4xl md:text-7xl">
                {timeLeft.hours}
              </span>
              <span>H</span>
            </li>
            <li>
              <span className="third_font text-4xl md:text-7xl">
                {timeLeft.minutes}
              </span>
              <span>M</span>
            </li>
            <li>
              <span className="third_font text-4xl md:text-7xl">
                {timeLeft.seconds}
              </span>
              <span>S</span>
            </li>
          </ul>
        </section>

        <section className="flex flex-col items-center gap-10">
          <div
            data-aos="fade-left"
            className="hidden md:flex items-end flex-col"
          >
            <em className="block text-lg lg:text-2xl font-semibold">
              Igniting a Revolution in HR Innovation
            </em>
            <Image
              src="/img/underline.png"
              width={255}
              height={17}
              alt="underline"
              className="w-1/2 mt-1"
            />
          </div>

          <Image
            data-aos="fade-right"
            src="/img/tech_boy.png"
            width={1000}
            height={1000}
            alt="tech boy"
            className="w-full"
            onContextMenu={(e) => e.preventDefault()}
          />
        </section>
      </div>
    </header>
  );
};

export default Header;
