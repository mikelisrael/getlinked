import Image from "next/image";
import React from "react";
import PurpleFlare from "../general/PurpleFlare";
import { StarPurple, StarWhite } from "../general/Stars";

const PartnersAndSponsors = () => {
  return (
    <div className="py-10 md:py-20">
      <div className="universal_x">
        <h2 className="second_font text-center font-bold text-2xl md:text-4xl">
          Partners And Sponsors
        </h2>
        <p className="mt-3 mx-auto max-w-lg text-center">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>

        <div className="relative mt-10 md:mt-20">
          <PurpleFlare positions="-right-48 -bottom-56" />
          <PurpleFlare positions="-left-48 -top-56 !z-10" />
          <StarPurple positions="left-32 -top-24" />
          <StarPurple positions="left-1/2 top-24 w-4" />
          <StarWhite positions="hidden md:block left-[55%] bottom-20" />

          <Image
            src="/img/partners.png"
            alt="partners"
            width={1255}
            height={560}
            className="w-[200%]"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
};

export default PartnersAndSponsors;
