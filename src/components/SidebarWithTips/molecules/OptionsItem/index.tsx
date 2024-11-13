import { PiDropSimpleBold } from 'react-icons/pi';
import { MenuLink } from '../../atoms/MenuLinks';
import styles from './OptionsItem.module.sass';

type Props = {
  href: string;
  label: string;
}

export default function OptionsItem({ label, href, ...props }: Props) {
  return (
    <li className={styles.item} {...props}>
      <MenuLink.WithoutIcon href={href}>
        <div className={styles.label}>{label}</div>
      </MenuLink.WithoutIcon>
    </li>
  );
}