import { MenuIcon } from "../../atoms/Icons/MenuIcon";
import { MenuLink } from "../../atoms/MenuLinks";
import ToolTip from "../Tips";

import styles from "./MenuItem.module.sass";

type Props = {
  href: string;
  label: string;
  icon: keyof typeof MenuIcon;
  options: any[];
};

export default function MenuItem({options, href, label, icon}: Props){
  const close = false
  const Icon = MenuIcon[icon];
  return (
    <li className={styles.menuItem}>
      <MenuLink.WithIcon href={href}>
        <Icon className={styles.icon} />
        {!close && <span className={styles.name}>{label}</span>}
      </MenuLink.WithIcon>
      <div className={styles.tips}>
        <ToolTip label={label} options={options} />
      </div>
    </li>
  );
}