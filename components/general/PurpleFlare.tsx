import Image from "next/image";

const PurpleFlare = ({ positions }: { positions: string }) => {
  return (
    <Image
      src="/img/purple_flare.png"
      alt="purple flare"
      width={1077}
      height={959}
      className={`w-[30rem] -rotate-90 absolute ${positions} -z-10`}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
};

export default PurpleFlare;
