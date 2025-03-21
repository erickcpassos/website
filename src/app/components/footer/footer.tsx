import Image from "next/image";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <nav className={styles.footer}>
        <p className={styles.text}>Made by Erick Passos (@erickcpassos)</p>       
    </nav>
  );
}
