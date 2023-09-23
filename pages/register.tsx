import PurpleFlare from "@/components/general/PurpleFlare";
import { StarGray, StarPurple, StarWhite } from "@/components/general/Stars";
import { Modal } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Register = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Register | Getlinked</title>
      </Head>

      <div className="isolate relative universal_x grid md:grid-cols-[1fr,auto] items-center gap-5 md:gap-10 pt-12 pb-24">
        <StarPurple positions="left-0 top-10" />
        <StarGray positions="left-0 bottom-20" />
        <PurpleFlare positions="-left-6 -top-10 " />

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

          <form
            className="mt-8"
            autoComplete="off"
            onSubmit={(e) => e.preventDefault()}
          >
            <section className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="col-span-2 md:col-span-1">
                <span className="font-medium mb-2 block">Team’s Name</span>
                <input
                  type="text"
                  className="main_input"
                  placeholder="Enter the name of your group"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="font-medium mb-2 block">Team’s Name</span>
                <input
                  type="text"
                  className="main_input"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="font-medium mb-2 block">Team’s Name</span>
                <input
                  type="email"
                  className="main_input"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="font-medium mb-2 block">Project Topic</span>
                <input
                  type="text"
                  className="main_input"
                  placeholder="What is your group project topic"
                />
              </div>
              <div>
                <span className="font-medium mb-2 block">Category</span>
                <div className="relative">
                  <span className="absolute right-3 top-4">
                    <FaAngleDown />
                  </span>
                  <select className="main_input">
                    <option value="1">Select a category</option>
                  </select>
                </div>
              </div>
              <div>
                <span className="font-medium mb-2 block">Group Size</span>
                <div className="relative">
                  <span className="absolute right-3 top-4">
                    <FaAngleDown />
                  </span>
                  <select className="main_input">
                    <option value="1">Select</option>
                  </select>
                </div>
              </div>
            </section>

            <em className="block mt-6 text-primaryPurple md:text-sm">
              Please review your registration details before submitting
            </em>

            {/* <div className="mt-6 text-sm">
            <Checkbox
              name="autoDebit"
              //   checked={isAutoDebitSelected}
              checked={false}
              //   onChange={handleCheckboxChange}
              sx={{
                "&.Mui-checked": {
                  color: "#d434fe",
                },
                "&.MuiCheckbox-root": {
                  border: "1px solid white",
                },
              }}
            />
            <input
              type="checkbox"
              className="border border-white !bg-themeBlack text-themeBlack"
              id=""
            />
            <span>
              I agreed with the event terms and conditions and privacy policy
            </span>
          </div> */}

            <button
              onClick={() => setOpen(true)}
              className="main_btn mt-4 md:mt-7 w-full !py-3 z-10"
            >
              Register Now
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
