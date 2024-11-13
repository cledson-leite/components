import styles from './BaseLayoutHeader.module.sass'

type Props = {
  children: React.ReactNode
}

export default function BaseLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a className={styles.logo} href="/">Logo</a>
        <nav className={styles.nav}>Menu</nav>
      </header>
      <main className={styles.main}>{children}</main>
      <aside className={styles.aside}>Relacional</aside>
      <footer className={styles.footer}>Rodapé</footer>
    </div>
  );
}