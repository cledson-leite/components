import styles from './ProfileInfo.module.sass';

type Props = {
  name: string;
  job: string;
}

export default function ProfileInfo({ name, job }: Props) {
  return (
      <div className={styles['name-job']}>
        <div className={styles.name}>{name}</div>
        <div className={styles.job}>{job}</div>
    </div>
  );
}