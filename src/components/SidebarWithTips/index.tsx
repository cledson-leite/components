import styles from './Sidebar.module.sass';
import MenuItem from './molecules/MenuItem';
import Profile from './molecules/Profile';

  export default function Sidebar() {
    const close = false
    const routes = [
      { href: '/', label: 'Dashboard', options: [] },
      {
        href: '/category',
        label: 'Category',
        options: [
          { href: '/web', label: 'HTML & CSS' },
          { href: '/login', label: 'JavaScript' },
          { href: '/card', label: 'Node & MongoDB' },
        ],
      },
      { href: '/', label: 'Dashboard', options: [] },
      {
        href: '/category',
        label: 'Category',
        options: [
          { href: '/web', label: 'HTML & CSS' },
          { href: '/login', label: 'JavaScript' },
          { href: '/card', label: 'Node & MongoDB' },
        ],
      },
      {
        href: '/category',
        label: 'Category',
        options: [
          { href: '/web', label: 'HTML & CSS' },
          { href: '/login', label: 'JavaScript' },
          { href: '/card', label: 'Node & MongoDB' },
        ],
      },
      {
        href: '/category',
        label: 'Category',
        options: [
          { href: '/web', label: 'HTML & CSS' },
          { href: '/login', label: 'JavaScript' },
          { href: '/card', label: 'Node & MongoDB' },
        ],
      },
      { href: '/', label: 'Dashboard', options: [] },
    ];
    return (
      <div className={`${styles.sidebar} ${close && styles.close}`}>
        <Profile name="Cledson Leite" job="Web Designer" imgSrc="/logo.png" />

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
      </div>
    );
  }
