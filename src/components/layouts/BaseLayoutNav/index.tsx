import styles from './BaseLayoutNav.module.sass'

type Props = {
  children: React.ReactNode
}

export default function BaseLayout({ children }: Props) {
  return (
    <div className={styles.container  }>
      <header className={styles.header}>Cabeçalho</header>
      <nav className={styles.nav}>Menu</nav>
      <main className={styles.main}>{children}</main>
      <aside className={styles.aside}>Relacional</aside>
      <footer className={styles.footer}>Rodapé</footer>
    </div>
  );
}