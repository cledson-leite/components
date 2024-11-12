'use client'

import Image from "next/image";
import styles from "./Profile.module.sass";
import LogoutButton from "../../atoms/Buttons/Logout";

type Props = {
  imgSrc: string;
  name: string;
  job: string;
}

export default function Profile({ imgSrc, name, job }: Props) {
  return (
    <div className={styles.container}>
      <Image
        src={imgSrc}
        alt="profile"
        width={52}
        height={52}
        className={styles.avatar}
      />
      <div className={styles['name-job']}>
        <div className={styles.name}>{name}</div>
        <div className={styles.job}>{job}</div>
      </div>
      <LogoutButton onClick={() => {console.log('logout')}} />
    </div>
  );
}