  type Props =  React.ButtonHTMLAttributes<HTMLButtonElement>

  import Logout from "../../Icons/LogoutIcon";
  import styles from "./Logout.module.sass";

  export default function LogoutButton({ ...props }: Props) {
    return (
      <button className={styles.logout} {...props}>
        <Logout />
      </button>
    );
  }