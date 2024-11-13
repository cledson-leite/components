import styles from "./WithOptions.module.sass";
import { MenuLink } from '../../../atoms/MenuLinks';
import OptionsItem from "../../OptionsItem";

type Props = {
  label: string
  options: any
}

export default function WithOptions({ label, options }: Props) {
  return (
    <ul className={styles.container}>
      <li className={styles.title}>{label}</li>
      {options.map((item: any, index: number) => (
        <OptionsItem key={index} href={item.href} label={item.label} />
      ))}
    </ul>
  );
}