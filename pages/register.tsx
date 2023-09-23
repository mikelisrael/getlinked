import PurpleFlare from "@/components/general/PurpleFlare";
import { StarGray, StarPurple, StarWhite } from "@/components/general/Stars";
import isValidEmail from "@/utils/isValidEmail";
import { Checkbox, Modal } from "@mui/material";
import { LeapFrog } from "@uiball/loaders";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { toast } from "react-toastify";
import phoneMask from "../utils/phoneMask";

const Register = () => {
  const [open, setOpen] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: "",
    project_topic: "",
    category: "",
    privacy_poclicy_accepted: false,
  });
  const [emailMsg, setEmailMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(false);

    const url = "https://backend.getlinked.ai/hackathon/registration";

    const dataBody = {
      ...formFields,
      phone_number: formFields.phone_number.replace(/\s/g, ""),
      privacy_poclicy_accepted: true,
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataBody),
      });

      const data = await res.json();

      if (data) {
        setFormFields({
          email: "",
          phone_number: "",
          team_name: "",
          group_size: "",
          project_topic: "",
          category: "",
          privacy_poclicy_accepted: false,
        });
        setIsSubmitting(false);
        setOpen(true);
      }
    } catch (error) {
      toast.error("Something went wrong, please try again", {
        toastId: "error-request",
      });
    }
  };

  const isDisabled: boolean =
    isSubmitting ||
    !!emailMsg ||
    !formFields.email ||
    !formFields.phone_number ||
    !formFields.team_name ||
    !formFields.group_size ||
    !formFields.project_topic ||
    !formFields.category ||
    !formFields.privacy_poclicy_accepted;

  return (
    <>
      <Head>
        <title>Register | Getlinked</title>
      </Head>

      <div className="isolate relative universal_x grid md:grid-cols-[1fr,auto] items-center gap-5 md:gap-10 pt-12 pb-24">
        <StarPurple positions="left-5 top-10" />
        <StarGray positions="left-0 bottom-20" />
        <PurpleFlare positions="-left-6 top-12 " />

        <section className="relative block sm:hidden lg:block">
          <Image
            src="/img/guy_on_desk.png"
            alt="guy on desk"
            width={717}
            height={717}
          />
        </section>

        <section className="relative isolate md:p-8 lg:p-10 md:bg-[#1C152E] md:shadow-md">
          <StarPurple positions="-left-6 bottom-1/2 w-6" />
          <StarWhite positions="right-0 bottom-0 w-6" />
          <StarGray positions="right-10 top-20 w-4" />
          <PurpleFlare positions="-right-40 -bottom-40" />

          <h2 className="second_font text-primaryPurple mb-3 md:mb-7 font-bold text-xl md:text-2xl">
            Register
          </h2>

          <div className="flex items-end">
            Be part of this movement
            <div className="flex border-b border-dashed border-primaryPurple">
              <Image
                src="/icons/walking_woman.png"
                alt="arrow"
                width={26}
                height={26}
                className="ml-2"
              />
              <Image
                src="/icons/walking_man.png"
                alt="arrow"
                width={30}
                height={30}
                className="-ml-2"
              />
            </div>
          </div>

          <h1 className="text-base md:text-xl mt-3 font-medium">
            CREATE YOUR ACCOUNT
          </h1>

          <form className="mt-8" autoComplete="off" onSubmit={handleSubmit}>
            <section className="grid grid-cols-2 gap-4 md:gap-x-6 md:gap-y-8">
              <div className="col-span-2 md:col-span-1">
                <span className="font-medium mb-2 block">Team’s Name</span>
                <input
                  type="text"
                  className="main_input"
                  placeholder="Enter the name of your group"
                  name="team_name"
                  onChange={handleChange}
                  value={formFields.team_name}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="font-medium mb-2 block">Phone</span>
                <input
                  type="text"
                  className="main_input"
                  placeholder="Enter your phone number"
                  name="phone_number"
                  onChange={(e) => handleChange(phoneMask(e))}
                  value={formFields.phone_number}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="font-medium mb-2 block">Email</span>
                <input
                  type="email"
                  className="main_input"
                  placeholder="Enter your email address"
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
                    <HiOutlineExclamationCircle className="text-lg" />{" "}
                    {emailMsg}
                  </span>
                )}
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="font-medium mb-2 block">Project Topic</span>
                <input
                  type="text"
                  className="main_input"
                  placeholder="What is your group project topic"
                  name="project_topic"
                  onChange={handleChange}
                  value={formFields.project_topic}
                />
              </div>
              <div>
                <span className="font-medium mb-2 block">Category</span>
                <div className="relative">
                  <span className="absolute right-3 top-4">
                    <FaAngleDown />
                  </span>
                  <select
                    className="main_input"
                    name="category"
                    onChange={handleChange}
                    value={formFields.category}
                  >
                    <option value="">Select a category</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div>
                <span className="font-medium mb-2 block">Group Size</span>
                <div className="relative">
                  <span className="absolute right-3 top-4">
                    <FaAngleDown />
                  </span>
                  <select
                    className="main_input"
                    name="group_size"
                    onChange={handleChange}
                    value={formFields.group_size}
                  >
                    <option value="">Select</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </div>
            </section>

            <em className="block mt-6 text-primaryPurple md:text-sm">
              Please review your registration details before submitting
            </em>

            <label className="!mt-3 text-sm flex">
              <div className="stacked">
                <div className="p-2 w-4 h-4 border-2 rounded-sm border-white" />
                {/* white border checkbox */}
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "#d434fe",
                    },
                  }}
                  checked={formFields.privacy_poclicy_accepted}
                  onChange={(e) =>
                    setFormFields((prev) => ({
                      ...prev,
                      privacy_poclicy_accepted: e.target.checked,
                    }))
                  }
                  className="!border-white !rounded-sm !w-5 !h-5 !border-2 !mr-2"
                />
              </div>
              <span>
                I agreed with the event terms and conditions and privacy policy
              </span>
            </label>

            <button
              disabled={isDisabled}
              className="main_btn mt-4 md:mt-7 w-full !py-3 z-10"
            >
              {isSubmitting ? (
                <center className="w-full">
                  <LeapFrog size={28} speed={0.9} color="white" />
                </center>
              ) : (
                <span>Register Now</span>
              )}
            </button>
          </form>

          <Modal open={open} onClose={() => setOpen(false)}>
            <div className="flex h-full w-full justify-center items-center bg-black/70">
              <div
                data-aos="zoom-out"
                data-aos-duration={400}
                className={`isolate relative flex items-center flex-col w-11/12 border border-primaryPurple rounded-md sm:w-3/5 md:w-1/2 px-6 py-8 xl:w-1/3`}
              >
                <StarPurple positions="-top-5 right-0" />
                <StarGray positions="top-40 left-5" />

                <Image
                  src="/img/congratulation.png"
                  alt="congratulation"
                  width={471}
                  height={321}
                  className="w-36 md:w-42 lg:w-64"
                />

                <h2 className="text-base md:text-2xl mt-5 text-center font-semibold">
                  Congratulations you have successfully Registered!
                </h2>

                <div className="mt-3 text-center">
                  Yes, it was easy and you did it! <br />
                  check your mail box for next step
                </div>

                <button
                  className="main_btn mt-7 w-full !py-3 z-10"
                  onClick={() => setOpen(false)}
                >
                  Back
                </button>
              </div>
            </div>
          </Modal>
        </section>
      </div>
    </>
  );
};

export default Register;
