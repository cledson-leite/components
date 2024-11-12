import styles from "./WithOptions.module.sass";
import { MenuLink } from '../../../atoms/MenuLinks';

type Props = {
  label: string
  options: any
}

export default function WithOptions({ label, options }: Props) {
  return (
    <ul className={styles.container}>
      <li className={styles.title}>{label}</li>
      {options.map((item: any, index: number) => (
        <li key={index} className={styles.items}>
          <MenuLink.WithOutIcon href={item.href}>
            <div className={styles.item}>{item.label}</div>
          </MenuLink.WithOutIcon>
        </li>
      ))}
    </ul>
  );
}