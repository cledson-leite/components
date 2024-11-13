'use client'

import Image from "next/image";
import styles from "./Profile.module.sass";
import LogoutButton from "../../atoms/Buttons/Logout";
import Avatar from "../../atoms/Avatar";
import ProfileInfo from "../ProfileInfo";

type Props = {
  imgSrc: string;
  name: string;
  job: string;
}

export default function Profile({ imgSrc, name, job }: Props) {
  return (
    <div className={styles.container}>
     <Avatar imgSrc={imgSrc} />
      <ProfileInfo name={name} job={job} />
      <LogoutButton onClick={() => {console.log('logout')}} />
    </div>
  );
}