import Image from "next/image";

export const StarPurple = ({ positions }: { positions: string }) => (
  <Image
    src="/icons/star-purple.png"
    alt="star"
    width={20}
    height={20}
    className={`absolute -z-10 ${positions}`}
    onContextMenu={(e) => e.preventDefault()}
  />
);

export const StarWhite = ({ positions }: { positions: string }) => (
  <Image
    src="/icons/star-white.png"
    alt="star"
    width={20}
    height={20}
    className={`absolute -z-10 ${positions}`}
    onContextMenu={(e) => e.preventDefault()}
  />
);

export const StarGray = ({ positions }: { positions: string }) => (
  <Image
    src="/icons/star-grey.png"
    alt="star"
    width={20}
    height={20}
    className={`absolute -z-10 ${positions}`}
    onContextMenu={(e) => e.preventDefault()}
  />
);
