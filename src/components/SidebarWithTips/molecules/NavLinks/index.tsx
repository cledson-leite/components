import MenuItem from "../MenuItem";

import styles from "./NavLinks.module.sass";

type Props = {
  routes: any[]
}

export default function NavLinks({ routes }: Props) {
  return (
    <ul className={styles['nav-links']}>
      {routes.map((route: any, index: number) => {
        return (
          <MenuItem
            href={route.href}
            label={route.label}
            options={route.options}
            key={index}
            icon={route.label}
          />
        );
      })}
    </ul>
  );
}