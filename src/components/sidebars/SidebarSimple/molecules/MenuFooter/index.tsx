import { Icons } from '../../atoms/Icons';
import NavLinks from '../../atoms/NavLinks';

import styles from './MenuFooter.module.sass';

export default function MenuFooter() {
  return (
    <div className={styles.footer}>
      <ul className={styles.lists}>
        <NavLinks icon="Setting" label="Configuração" href="/" />
        <NavLinks icon="Logout" label="Sair" href="/" />
      </ul>
    </div>
  );
}
