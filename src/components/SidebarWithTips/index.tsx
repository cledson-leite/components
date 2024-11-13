import styles from './Sidebar.module.sass';
import MenuItem from './molecules/MenuItem';
import NavLinks from './molecules/NavLinks';
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
        <NavLinks routes={routes} />
      </div>
    );
  }
