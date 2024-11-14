import { Icons } from '../Icons';
import styles from './NavLinks.module.sass';

type Props = {
  icon: keyof typeof Icons
  label: string,
  href: string
}

export default function NavLinks({icon, label, href}: Props) {
  const Icon = Icons[icon];
  return (
    <li className={styles.list}>
      <a href={href} className={styles.navLink}>
        <Icon className={styles.linkIcon} />
        <span className={styles.linkName}>{label}</span>
      </a>
    </li>
  );
}