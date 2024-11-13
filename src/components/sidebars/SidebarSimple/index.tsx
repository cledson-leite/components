import MenuIcon from "./atoms/Icons/MenuIcon";

import styles from "./Sidebar.module.sass"
export default function Sidebar() {
  return (
    <nav className={styles.conteiner}>
      <div className={styles.logo}>
        <MenuIcon />
        <span className={styles.logoName}>CodingLab</span>
      </div>
    </nav>
  )
}