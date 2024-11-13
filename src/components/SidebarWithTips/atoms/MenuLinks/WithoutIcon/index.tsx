import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
}
import styles from './WithoutIcon.module.sass';
export default function WithoutIcon({ href, children, ...props }: Props) {
  return (
    <Link href={href} className={styles.link} {...props}>
      {children}
    </Link>
  );
}