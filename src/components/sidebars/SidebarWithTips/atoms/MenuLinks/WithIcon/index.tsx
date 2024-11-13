import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
}
import styles from './WithIcon.module.sass';
export default function WithIcon({ href, children }: Props) {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
}