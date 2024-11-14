
import ListLinks from "./molecules/ListLinks";
import MenuFooter from "./molecules/MenuFooter";
import MenuHeader from "./molecules/MenuHeader";
import styles from "./SidebarSimple.module.sass"
export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <MenuHeader />
      <div className={styles.sidebarContents}>
        <ListLinks />
        <MenuFooter />
      </div>
    </nav>
  );
}