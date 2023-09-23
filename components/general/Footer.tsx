import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhoneVolume,
  FaXTwitter,
} from "react-icons/fa6";
import { StarGray, StarPurple, StarWhite } from "./Stars";

const Footer = () => {
  const router = useRouter();

  const scrollToId = async (id: string) => {
    if (router.pathname !== "/") {
      await router.push("/");
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-themeBlackSecondary py-24">
      <div className="relative isolate universal_x grid md:grid-cols-[1fr,25%,25%] lg:grid-cols-[1fr,20%,20%] gap-10 w-full">
        <StarWhite positions="-left-10 top-10" />
        <StarWhite positions="right-0 bottom-10 w-4" />
        <StarPurple positions="left-1/2 -bottom-16 w-4" />
        <StarGray positions="right-80 top-16 w-3" />

        <section className="relative flex flex-col gap-2">
          <div>
            <Image
              src="/img/logo.png"
              width={170}
              height={32}
              alt="logo"
              className="w-28 md:w-auto"
            />

            <p className="mt-2">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology.
            </p>
          </div>

          <div className="flex-grow flex items-end justify-baseline gap-2 mt-5 md:mt-0">
            <span className="hover:text-primaryPurple cursor-pointer font-medium">
              Terms of Use
            </span>
            <span className="text-primaryPurple text-sm md:text-xl">|</span>
            <span className="hover:text-primaryPurple cursor-pointer font-medium">
              Privacy Policy
            </span>
          </div>
        </section>

        <section>
          <h4 className="text-primaryPurple font-medium text-sm md:text-lg">
            Useful Links
          </h4>

          <ul className="mt-2 space-y-2">
            <li
              className="hover:text-primaryPurple cursor-pointer"
              onClick={() => scrollToId("timeline")}
            >
              Timeline
            </li>
            <li className="hover:text-primaryPurple cursor-pointer">
              Overview
            </li>
            <li
              className="hover:text-primaryPurple cursor-pointer"
              onClick={() => scrollToId("FAQs")}
            >
              FAQs
            </li>
            <li className="hover:text-primaryPurple cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-primaryPurple cursor-pointer">
              <Link href="/register">Register</Link>
            </li>
            <li className="flex gap-3">
              <span className="text-primaryPurple whitespace-nowrap">
                Follow us
              </span>
              <span className="hover:text-primaryPurple text-base md:text-xl cursor-pointer">
                <FaInstagram />
              </span>
              <span className="hover:text-primaryPurple text-base md:text-xl cursor-pointer">
                <FaXTwitter />
              </span>
              <span className="hover:text-primaryPurple text-base md:text-xl cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="hover:text-primaryPurple text-base md:text-xl cursor-pointer">
                <FaLinkedinIn />
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h4 className="text-primaryPurple font-medium text-sm md:text-lg">
            Contact Us
          </h4>

          <ul className="mt-2 space-y-2">
            <li className="flex gap-3 md:gap-5">
              <FaPhoneVolume className="text-sm md:text-lg" />
              +234 679 81819
            </li>
            <li className="flex items-start gap-3 md:gap-5">
              <FaLocationDot className="text-base md:text-xl" />
              27,Alara Street <br /> Yaba 100012 <br /> Lagos State
            </li>
          </ul>
        </section>
      </div>

      <div className="universal_x mt-20 md:text-center text-white md:text-sm">
        All rights reserved. © getlinked Ltd.
      </div>
    </footer>
  );
};

export default Footer;
