import { Icons } from "../../atoms/Icons";

import styles from "./MenuHeader.module.sass";

export default function MenuHeader() {
  return (
    <div className={styles.header}>
      <Icons.Menu className={styles.logoIcon} />
      <span className={styles.logoName}>CodingLab</span>
    </div>
  );
}