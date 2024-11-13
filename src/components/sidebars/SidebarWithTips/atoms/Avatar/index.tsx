import Image from "next/image";

import styles from "./Avatar.module.sass";

type Props = {
  imgSrc: string
}

export default function Avatar({ imgSrc }: Props) {
  return (
    <Image
      src={imgSrc}
      alt="profile"
      width={52}
      height={52}
      className={styles.avatar}
    />
  );
}