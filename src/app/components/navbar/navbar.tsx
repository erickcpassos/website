import Image from "next/image";
import styles from "./navbar.module.scss";

import navbarMenu from "../../../../public/navbarmenu.svg";

export interface NavbarProps {
    isShown: boolean;
}

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <p className={styles.logo}>Hi! I'm <span>Erick</span>.</p>       
        <Image className={styles.icon} priority src={navbarMenu} alt="Navbar Menu"/>

    </nav>
  );
}
