import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-20">
      <div className="universal_x">
        <h1 className="relative second_font text-3xl md:text-5xl lg:text-7xl font-bold sm:w-max text-center sm:text-left">
          getlinked Te
          <span className="relative">
            c
            <Image
              src="/icons/Creative.png"
              width={53}
              height={73}
              alt="creative"
              className="w-6 lg:w-8 absolute right-0 -top-5 sm:-top-7 md:-top-8"
            />
          </span>
          h <br /> Hackathon
          <span className="text-primaryPurple"> 1.0</span>
          <Image
            src="/icons/chain.png"
            width={86}
            height={86}
            alt="creative"
            className="w-7 md:w-9 lg:w-12 inline-block"
          />
          <Image
            src="/icons/explosion.png"
            width={58}
            height={58}
            alt="creative"
            className="w-7 md:w-9 lg:w-12 inline-block"
          />
        </h1>
        <p className="mt-3 sm:max-w-md text-center sm:text-left">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize.
        </p>

        <div className=" flex items-center justify-center sm:justify-start mt-7 md:mt-10">
          <Link href="/register" className="w-max main_btn !px-7">
            Register
          </Link>
        </div>

        <ul className="mt-8 md:mt-16 flex justify-center sm:justify-start gap-2">
          <li>
            <span className="third_font text-4xl md:text-7xl">00</span>
            <span>H</span>
          </li>
          <li>
            <span className="third_font text-4xl md:text-7xl">00</span>
            <span>M</span>
          </li>
          <li>
            <span className="third_font text-4xl md:text-7xl">00</span>
            <span>S</span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
