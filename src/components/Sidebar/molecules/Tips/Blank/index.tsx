import styles from "./Blank.module.sass";

type Props = {
  label: string
}

export default function Blank({ label }: Props) {
  return <div className={`${styles.container}`}>{label}</div>;
}