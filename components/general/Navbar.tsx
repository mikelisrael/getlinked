import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const scrollToId = async (id: string) => {
    if (isOpen) {
      setIsOpen(false);
    }

    if (router.pathname !== "/") {
      await router.push("/");
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-0 ease-in-out duration-300 ${
        window.scrollY !== 0 && "bg-themeBlack shadow-sm shadow-white/5"
      } z-50 py-5 md:py-10 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="universal_x flex items-center justify-between gap-10">
        <Link href="/" className="flex-grow">
          <Image
            src="/img/logo.png"
            width={170}
            height={32}
            alt="logo"
            className="w-28 md:w-auto flex-grow"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-5">
          <li
            className="hover:text-primaryPurple cursor-pointer"
            onClick={() => scrollToId("timeline")}
          >
            Timeline
          </li>
          <li className="hover:text-primaryPurple cursor-pointer">
            <Link href="/">Overview</Link>
          </li>
          <li
            className="hover:text-primaryPurple cursor-pointer"
            onClick={() => scrollToId("FAQs")}
          >
            FAQs
          </li>
          <li
            className={`${
              router.pathname === "/contact" && "gradient_text"
            } hover:text-primaryPurple cursor-pointer `}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <Link
          href="/register"
          className={`hidden md:block ${
            router.pathname === "/register" ? "main_btn_border" : "main_btn"
          }`}
        >
          Register
        </Link>

        <button className="block md:hidden" onClick={() => setIsOpen(true)}>
          <Image
            src="/icons/menu.png"
            width={19}
            height={14}
            alt="menu"
            className="w-4"
          />
        </button>
      </div>

      {/* mobile menu */}
      <aside
        className={`universal_x pt-24 bg-themeBlack fixed top-0 left-0 w-full h-screen overflow-auto transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-200 ease-in-out md:hidden`}
      >
        <button
          className="flex w-full justify-end mb-4"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/icons/close.png"
            width={23}
            height={23}
            alt="menu"
            className="w-5"
          />
        </button>

        <ul className="mt-2 space-y-4">
          <li
            className="text-sm hover:text-primaryPurple cursor-pointer"
            onClick={() => scrollToId("timeline")}
          >
            Timeline
          </li>
          <li
            className="text-sm hover:text-primaryPurple cursor-pointer"
            onClick={() => {
              setIsOpen(false);
              router.push("/");
            }}
          >
            Overview
          </li>
          <li
            className="text-sm hover:text-primaryPurple cursor-pointer"
            onClick={() => scrollToId("FAQs")}
          >
            FAQs
          </li>
          <li
            className="text-sm hover:text-primaryPurple cursor-pointer"
            onClick={() => {
              setIsOpen(false);
              router.push("/contact");
            }}
          >
            Contact
          </li>
        </ul>

        <button
          className="main_btn block w-max mt-7"
          onClick={() => {
            setIsOpen(false);
            router.push("/register");
          }}
        >
          Register
        </button>
      </aside>
    </nav>
  );
};

export default Navbar;
