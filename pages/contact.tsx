import PurpleFlare from "@/components/general/PurpleFlare";
import { StarPurple, StarWhite } from "@/components/general/Stars";
import isValidEmail from "@/utils/isValidEmail";

import { LeapFrog } from "@uiball/loaders";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { toast } from "react-toastify";
import phoneMask from "../utils/phoneMask";

const Contact = () => {
  const [formFields, setFormFields] = useState({
    first_name: "",
    phone_number: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailMsg, setEmailMsg] = useState("");

  // scoll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const url = "https://backend.getlinked.ai/hackathon/contact-form";

    const dataBody = {
      ...formFields,
      phone_number: formFields.phone_number.replace(/\s/g, ""),
    };

    try {
      // Submit post request to the URL using form fields as dataBody
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataBody),
      });

      const data = await res.json();

      // check
      if (data) {
        toast.success("Message sent successfully", {
          toastId: "success-request",
        });
        setFormFields({
          first_name: "",
          phone_number: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong", { toastId: "error-request" });
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const isDisabled =
    isSubmitting ||
    !!emailMsg ||
    !formFields.first_name ||
    !formFields.phone_number ||
    !formFields.email ||
    !formFields.message;

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Contact | Getlinked</title>
      </Head>

      <div className="isolate relative universal_x grid md:grid-cols-[40%,60%] lg:grid-cols-2 items-center gap-10 pt-12 pb-24">
        <StarPurple positions="left-0 top-10" />
        <PurpleFlare positions="-left-10 top-20 " />

        <section className="hidden md:block">
          <h1 className="second_font text-primaryPurple font-bold text-2xl md:text-4xl">
            Get in touch
          </h1>

          <div className="mt-8 space-y-5">
            <p>
              Contact <br />
              Information
            </p>

            <p>
              27,Alara Street <br /> Yaba 100012 <br /> Lagos State
            </p>

            <p>Call Us : 0706 798 1819</p>

            <p>
              We are open from Monday - Friday <br /> 08:00am - 05:00pm
            </p>

            <div>
              <span className="text-primaryPurple">Share on</span>
              <ul className="flex gap-3 mt-1">
                <li className="hover:text-primaryPurple text-base md:text-xl cursor-pointer">
                  <FaInstagram />
                </li>
                <li className="hover:text-primaryPurple text-base md:text-xl cursor-pointer">
                  <FaXTwitter />
                </li>
                <li className="hover:text-primaryPurple text-base md:text-xl cursor-pointer">
                  <FaFacebookF />
                </li>
                <li className="hover:text-primaryPurple text-base md:text-xl cursor-pointer">
                  <FaLinkedinIn />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative isolate md:p-8 lg:p-16 md:bg-[#1C152E] md:shadow-md">
          <StarPurple positions="-left-6 bottom-1/2 w-6" />
          <StarWhite positions="right-[7%] bottom-0 w-4" />
          <PurpleFlare positions="-right-40 -bottom-40" />

          <h2 className="second_font text-primaryPurple font-bold text-xl md:text-2xl">
            Questions or need assistance? <br /> Let us know about it!
          </h2>

          <p className="mt-2 block md:hidden">
            Email us below to any question related to our event
          </p>

          <form
            className="mt-8 space-y-7"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="main_input"
              placeholder="First Name"
              name="first_name"
              onChange={handleChange}
              value={formFields.first_name}
            />
            <input
              type="text"
              className="main_input"
              placeholder="Phone number"
              name="phone_number"
              onChange={(e) => handleChange(phoneMask(e))}
              value={formFields.phone_number}
            />
            <input
              type="email"
              className="main_input"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formFields.email}
              onInput={(e) => {
                const email = e.currentTarget.value;
                if (!isValidEmail(email)) {
                  setEmailMsg("Invalid email");
                } else {
                  setEmailMsg("");
                }
              }}
            />
            {emailMsg && (
              <span className="text-red-400 flex gap-1 !mt-3 md:text-sm">
                <HiOutlineExclamationCircle className="text-lg" /> {emailMsg}
              </span>
            )}
            <textarea
              placeholder="Message"
              className="main_input resize-none"
              cols={30}
              rows={5}
              name="message"
              // @ts-ignore
              onChange={handleChange}
              value={formFields.message}
            ></textarea>
            <center>
              <button
                disabled={isDisabled}
                type="submit"
                className="main_btn min-w-[6rem] !px-6"
              >
                {isSubmitting ? (
                  <center className="w-full">
                    <LeapFrog size={28} speed={0.9} color="white" />
                  </center>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </center>
          </form>
        </section>

        <div className="mt-3 flex flex-col gap-2 md:hidden items-center justify-center">
          <span className="text-primaryPurple">Share on</span>
          <ul className="flex gap-3 mt-1">
            <li className="hover:text-primaryPurple text-base md:text-xl cursor-pointer">
              <FaInstagram />
            </li>
            <li className="hover:text-primaryPurple text-base md:text-xl cursor-pointer">
              <FaXTwitter />
            </li>
            <li className="hover:text-primaryPurple text-base md:text-xl cursor-pointer">
              <FaFacebookF />
            </li>
            <li className="hover:text-primaryPurple text-base md:text-xl cursor-pointer">
              <FaLinkedinIn />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
