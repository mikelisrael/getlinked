import PurpleFlare from "@/components/general/PurpleFlare";
import { StarPurple, StarWhite } from "@/components/general/Stars";
import Head from "next/head";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Contact = () => {
  const [formFields, setFormFields] = useState({
    first_name: "",
    phone_number: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = "https://backend.getlinked.ai/hackathon/contact-form";

    if (
      formFields.first_name &&
      formFields.phone_number &&
      formFields.email &&
      formFields.message
    ) {
      // Submit post request to the URL using form fields as data
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formFields),
      });

      const data = await res.json();

      console.log(data);

      // check if response is 200 it's successful
      if (res.status === 200) {
        alert("Message sent successfully");
      } else {
        alert("Something went wrong");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Head>
        <title>Contact | Getlinked</title>
      </Head>

      <div className="relative universal_x grid md:grid-cols-2 items-center gap-10 pt-12 pb-24">
        <StarPurple positions="left-0 top-10" />
        <PurpleFlare positions="-left-10 top-10 " />

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

            <p>Call Us : 07067981819</p>

            <p>
              we are open from Monday-Friday <br /> 08:00am - 05:00pm
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
          <StarWhite positions="right-0 bottom-0 w-6" />
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
              onChange={handleChange}
              value={formFields.phone_number}
            />
            <input
              type="email"
              className="main_input"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formFields.email}
            />
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
              <button type="submit" className="main_btn !px-6">
                Submit
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
    </>
  );
};

export default Contact;
