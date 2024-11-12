import { MenuIcon } from "../../atoms/Icons/MenuIcon";
import { MenuLink } from "../../atoms/MenuLinks";
import { Tips } from "../Tips";

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
        {!options.length ? <Tips.Blank label={label} /> : <Tips.WithOptions options={options} label={label} />}
      </div>
    </li>
  );
}